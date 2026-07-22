"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../i18n/core/dist/index.js
var require_dist = __commonJS({
  "../../i18n/core/dist/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var index_exports2 = {};
    __export2(index_exports2, {
      Lang: () => Lang2,
      defaultI18nProvider: () => defaultI18nProvider,
      en: () => en_default,
      es: () => es_default,
      getStringsUsecase: () => getStringsUsecase,
      langs: () => langs,
      notTranslatable: () => notTranslatable,
      pt: () => pt_default
    });
    module2.exports = __toCommonJS2(index_exports2);
    var notTranslatable = {
      docker_hub: "https://hub.docker.com/repositories/asoncs",
      email: "asoncsts@gmail.com",
      email2: "acsgsa92@gmail.com",
      github: "https://github.com/AsonCS",
      name: "Anderson Costa da Silva",
      phone: "+55 (11) 98220-2014",
      phone2: "+55 (11) 91045-3711",
      projects: {
        card: {
          demo: "Demo"
        }
      },
      place: "https://maps.app.goo.gl/yd8YaCoTKneBD8Bp9",
      username: "AsonCS"
    };
    var Lang2 = /* @__PURE__ */ ((Lang3) => {
      Lang3["DEFAULT"] = "en";
      Lang3["EN"] = "en";
      Lang3["ES"] = "es";
      Lang3["PT"] = "pt";
      return Lang3;
    })(Lang2 || {});
    function langs() {
      return Object.values(Lang2);
    }
    var resources_exports = {};
    __export2(resources_exports, {
      en: () => en_default,
      es: () => es_default,
      pt: () => pt_default
    });
    var en_default = {
      certificates: {
        card: {
          view: "View Certificate"
        },
        subtitle: "Professional certifications and courses I've completed",
        title: "My Certificates"
      },
      contact: {
        info: {
          detail: "Business Details",
          info: "Contact Information",
          name: "Business Name",
          subtitle: "My official business details",
          title: "Business Information"
        },
        form: {
          message: "Message",
          message_placeholder: "Your message",
          name: "Name",
          name_placeholder: "Your name",
          send: "Send message",
          subject: "Subject",
          subject_placeholder: "What is this regarding?",
          subtitle: "Fill out the form below to get in touch",
          title: "Send a Message"
        },
        subtitle: "Get in touch for business inquiries or project collaboration",
        title: "Contact Me"
      },
      home: {
        layout: {
          "# Nav Reflects navigation bar order": "",
          nav: {
            home: "Home",
            projects: "Projects",
            certificates: "Certificates",
            contact: "Contact"
          }
        },
        metadata: {
          description: "My portfolio website, showcasing projects, certificates, and business information.",
          generator: "v0.dev",
          title: "Anderson Costa da Silva - Portfolio - AsonCS TS"
        },
        rights: "All rights reserved",
        subtitle: "Software Developer & Technology Enthusiast",
        view_certificates: "View Certificates",
        view_projects: "View Projects"
      },
      projects: {
        card: {
          code: "Code",
          no_description: "No description available"
        },
        empty: {
          check_later: "Check back later or visit my GitHub profile directly",
          not_found: "No repositories found",
          visit_github: "Visit GitHub Profile"
        },
        subtitle: "Explore my latest projects and contributions on GitHub",
        title: "My GitHub Projects"
      }
    };
    var es_default = {
      certificates: {
        card: {
          view: "Ver Certificado"
        },
        subtitle: "Certificaciones profesionales y cursos que he completado",
        title: "Mis Certificados"
      },
      contact: {
        info: {
          detail: "Detalles del Negocio",
          info: "Informaci\xF3n de Contacto",
          name: "Nombre del Negocio",
          subtitle: "Mis detalles oficiales del negocio",
          title: "Informaci\xF3n del Negocio"
        },
        form: {
          message: "Mensaje",
          message_placeholder: "Tu mensaje",
          name: "Nombre",
          name_placeholder: "Tu nombre",
          send: "Enviar mensaje",
          subject: "Asunto",
          subject_placeholder: "\xBFDe qu\xE9 se trata?",
          subtitle: "Rellena el formulario a continuaci\xF3n para ponerte en contacto",
          title: "Enviar un Mensaje"
        },
        subtitle: "Ponte en contacto para consultas comerciales o colaboraci\xF3n en proyectos",
        title: "Cont\xE1ctame"
      },
      home: {
        layout: {
          "# Nav Reflects navigation bar order": "",
          nav: {
            home: "Inicio",
            projects: "Proyectos",
            certificates: "Certificados",
            contact: "Contacto"
          }
        },
        metadata: {
          description: "Mi sitio web de portafolio, mostrando proyectos, certificados e informaci\xF3n comercial.",
          generator: "v0.dev",
          title: "Anderson Costa da Silva - Portafolio - AsonCS TS"
        },
        rights: "Todos los derechos reservados",
        subtitle: "Desarrollador de Software y Entusiasta de la Tecnolog\xEDa",
        view_certificates: "Ver Certificados",
        view_projects: "Ver Proyectos"
      },
      projects: {
        card: {
          code: "C\xF3digo",
          no_description: "No hay descripci\xF3n disponible"
        },
        empty: {
          check_later: "Vuelve m\xE1s tarde o visita mi perfil de GitHub directamente",
          not_found: "No se encontraron repositorios",
          visit_github: "Visitar Perfil de GitHub"
        },
        subtitle: "Explora mis \xFAltimos proyectos y contribuciones en GitHub",
        title: "Mis Proyectos de GitHub"
      }
    };
    var pt_default = {
      certificates: {
        card: {
          view: "Ver Certificado"
        },
        subtitle: "Certifications processionais e cursos que completei",
        title: "Meus Certificados"
      },
      contact: {
        info: {
          detail: "Detalhes do neg\xF3cio",
          info: "Informa\xE7\xF5es de contacto",
          name: "Nome do neg\xF3cio",
          subtitle: "Detalhes oficiais do neg\xF3cio",
          title: "Informa\xE7\xF5es do neg\xF3cio"
        },
        form: {
          message: "Mensagem",
          message_placeholder: "Sua mensagem",
          name: "Nome",
          name_placeholder: "Seu nome",
          send: "Enviar mensagem",
          subject: "Assunto",
          subject_placeholder: "Do que se trata?",
          subtitle: "Preencha o formul\xE1rio abaixo para entrar em contacto",
          title: "Enviar uma Mensagem"
        },
        subtitle: "Contacte para consultas comerciais ou colabora\xE7\xE3o em projetos",
        title: "Entre em contacto comigo"
      },
      home: {
        layout: {
          "# Nav Reflects navigation bar order": "",
          nav: {
            home: "In\xEDcio",
            projects: "Projetos",
            certificates: "Certificados",
            contact: "Contato"
          }
        },
        metadata: {
          description: "Meu site de portf\xF3lio, exibindo projetos, certificados e informa\xE7\xF5es comerciais.",
          generator: "v0.dev",
          title_bkp: "Test",
          title: "Anderson Costa da Silva - Portf\xF3lio - AsonCS TS"
        },
        rights: "Todos os direitos reservados",
        subtitle: "Desenvolvedor de Software & Entusiasta de Tecnologia",
        view_certificates: "Ver Certificados",
        view_projects: "Ver Projetos"
      },
      projects: {
        card: {
          code: "C\xF3digo",
          no_description: "Nenhuma descri\xE7\xE3o dispon\xEDvel"
        },
        empty: {
          check_later: "Volte mais tarde ou visite meu perfil do GitHub diretamente",
          not_found: "Nenhum reposit\xF3rio encontrado",
          visit_github: "Visitar perfil do GitHub"
        },
        subtitle: "Explore meus projetos e contribui\xE7\xF5es mais recentes no GitHub",
        title: "Meus projetos no GitHub"
      }
    };
    function defaultI18nProvider() {
      return {
        get(lang) {
          return resources_exports[
            lang ?? "en"
            /* DEFAULT */
          ] ?? resources_exports[
            "en"
            /* DEFAULT */
          ];
        }
      };
    }
    function getStringsUsecase(i18nProvider) {
      return {
        async execute(lang) {
          const response = i18nProvider.get(lang);
          const projectsCard = { ...notTranslatable.projects.card, ...response.projects.card };
          const projects = {
            ...notTranslatable.projects,
            ...response.projects,
            card: projectsCard
          };
          return { ...notTranslatable, ...response, projects };
        }
      };
    }
  }
});

