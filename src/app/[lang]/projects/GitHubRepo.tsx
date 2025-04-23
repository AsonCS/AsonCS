import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { useStrings } from '@/hooks/use-strings'
import { ExternalLink, Github, Star } from 'lucide-react'
import Link from 'next/link'

interface Repo {
	id: number
	name: string
	description: string
	html_url: string
	homepage: string
	stargazers_count: number
	language: string
}

export default async function GitHubRepos() {
	const strings = await useStrings()

	const repos: Repo[] = await fetch(
		`https://api.github.com/users/${strings.username}/repos?sort=updated&per_page=100`
	)
		.then((res) => res.json())
		.catch((error) => {
			console.error(error)
			throw new Error('Failed to fetch GitHub repositories')
		})

	return repos.length > 0 ? (
		// Actual repos
		repos.map((repo) => (
			<Card key={repo.id} className="overflow-hidden">
				<CardHeader className="pb-2">
					<CardTitle>{repo.name}</CardTitle>
					{repo.language && (
						<CardDescription>
							<span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-100">
								{repo.language}
							</span>
						</CardDescription>
					)}
				</CardHeader>
				<CardContent>
					<p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
						{repo.description || 'No description available'}
					</p>
				</CardContent>
				<CardFooter className="flex justify-between">
					<div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
						<Star className="mr-1 h-4 w-4" />
						<span>{repo.stargazers_count}</span>
					</div>
					<div className="flex gap-2">
						<Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
							<Button size="sm" variant="outline">
								<Github className="mr-2 h-4 w-4" />
								Code
							</Button>
						</Link>
						{repo.homepage && (
							<Link href={repo.homepage} target="_blank" rel="noopener noreferrer">
								<Button size="sm">
									<ExternalLink className="mr-2 h-4 w-4" />
									Demo
								</Button>
							</Link>
						)}
					</div>
				</CardFooter>
			</Card>
		))
	) : (
		<div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
			<p className="text-lg text-gray-500 dark:text-gray-400">No repositories found</p>
			<p className="text-sm text-gray-400 dark:text-gray-500">
				Check back later or visit my GitHub profile directly
			</p>
			<Link
				href="https://github.com/andersoncosta-dev"
				target="_blank"
				rel="noopener noreferrer"
				className="mt-4"
			>
				<Button>
					<Github className="mr-2 h-4 w-4" />
					Visit GitHub Profile
				</Button>
			</Link>
		</div>
	)
}
