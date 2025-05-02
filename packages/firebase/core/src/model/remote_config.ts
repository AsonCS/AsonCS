import {
	RemoteConfig as FirebaseRemoteConfig,
	ServerTemplate,
} from 'firebase-admin/remote-config'

import { Lang } from '@ason_cs_ts/i18n'
import { getLogger } from '@ason_cs_ts/shared'
import {
	AboutMe,
	RemoteConfig,
} from '@ason_cs_ts/shared-remote_config'

import {
	ABOUT_ME_DEFAULT_VALUE,
	ABOUT_ME_KEY,
} from './remote_config/about_me'
import {
	RESOURCES_CERTIFICATES_DEFAULT_VALUE,
	RESOURCES_CERTIFICATES_KEY,
} from './remote_config/resources_certificates'

export interface ServerConfig {
	get<T>(key: string): T
	getString(key: string): string
}

export class DefaultRemoteConfig implements RemoteConfig {
	private readonly firebaseServerTemplate: ServerTemplate
	private serverConfig: ServerConfig = {
		get() {
			return {} as any
		},
		getString() {
			return ''
		},
	}

	constructor(
		firebaseRemoteConfig: FirebaseRemoteConfig
	) {
		this.firebaseServerTemplate =
			firebaseRemoteConfig.initServerTemplate({
				[ABOUT_ME_KEY]: ABOUT_ME_DEFAULT_VALUE,
				[RESOURCES_CERTIFICATES_KEY]:
					RESOURCES_CERTIFICATES_DEFAULT_VALUE,
			})
	}

	evaluate(lang: Lang) {
		const firebaseServerConfig =
			this.firebaseServerTemplate.evaluate({
				lang: lang,
			})

		this.serverConfig = {
			get(key) {
				return JSON.parse(
					firebaseServerConfig.getString(key)
				)
			},
			getString(key) {
				return firebaseServerConfig.getString(key)
			},
		}
	}

	getAboutMe(lang: Lang) {
		this.evaluate(lang)
		return this.serverConfig.get<AboutMe>(ABOUT_ME_KEY)
	}

	getResourcesCertificates() {
		return this.serverConfig.getString(
			RESOURCES_CERTIFICATES_KEY
		)
	}

	async loadServerTemplate() {
		getLogger().info('Load Remote Config')
		await this.firebaseServerTemplate.load()
		this.evaluate(Lang.PT)
	}
}
