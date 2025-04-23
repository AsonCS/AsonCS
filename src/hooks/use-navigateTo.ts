import { PT } from '@/lib/strings'

export function useNavigateTo(lang: string = PT, destine: string = '') {
	if (destine) {
		destine = `/${destine}`
	}
	return `/${lang}${destine}`
}
