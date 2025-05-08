import { firebaseRemoteConfigProvider } from '@ason_cs_ts/firebase'
import { Lang } from '@ason_cs_ts/i18n'

export async function getAboutMeAction(lang: Lang) {
	const remoteConfigProvider =
		await firebaseRemoteConfigProvider()

	return remoteConfigProvider.getAboutMe(lang)
}