// src/index.ts
var index_exports = {};
__export(index_exports, {
  app: () => app,
  firebaseRemoteConfigProvider: () => firebaseRemoteConfigProvider,
  firebaseResourcesCertificatesRepository: () => firebaseResourcesCertificatesRepository
});
module.exports = __toCommonJS(index_exports);

// src/model/app.ts
var import_firebase_admin = require("firebase-admin");
var import_app = require("firebase-admin/app");
var import_remote_config = require("firebase-admin/remote-config");

// src/model/remote_config.ts
var import_i18n = __toESM(require_dist());
var import_shared = require("@ason_cs_ts/shared");

// src/model/remote_config/about_me.ts
var defaultValue = {
  text: "",
  title: ""
};
var ABOUT_ME_DEFAULT_VALUE = JSON.stringify(defaultValue);
var ABOUT_ME_KEY = "about_me";

// src/model/remote_config/resources_certificates.ts
var RESOURCES_CERTIFICATES_DEFAULT_VALUE = "";
var RESOURCES_CERTIFICATES_KEY = "resources_certificates";

// src/model/remote_config.ts
var DefaultRemoteConfig = class {
  firebaseServerTemplate;
  serverConfig = {
    get() {
      return {};
    },
    getString() {
      return "";
    }
  };
  constructor(firebaseRemoteConfig) {
    this.firebaseServerTemplate = firebaseRemoteConfig.initServerTemplate({
      [ABOUT_ME_KEY]: ABOUT_ME_DEFAULT_VALUE,
      [RESOURCES_CERTIFICATES_KEY]: RESOURCES_CERTIFICATES_DEFAULT_VALUE
    });
  }
  evaluate(lang) {
    const firebaseServerConfig = this.firebaseServerTemplate.evaluate({
      lang
    });
    this.serverConfig = {
      get(key) {
        return JSON.parse(
          firebaseServerConfig.getString(key)
        );
      },
      getString(key) {
        return firebaseServerConfig.getString(key);
      }
    };
  }
  getAboutMe(lang) {
    this.evaluate(lang);
    return this.serverConfig.get(ABOUT_ME_KEY);
  }
  getResourcesCertificates() {
    return this.serverConfig.getString(
      RESOURCES_CERTIFICATES_KEY
    );
  }
  async loadServerTemplate() {
    (0, import_shared.getLogger)().info("Load Remote Config");
    await this.firebaseServerTemplate.load();
    this.evaluate(import_i18n.Lang.DEFAULT);
  }
};

