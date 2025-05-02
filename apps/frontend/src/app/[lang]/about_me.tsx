import { getAboutMeAction } from '@/app/actions/get_about_me.action'
import { Skeleton } from '@/components/ui/skeleton'
import { Lang } from '@ason_cs_ts/i18n'

type Props = {
	lang: Lang
}

export default async function AboutMe({ lang }: Props) {
	const aboutMe = await getAboutMeAction(lang)

	return (
		<div className="space-y-2">
			<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
				{aboutMe.title}
			</h2>
			<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
				{aboutMe.text}
			</p>
		</div>
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
