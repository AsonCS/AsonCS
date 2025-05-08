import {
	Certificate,
	defaultCertificates,
	ResourcesCertificatesRepository,
} from '@ason_cs_ts/shared-remote_config'

import allCertificates from '../api/certificate'

export default function datoCmsResourcesCertificatesRepository(): ResourcesCertificatesRepository {
	return {
		async getCertificates(): Promise<Certificate[]> {
			const certificate: Certificate[] =
				await allCertificates().then((data) =>
					data.allCertificates.map(
						(certificate) => {
							const date = new Date(
								certificate.date
							)
							return {
								dateDay: date.getDate() + 1,
								dateMonth:
									date.getMonth() + 1,
								dateYear:
									date.getFullYear(),
								description:
									certificate.description,
								image: certificate.image
									.url,
								issuer: certificate.issuer,
								issuerLink:
									certificate.issuerLink,
								pdf: certificate.pdf.url,
								title: certificate.title,
								url: certificate.url,
							}
						}
					)
				)
			if (certificate.length > 0) return certificate
			else return defaultCertificates
		},
	}
}
