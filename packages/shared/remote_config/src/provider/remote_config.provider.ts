import { Lang } from '@ason_cs_ts/i18n'

import { AboutMe } from '..'

export interface RemoteConfigProvider {
	getAboutMe(lang: Lang): AboutMe
	getResourcesCertificates(): string
}
