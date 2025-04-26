interface Fetch {
    fetchWithCache<R>(url: string, defaultValue: R): Promise<R>;
}

interface Usecase<IN, OUT> {
    execute(input: IN): Promise<OUT>;
}

interface GithubRepository {
    repos(username: string): Promise<{
        description: string | null;
        homepage: string;
        html_url: string;
        id: number;
        name: string;
        stargazers_count: number;
    }[]>;
}
declare function githubRepository(fetch: Fetch): GithubRepository;

interface GithubRepo {
    description: string;
    homepage: string;
    html_url: string;
    id: number;
    name: string;
    technologies: string[];
    stargazers_count: number;
}
interface GetGithubRepoUsecase extends Usecase<string, GithubRepo[]> {
}
declare function getGithubRepoUsecase(githubRepository: GithubRepository): GetGithubRepoUsecase;

declare const RESOURCES = "https://firebasestorage.googleapis.com/v0/b/asoncs-ts.firebasestorage.app/o/resources";

export { type Fetch, type GetGithubRepoUsecase, type GithubRepo, type GithubRepository, RESOURCES, type Usecase, getGithubRepoUsecase, githubRepository };
