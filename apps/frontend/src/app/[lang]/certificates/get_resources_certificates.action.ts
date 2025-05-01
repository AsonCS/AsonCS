import certificatesJson from '../../../../public/resources/certificates/certificates.json'

import { defaultRemoteConfigProvider } from '@ason_cs_ts/firebase'
import { defaultResourcesCertificatesRepository } from '@ason_cs_ts/shared-remote_config'

import { fetchDefault } from '@/lib/utils'

export async function getResourcesCertificatesAction() {
	const fetch = fetchDefault()
	const provider = await defaultRemoteConfigProvider()
	const repository =
		defaultResourcesCertificatesRepository(
			fetch,
			provider
		)

	return repository.getCertificates(certificatesJson)
}
