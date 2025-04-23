import { App, applicationDefault, getApp, initializeApp } from 'firebase-admin/app'
import {
	getRemoteConfig,
	RemoteConfig,
	ServerConfig,
	ServerTemplate,
} from 'firebase-admin/remote-config'
import { Langs } from '../strings'

export type DefaultConfig = {
	[KEY_ABOUT_ME]: string
}

let config: { [key: string]: ServerConfig } = {}
let firebaseApp: App | null = null
let remoteConfig: RemoteConfig | null = null
let template: ServerTemplate | null = null

const KEY_ABOUT_ME = 'about_me'
const defaultConfig: DefaultConfig = {
	[KEY_ABOUT_ME]: 'Sou um criador de software.',
}

try {
	firebaseApp = getApp()
} catch (e: any) {
	if (e.message.includes('Firebase app does not exist')) {
		try {
			if (!firebaseApp) {
				// Initialize Firebase
				firebaseApp = initializeApp({
					credential: applicationDefault(),
				})
			}
		} catch (e) {
			console.error(e)
		}
	} else {
		console.error(e)
	}
}

try {
	if (!remoteConfig && firebaseApp) {
		// Initialize server-side Remote Config
		remoteConfig = getRemoteConfig(firebaseApp)
		template = remoteConfig.initServerTemplate({ defaultConfig })
	}
} catch (e) {
	console.error(e)
}

export async function remoteConfigAll(lang: Langs): Promise<DefaultConfig> {
	if (!template) {
		console.log('!template')
		return defaultConfig
	}

	if (config[lang]) {
		console.log('config[lang]')
		return {
			about_me: config[lang].getString(KEY_ABOUT_ME),
		}
	}

	console.log('Load Remote Config')
	await template.load()

	// Add template parameters to config
	config[lang] = template.evaluate({
		lang: lang,
	})

	return {
		about_me: config[lang].getString(KEY_ABOUT_ME),
	}
}
