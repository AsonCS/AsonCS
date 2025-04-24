import { Langs } from '@/hooks/use-strings'

export function useNavigateTo(lang: Langs = Langs.PT, destine: string = '') {
	if (destine) {
		destine = `/${destine}`
	}
	return `/${lang}${destine}`
}
