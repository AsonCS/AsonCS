import en from './en.json'
import pt from './pt.json'

export enum Langs {
	EN = 'en',
	PT = 'pt',
}

export type Strings = {
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
	},
	phone: string,
	username: string
}

export { en, pt }
