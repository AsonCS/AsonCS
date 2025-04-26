import { ExternalLink, Github, Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { Lang } from '@ason_cs_ts/i18n'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { ContactLinkGithubButton } from '@/components/ui/link'
import { Skeleton } from '@/components/ui/skeleton'
import { RepoLanguage } from '@/components/ui/span'
import { useStrings } from '@/hooks/use-strings'

import { getGithubRepoAction } from './get-github-repo.action'

type Props = {
	lang: Lang
}

export default async function GitHubRepos({ lang }: Props) {
	const strings = await useStrings(lang)
	const projects = strings.projects
	const repos = await getGithubRepoAction(
		strings.username
	)

	return repos.length > 0 ? (
		repos.map((repo) => (
			<Card
				key={repo.id}
				className="overflow-hidden flex flex-col"
			>
				<CardHeader className="pb-2">
					<CardTitle>{repo.name}</CardTitle>
					<CardDescription>
						{repo.technologies.length > 0
							? repo.technologies.map(
									(technology, idx) => (
										<RepoLanguage
											key={idx}
										>
											{technology}
										</RepoLanguage>
									)
								)
							: null}
					</CardDescription>
				</CardHeader>
				<CardContent className="grow">
					<p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-6">
						{repo.description ||
							projects.card.no_description}
					</p>
				</CardContent>
				<CardFooter className="flex justify-between">
					<div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
						<Star className="mr-1 h-4 w-4" />
						<span>{repo.stargazers_count}</span>
					</div>
					<div className="flex gap-2">
						<Link
							href={repo.html_url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								size="sm"
								variant="outline"
							>
								<Github className="mr-2 h-4 w-4" />
								{projects.card.code}
							</Button>
						</Link>
						{repo.homepage && (
							<Link
								href={repo.homepage}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button size="sm">
									<ExternalLink className="mr-2 h-4 w-4" />
									{projects.card.demo}
								</Button>
							</Link>
						)}
					</div>
				</CardFooter>
			</Card>
		))
	) : (
		<div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
			<p className="text-lg text-gray-500 dark:text-gray-400">
				{projects.empty.not_found}
			</p>
			<p className="mb-4 text-sm text-gray-400 dark:text-gray-500">
				{projects.empty.check_later}
			</p>
			<ContactLinkGithubButton
				github={strings.github}
				text={projects.empty.visit_github}
			/>
		</div>
	)
}

export async function GitHubReposSkeleton({
	amount = 6,
}: {
	amount?: number
}) {
	return Array(amount)
		.fill(0)
		.map((_, index) => (
			<Card key={index} className="overflow-hidden">
				<CardHeader className="pb-2">
					<Skeleton className="h-6 w-full" />
					<Skeleton className="h-4 w-1/4" />
				</CardHeader>
				<CardContent>
					<Skeleton className="h-20 w-full" />
				</CardContent>
				<CardFooter className="flex justify-between">
					<Skeleton className="h-9 w-10" />
					<div className="grow justify-items-end mr-2">
						<Skeleton className="h-9 w-24" />
					</div>
					<Skeleton className="h-9 w-24" />
				</CardFooter>
			</Card>
		))
}
