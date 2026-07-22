"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  datoCmsResourcesCertificatesRepository: () => datoCmsResourcesCertificatesRepository
});
module.exports = __toCommonJS(index_exports);

// src/provider/resources_certificates.repository.ts
var import_shared_remote_config = require("@ason_cs_ts/shared-remote_config");

// src/api/index.ts
var import_cda_client = require("@datocms/cda-client");
var import_shared = require("@ason_cs_ts/shared");
async function execute(query, defaultValue) {
  try {
    return await (0, import_cda_client.executeQuery)(query, {
      token: process.env.DATOCMS_READONLY_TOKEN
    });
  } catch (error) {
    (0, import_shared.getLogger)().error(
      "@datocms/cda-client.executeQuery",
      error
    );
    return defaultValue;
  }
}

// src/api/certificate.ts
function allCertificates() {
  return execute(
    /* GraphQL */
    `
			{
				allCertificates {
					date
					description
					image {
						url
					}
					issuer
					issuerLink
					pdf {
						url
					}
					title
					url
				}
			}
		`,
    {
      allCertificates: []
    }
  );
}

// src/provider/resources_certificates.repository.ts
function datoCmsResourcesCertificatesRepository() {
  return {
    async getCertificates() {
      const certificate = await allCertificates().then(
        (data) => data.allCertificates.map(
          (certificate2) => {
            const date = new Date(
              certificate2.date
            );
            return {
              dateDay: date.getDate() + 1,
              dateMonth: date.getMonth() + 1,
              dateYear: date.getFullYear(),
              description: certificate2.description,
              image: certificate2.image.url,
              issuer: certificate2.issuer,
              issuerLink: certificate2.issuerLink,
              pdf: certificate2.pdf.url,
              title: certificate2.title,
              url: certificate2.url
            };
          }
        )
      );
      if (certificate.length > 0) return certificate;
      else return import_shared_remote_config.defaultCertificates;
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  datoCmsResourcesCertificatesRepository
});
