import en from './en.json'
import pt from './pt.json'

export enum Langs {
	EN = 'en',
	PT = 'pt',
}

export type Strings = {
	docker_hub: string
	email: string
	github: string
	name: string
	home: {
		layout: {
			nav: {
				certificates: string
				contact: string
				home: string
				projects: string
			}
		}
		metadata: {
			description: string
			generator: string
			title: string
		}
	}
	phone: string
	place: string
	username: string
}

export { en, pt }
