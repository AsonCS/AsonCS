import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ExternalLink } from 'lucide-react'

import { Lang } from '@ason_cs_ts/i18n'

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

import { getResourcesCertificatesAction } from './get_resources_certificates.action'

type Props = {
	cardView: string
	lang: Lang
}

export default async function Certificates({
	cardView,
	lang,
}: Props) {
	const certificates =
		await getResourcesCertificatesAction()

	// Format date to a more readable format
	const formatDate = (dateString: string) => {
		const options: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		}
		return new Date(dateString).toLocaleDateString(
			lang,
			options
		)
	}

	return certificates.map((certificate, idx) => (
		<Card
			key={idx}
			className="overflow-hidden flex flex-col"
		>
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
					href={certificate.issuerLink}
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
					<span>
						{formatDate(
							`${certificate.dateYear}-${certificate.dateMonth}-${certificate.dateDay}`
						)}
					</span>
				</div>
				<Link
					href={certificate.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
						<ExternalLink className="mr-1 h-4 w-4" />
						<span>{cardView}</span>
					</div>
				</Link>
			</CardFooter>
		</Card>
	))
}

export function CertificatesSkeleton({
	amount = 6,
}: {
	amount?: number
}) {
	return Array(amount)
		.fill(0)
		.map((_, index) => (
			<Card key={index} className="overflow-hidden">
				<Skeleton className="h-44 w-full" />
				<CardHeader className="pb-2">
					<Skeleton className="h-6 w-full" />
					<Skeleton className="h-3 w-1/5" />
				</CardHeader>
				<CardContent>
					<Skeleton className="h-20 w-full" />
				</CardContent>
				<CardFooter className="flex-col items-start gap-3">
					<Skeleton className="h-4 w-1/2" />
					<Skeleton className="h-4 w-1/2" />
				</CardFooter>
			</Card>
		))
}
