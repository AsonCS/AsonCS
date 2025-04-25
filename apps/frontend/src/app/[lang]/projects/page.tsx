import { Suspense } from 'react'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { useLang } from '@/hooks/use-lang'
import { useStrings } from '@/hooks/use-strings'

import GitHubRepos from './github-repo'

export const revalidate = 3600

type Props = {
	params: Promise<{ lang: string }>
}

export default async function ProjectsPage({ params }: Props) {
	const lang = await useLang(params)
	const strings = await useStrings(lang)
	const projects = strings.projects

	return (
		<div className="container px-4 py-12 md:px-6 md:py-24">
			<div className="flex flex-col items-center justify-center space-y-4 text-center">
				<div className="space-y-2">
					<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						{projects.title}
					</h1>
					<p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
						{projects.subtitle}
					</p>
				</div>
			</div>

			<div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
				<Suspense
					fallback={
						// Loading skeletons
						Array(6)
							.fill(0)
							.map((_, index) => (
								<Card key={index} className="overflow-hidden">
									<CardHeader className="pb-2">
										<Skeleton className="h-6 w-3/4" />
										<Skeleton className="h-4 w-full" />
									</CardHeader>
									<CardContent>
										<Skeleton className="h-20 w-full" />
									</CardContent>
									<CardFooter className="flex justify-between">
										<Skeleton className="h-9 w-20" />
										<Skeleton className="h-9 w-20" />
									</CardFooter>
								</Card>
							))
					}
				>
					<GitHubRepos lang={lang} />
				</Suspense>
			</div>
		</div>
	)
}
