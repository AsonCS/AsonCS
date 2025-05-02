import { Suspense } from 'react'

import { useLang } from '@/hooks/use-lang'
import { useStrings } from '@/hooks/use-strings'

import Certificates, {
	CertificatesSkeleton,
} from './certificates'

export const revalidate = 3600 // In seconds

type Props = {
	params: Promise<{ lang: string }>
}

export default async function CertificatesPage({
	params,
}: Props) {
	const lang = await useLang(params)
	const strings = await useStrings(lang)
	const certificatesStrings = strings.certificates

	return (
		<div className="container px-4 py-12 md:px-6 md:py-24">
			<div className="flex flex-col items-center justify-center space-y-4 text-center">
				<div className="space-y-2">
					<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						{certificatesStrings.title}
					</h1>
					<p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
						{certificatesStrings.subtitle}
					</p>
				</div>
			</div>

			<div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
				<Suspense
					fallback={<CertificatesSkeleton />}
				>
					<Certificates
						cardView={
							certificatesStrings.card.view
						}
						lang={lang}
					/>
				</Suspense>
			</div>
		</div>
	)
}