// src/model/app.ts
var import_shared2 = require("@ason_cs_ts/shared");
var App = class {
  firebaseApp;
  remoteConfig;
  constructor() {
    this.firebaseApp = this.buildFirebaseApp();
    this.remoteConfig = this.buildRemoteConfig(
      this.firebaseApp
    );
  }
  async getRemoteConfig() {
    await this.remoteConfig.loadServerTemplate();
    return this.remoteConfig;
  }
  buildFirebaseApp() {
    try {
      return (0, import_app.getApp)();
    } catch (error) {
      if (this.isErrorFirebaseDoesNotExist(error)) {
        try {
          return (0, import_app.initializeApp)(
            this.buildCredential()
          );
        } catch (error2) {
          (0, import_shared2.getLogger)().error(
            "initializeApp",
            error2
          );
          throw error2;
        }
      } else {
        (0, import_shared2.getLogger)().error("getApp()", error);
        throw error;
      }
    }
  }
  buildCredential() {
    const googleAppCredentials = process.env.GOOGLE_APPLICATION_CREDENTIALS;
    if (!googleAppCredentials) {
      throw Error(
        "Env GOOGLE_APPLICATION_CREDENTIALS needed"
      );
    }
    return {
      credential: import_firebase_admin.credential.cert(
        JSON.parse(googleAppCredentials)
      )
    };
  }
  buildRemoteConfig(firebaseApp) {
    try {
      const firebaseRemoteConfig = (0, import_remote_config.getRemoteConfig)(firebaseApp);
      return new DefaultRemoteConfig(
        firebaseRemoteConfig
      );
    } catch (error) {
      (0, import_shared2.getLogger)().error(
        "Initialize server-side Remote Config",
        error
      );
      throw error;
    }
  }
  isErrorFirebaseDoesNotExist(error) {
    return error.message?.includes(
      "Firebase app does not exist"
    );
  }
};

// src/model/index.ts
var app = new App();

// src/provider/remote_config.provider.ts
async function firebaseRemoteConfigProvider(getRemoteConfig2 = () => app.getRemoteConfig()) {
  const remoteConfig = await getRemoteConfig2();
  return {
    getAboutMe(lang) {
      return remoteConfig.getAboutMe(lang);
    },
    getResourcesCertificates() {
      return remoteConfig.getResourcesCertificates();
    }
  };
}

// src/provider/resources_certificates.repository.ts
var import_shared_remote_config = require("@ason_cs_ts/shared-remote_config");
async function firebaseResourcesCertificatesRepository(fetch, getRemoteConfig2 = () => app.getRemoteConfig()) {
  const remoteConfig = await getRemoteConfig2();
  return {
    getCertificates() {
      getRemoteConfig2();
      return fetch.fetchWithCache(
        remoteConfig.getResourcesCertificates(),
        import_shared_remote_config.defaultCertificates
      );
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  app,
  firebaseRemoteConfigProvider,
  firebaseResourcesCertificatesRepository
});
