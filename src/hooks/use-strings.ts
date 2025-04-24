import { getLangEn, getLangPt } from '@/actions/getLang.action'
import { en, pt, Langs, Strings } from '@/lib/strings'

export async function useStrings(lang: Langs | undefined = undefined): Promise<Strings> {
	'use server'

	const strings = {
		docker_hub: 'https://hub.docker.com/repositories/asoncs',
		email: 'asoncsts@gmail.com',
		github: 'https://github.com/AsonCS',
		name: 'Anderson Costa da Silva',
		username: 'AsonCS',
		phone: '+55 (11) 98220-2014',
		place: 'https://maps.app.goo.gl/yd8YaCoTKneBD8Bp9',
	}

	if (lang === Langs.EN) {
		return { ...en, /*...(await getLangEn()), */ ...strings }
	}

	return { ...pt, /*...(await getLangPt()), */ ...strings }
}
