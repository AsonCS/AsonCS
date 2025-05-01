import { Lang } from '@ason_cs_ts/i18n'

import { AboutMe } from './about_me'

export interface RemoteConfig {
	getAboutMe(lang: Lang): AboutMe
	getResourcesCertificates(): string
}
