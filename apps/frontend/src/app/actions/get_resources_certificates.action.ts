'use server'

//import { firebaseResourcesCertificatesRepository } from '@ason_cs_ts/firebase'
import { datoCmsResourcesCertificatesRepository } from '@ason_cs_ts/dato_cms'

//import { fetchDefaultServer } from '@/lib/fetch_default.server'

export async function getResourcesCertificatesAction() {
	//const fetch = await fetchDefaultServer()
	//const repository = await firebaseResourcesCertificatesRepository(fetch)
	const repository =
		datoCmsResourcesCertificatesRepository()

	return repository.getCertificates()
}
