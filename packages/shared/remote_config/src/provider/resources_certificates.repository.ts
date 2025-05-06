import { Fetch } from '@ason_cs_ts/shared'

import defaultCertificates from '../resources/certificates.json'

import { Certificate, RemoteConfigProvider } from '..'

export interface ResourcesCertificatesRepository {
	getCertificates(): Promise<Certificate[]>
}

export default function defaultResourcesCertificatesRepository(
	fetch: Fetch,
	remoteConfigProvider: RemoteConfigProvider
): ResourcesCertificatesRepository {
	return {
		getCertificates(): Promise<Certificate[]> {
			return fetch.fetchWithCache(
				remoteConfigProvider.getResourcesCertificates(),
				defaultCertificates
			)
		},
	}
}
