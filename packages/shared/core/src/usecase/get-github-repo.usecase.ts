import { Usecase } from '../base'
import { GithubRepository } from '../provider'

export interface GithubRepo {
	description: string
	homepage: string
	html_url: string
	id: number
	name: string
	technologies: string[]
	stargazers_count: number
}

export interface GetGithubRepoUsecase extends Usecase<string, GithubRepo[]> {}

export default function getGithubRepoUsecase(
	githubRepository: GithubRepository
): GetGithubRepoUsecase {
	return {
		async execute(username) {
			return githubRepository.repos(username).then((repos) => {
				const result: GithubRepo[] = []

				repos.forEach((repo) => {
					if (repo.name === username) {
						return
					}

					const descriptionSplit = (repo.description ?? '').split(' | ')
					const description = descriptionSplit[0] ?? ''
					const technologies = (descriptionSplit[1] ?? '')
						.split(', ')
						.filter((desc) => desc.includes('{'))
						.map((desc) => desc.replace('{ ', '').replace(' }', ''))
					result.push({
						description: description,
						homepage: repo.homepage,
						html_url: repo.html_url,
						id: repo.id,
						name: repo.name,
						technologies: technologies,
						stargazers_count: repo.stargazers_count,
					})
				})

				return result
			})
		},
	}
}
