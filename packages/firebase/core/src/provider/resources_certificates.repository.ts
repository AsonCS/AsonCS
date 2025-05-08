import { Fetch } from '@ason_cs_ts/shared'
import {
	Certificate,
    defaultCertificates,
	RemoteConfig,
	ResourcesCertificatesRepository,
} from '@ason_cs_ts/shared-remote_config'

import { app } from '..'

export default async function firebaseResourcesCertificatesRepository(
	fetch: Fetch,
	getRemoteConfig: () => Promise<RemoteConfig> = () =>
		app.getRemoteConfig()
): Promise<ResourcesCertificatesRepository> {
    const remoteConfig = await getRemoteConfig()
	return {
		getCertificates(): Promise<Certificate[]> {
            getRemoteConfig()
			return fetch.fetchWithCache(
				remoteConfig.getResourcesCertificates(),
				defaultCertificates
			)
		},
	}
}
