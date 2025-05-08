import { executeQuery } from '@datocms/cda-client'

import {
	Certificate,
	defaultCertificates,
	ResourcesCertificatesRepository,
} from '@ason_cs_ts/shared-remote_config'
import { getLogger } from '@ason_cs_ts/shared'

type DatoCmsCertificate = {
	date: string
	description: string
	image: {
		url: string
	}
	issuer: string
	issuerLink: string
	pdf: {
		url: string
	}
	title: string
	url: string
}

export default function datoCmsResourcesCertificatesRepository(): ResourcesCertificatesRepository {
	return {
		async getCertificates(): Promise<Certificate[]> {
			const allCertificates: DatoCmsCertificate[] =
				await executeQuery(
					`{
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
                }`,
					{
						token: process.env
							.DATOCMS_READONLY_TOKEN!,
					}
				)
					.then(
						(data: any) => data.allCertificates
					)
					.catch((error) => {
						getLogger().error(
							'datoCmsResourcesCertificatesRepository',
							error
						)
						return []
					})

			if (allCertificates.length > 0)
				return allCertificates.map(
					(certificate) => {
						const date = new Date(
							certificate.date
						)
						const cert = {
							dateDay: date.getDate() + 1,
							dateMonth: date.getMonth() + 1,
							dateYear: date.getFullYear(),
							description:
								certificate.description,
							image: certificate.image.url,
							issuer: certificate.issuer,
							issuerLink:
								certificate.issuerLink,
							pdf: certificate.pdf.url,
							title: certificate.title,
							url: certificate.url,
						}
						console.log(certificate.date, cert)
						return cert
					}
				)
			else return defaultCertificates
		},
	}
}
