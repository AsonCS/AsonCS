'use server'

import { defaultRemoteConfigProvider } from '@ason_cs_ts/firebase'
import { defaultResourcesCertificatesRepository } from '@ason_cs_ts/shared-remote_config'

import { fetchDefaultServer } from '@/lib/fetch_default.server'

export async function getResourcesCertificatesAction() {
	const fetch = await fetchDefaultServer()
	const provider = await defaultRemoteConfigProvider()
	const repository =
		defaultResourcesCertificatesRepository(
			fetch,
			provider
		)

	return repository.getCertificates()
}
