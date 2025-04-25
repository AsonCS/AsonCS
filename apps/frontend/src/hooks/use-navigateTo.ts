import { Lang } from '@ason_cs_ts/i18n'

export function useNavigateTo(lang: Lang = Lang.PT, destine: string = '') {
	if (destine) {
		destine = `/${destine}`
	}
	return `/${lang}${destine}`
}
