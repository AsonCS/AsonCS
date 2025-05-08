import execute from '.'

export default function allCertificates(): Promise<{
	allCertificates: {
		date: string
		description: string
		image: {
			url: string
		}
		issuer: string
		issuerLink: string
		pdf: {
			url: string
		}
		title: string
		url: string
	}[]
}> {
	return execute(
		/* GraphQL */ `
			{
				allCertificates {
					date
					description
					image {
						url
					}
					issuer
					issuerLink
					pdf {
						url
					}
					title
					url
				}
			}
		`,
		{
			allCertificates: [],
		}
	)
}
