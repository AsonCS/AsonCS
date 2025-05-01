import { credential } from 'firebase-admin'
import {
	App as FirebaseApp,
	Credential,
	getApp,
	initializeApp,
} from 'firebase-admin/app'
import { getRemoteConfig } from 'firebase-admin/remote-config'

import { RemoteConfig } from '@ason_cs_ts/shared-remote_config'

import { DefaultRemoteConfig } from './remote_config'

export default class App {
	private readonly firebaseApp: FirebaseApp
	private readonly remoteConfig: DefaultRemoteConfig

	constructor() {
		this.firebaseApp = this.buildFirebaseApp()
		this.remoteConfig = this.buildRemoteConfig(
			this.firebaseApp
		)
	}

	async getRemoteConfig(): Promise<RemoteConfig> {
		await this.remoteConfig.loadServerTemplate()
		return this.remoteConfig
	}

	private buildFirebaseApp(): FirebaseApp {
		try {
			return getApp()
		} catch (error: any) {
			if (this.isErrorFirebaseDoesNotExist(error)) {
				try {
					return initializeApp(
						this.buildCredential()
					)
				} catch (error) {
					console.error('initializeApp', error)
					throw error
				}
			} else {
				console.error('getApp()', error)
				throw error
			}
		}
	}

	private buildCredential(): { credential: Credential } {
		const googleAppCredentials =
			process.env.GOOGLE_APPLICATION_CREDENTIALS
		if (!googleAppCredentials) {
			throw Error(
				'Env GOOGLE_APPLICATION_CREDENTIALS needed'
			)
		}

		return {
			credential: credential.cert(
				JSON.parse(googleAppCredentials)
			),
		}
	}

	private buildRemoteConfig(
		firebaseApp: FirebaseApp
	): DefaultRemoteConfig {
		try {
			// Initialize server-side Remote Config
			const firebaseRemoteConfig =
				getRemoteConfig(firebaseApp)
			return new DefaultRemoteConfig(
				firebaseRemoteConfig
			)
		} catch (error) {
			console.error(
				'Initialize server-side Remote Config',
				error
			)
			throw error
		}
	}

	private isErrorFirebaseDoesNotExist(error: any) {
		return error.message?.includes(
			'Firebase app does not exist'
		)
	}
}
