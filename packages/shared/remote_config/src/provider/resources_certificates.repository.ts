import { Fetch } from '@ason_cs_ts/shared'

import { Certificate, RemoteConfigProvider } from '..'

export interface ResourcesCertificatesRepository {
	getCertificates(
		defaultCertificates: Certificate[]
	): Promise<Certificate[]>
}

export default function defaultResourcesCertificatesRepository(
	fetch: Fetch,
	remoteConfigProvider: RemoteConfigProvider
): ResourcesCertificatesRepository {
	return {
		getCertificates(
			defaultCertificates
		): Promise<Certificate[]> {
			return fetch.fetchWithCache(
				remoteConfigProvider.getResourcesCertificates(),
				defaultCertificates
			)
		},
	}
}
