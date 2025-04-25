export const notTranslatable = {
	docker_hub: 'https://hub.docker.com/repositories/asoncs',
	email: 'asoncsts@gmail.com',
	email2: 'acsgsa92@gmail.com',
	github: 'https://github.com/AsonCS',
	name: 'Anderson Costa da Silva',
	phone: '+55 (11) 98220-2014',
	phone2: '+55 (11) 91045-3711',
	projects: {
		card: {
			demo: 'Demo',
		},
	},
	place: 'https://maps.app.goo.gl/yd8YaCoTKneBD8Bp9',
	username: 'AsonCS',
}

export type Translatable = {
	home: {
		layout: {
			nav: {
				// Reflects navigation bar order
				home: string
				projects: string
				certificates: string
				contact: string
			}
		}
		metadata: {
			description: string
			generator: string
			title: string
		}
	}
	projects: {
		card: {
			code: string
			no_description: string
		}
		empty: {
			check_later: string
			not_found: string
			visit_github: string
		}
		subtitle: string
		title: string
	}
}

export type Strings = Translatable & typeof notTranslatable
