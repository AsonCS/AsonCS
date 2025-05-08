import { Certificate } from '..'

export interface ResourcesCertificatesRepository {
	getCertificates(): Promise<Certificate[]>
}
