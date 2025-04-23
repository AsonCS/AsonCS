import { getLangEn, getLangPt } from '@/actions/getLang.action'
import { en, pt, Langs, Strings } from '@/lib/strings'

export async function useStrings(lang: Langs | undefined = undefined): Promise<Strings> {
	'use server'

	const strings = {
		email: 'asoncsts@gmail.com',
		github: 'https://github.com/AsonCS',
		name: 'Anderson Costa da Silva',
		username: 'AsonCS',
		phone: '+55 (11) 98220-2014',
	}

	if (lang === Langs.EN) {
		return { ...en, /*...(await getLangEn()), */ ...strings }
	}

	return { ...pt, /*...(await getLangPt()), */ ...strings }
}
