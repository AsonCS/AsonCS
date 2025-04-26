import * as resources from '../resources'

import { Lang, Translatable } from '../model'

export interface I18nProvider {
	get(lang: Lang | undefined): Translatable
}

export default function i18nProvider(): I18nProvider {
	return {
		get(lang) {
			return (resources[lang ?? Lang.PT] ?? resources[Lang.PT]) as any
		},
	}
}
