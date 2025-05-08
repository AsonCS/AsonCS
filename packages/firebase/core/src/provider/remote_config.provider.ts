import {
	RemoteConfig,
	RemoteConfigProvider,
} from '@ason_cs_ts/shared-remote_config'

import { app } from '..'

export default async function firebaseRemoteConfigProvider(
	getRemoteConfig: () => Promise<RemoteConfig> = () =>
		app.getRemoteConfig()
): Promise<RemoteConfigProvider> {
	const remoteConfig = await getRemoteConfig()
	return {
		getAboutMe(lang) {
			return remoteConfig.getAboutMe(lang)
		},
		getResourcesCertificates() {
			return remoteConfig.getResourcesCertificates()
		},
	}
}
