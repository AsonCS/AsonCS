import { getLangEn, getLangPt } from '@/actions/get-lang.action'

export enum Langs {
	EN = 'en',
	PT = 'pt',
}

export type Strings = {
	docker_hub: string
	email: string
	email2: string
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
	phone2: string
	place: string
	username: string
}

export async function useStrings(lang: Langs | undefined = undefined): Promise<Strings> {
	'use server'

	const strings = {
		docker_hub: 'https://hub.docker.com/repositories/asoncs',
		email: 'asoncsts@gmail.com',
		email2: 'acsgsa92@gmail.com',
		github: 'https://github.com/AsonCS',
		name: 'Anderson Costa da Silva',
		username: 'AsonCS',
		phone: '+55 (11) 98220-2014',
		phone2: '+55 (11) 91045-3711',
		place: 'https://maps.app.goo.gl/yd8YaCoTKneBD8Bp9',
	}

	if (lang === Langs.EN) {
		return { ...(await getLangEn()), ...strings }
	}

	return { ...(await getLangPt()), ...strings }
}
