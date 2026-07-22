import { Lang } from '@ason_cs_ts/i18n'

export function useNavigateTo(lang: Lang = Lang.DEFAULT, destine: string = '') {
	if (destine) {
		destine = `/${destine}`
	}
	return `/${lang}${destine}`
}
