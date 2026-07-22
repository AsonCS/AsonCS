import { getAboutMeAction } from '@/app/actions/get_about_me.action'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent } from '@/components/ui/card'
import { Lang } from '@ason_cs_ts/i18n'
import { ContactLinkGithub } from '@/components/ui/link'

type Props = {
	lang: Lang
}

export default async function AboutMe({ lang }: Props) {
	const aboutMe = await getAboutMeAction(lang)

	return (
		<>
			<div className="space-y-2">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
					{aboutMe.title}
				</h2>
				<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
					{aboutMe.text}
				</p>
			</div>
			
			<div className="w-full border-t bg-gray-100 py-6 dark:bg-gray-900">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects</h2>
			</div>

			{/* Speedtest project showcase */}
			<div className="w-full max-w-[800px]">
				<Card className="mt-6">
					<CardContent>
						<div className="flex flex-col items-center justify-center p-4 space-y-3">
							<h3 id="speedtest" className="text-xl font-semibold">
								Speedtest — Personal Project
							</h3>
							<ContactLinkGithub
								github="https://github.com/asoncs/speedtest-go"
								text="asoncs/speedtest-go"
							/>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								An embedded instance of Librespeed/speedtest-go app. Interact with
								it directly below.
							</p>
							<div className="mt-3 w-full">
								<div className="w-full overflow-hidden rounded-md border dark:border-gray-700">
									<iframe
										src="https://ason-speedtest-670514734786.europe-west1.run.app/"
										title="Speedtest - personal project"
										className="w-full h-[500px]"
										style={{
											border: 0,
											overflow: 'hidden',
										}}
										allowFullScreen
									/>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</>
	)
}

export function AboutMeSkeleton({
	amount = 1,
}: {
	amount?: number
}) {
	return Array(amount)
		.fill(0)
		.map((_, index) => (
			<div
				key={index}
				className="justify-items-center space-y-2 w-full"
			>
				<Skeleton className="h-10 w-44 sm:h-12 sm:w-60" />
				<Skeleton className="h-20 max-w-[900px] w-11/12 sm:h-24" />
			</div>
		))
}
