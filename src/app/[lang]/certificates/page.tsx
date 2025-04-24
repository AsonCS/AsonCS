import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ExternalLink } from 'lucide-react'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { RESOURCES_CERTIFICATES } from '@/lib/firebase/storage'
import { fetchWithCache } from '@/lib/utils'

import certificatesJson from '../../../../public/resources/certificates/certificates.json'

type Certificate = {
	title: string
	issuer: string
	issuer_link: string
	date: string
	description: string
	image: string
	pdf: string
	url: string
}

type Props = {
	params: Promise<{ lang: string }>
}

export const revalidate = 3600

export default async function CertificatesPage() {
	const certificates = await fetchWithCache<Certificate[]>(
		RESOURCES_CERTIFICATES,
		certificatesJson
	)

	// Format date to a more readable format
	const formatDate = (dateString: string) => {
		const options: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		}
		return new Date(dateString).toLocaleDateString('en-US', options)
	}

	return (
		<div className="container px-4 py-12 md:px-6 md:py-24">
			<div className="flex flex-col items-center justify-center space-y-4 text-center">
				<div className="space-y-2">
					<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						My Certificates
					</h1>
					<p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
						Professional certifications and courses I've completed
					</p>
				</div>
			</div>

			<div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
				{certificates.map((certificate, idx) => (
					<Card key={idx} className="overflow-hidden flex flex-col">
						<div className="aspect-video relative w-full overflow-hidden">
							<Image
								src={
									certificate.image
										? `/resources/certificates/${certificate.image}`
										: '/placeholder.svg'
								}
								alt={certificate.title}
								fill
								className="object-cover+ transition-all hover:scale-110"
							/>
						</div>
						<CardHeader className="pb-2">
							<CardTitle>{certificate.title}</CardTitle>
							<Link
								href={certificate.issuer_link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
									<ExternalLink className="mr-1 h-4 w-4" />
									<span>{certificate.issuer}</span>
								</div>
							</Link>
						</CardHeader>
						<CardContent className="grow">
							<p className="text-sm text-gray-500 dark:text-gray-400">
								{certificate.description}
							</p>
						</CardContent>
						<CardFooter className="flex-col items-start gap-3">
							<div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
								<Calendar className="mr-1 h-4 w-4" />
								<span>{formatDate(certificate.date)}</span>
							</div>
							<Link href={certificate.url} target="_blank" rel="noopener noreferrer">
								<div className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
									<ExternalLink className="mr-1 h-4 w-4" />
									<span>View Certificate</span>
								</div>
							</Link>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	)
}
