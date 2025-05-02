import { defaultRemoteConfigProvider } from '@ason_cs_ts/firebase'
import { Lang } from '@ason_cs_ts/i18n'

export async function getAboutMeAction(lang: Lang) {
	const remoteConfigProvider =
		await defaultRemoteConfigProvider()

	return remoteConfigProvider.getAboutMe(lang)
}
