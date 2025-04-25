export const notTranslatable = {
	docker_hub: 'https://hub.docker.com/repositories/asoncs',
	email: 'asoncsts@gmail.com',
	email2: 'acsgsa92@gmail.com',
	github: 'https://github.com/AsonCS',
	name: 'Anderson Costa da Silva',
	phone: '+55 (11) 98220-2014',
	phone2: '+55 (11) 91045-3711',
	place: 'https://maps.app.goo.gl/yd8YaCoTKneBD8Bp9',
	username: 'AsonCS',
}

export type Translatable = {
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
	projects: {
		card: {
			code: string
		}
	}
}

export type Strings = Translatable & typeof notTranslatable
