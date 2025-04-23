import { Langs } from '@/lib/strings'

export function useNavigateTo(lang: Langs = Langs.PT, destine: string = '') {
	if (destine) {
		destine = `/${destine}`
	}
	return `/${lang}${destine}`
}
