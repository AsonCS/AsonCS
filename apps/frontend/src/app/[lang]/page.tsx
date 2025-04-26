import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useLang } from '@/hooks/use-lang'
import { useNavigateTo } from '@/hooks/use-navigateTo'
import { useStrings } from '@/hooks/use-strings'
import { remoteConfigAll } from '@/lib/firebase'
import {
	ContactLinkDocker,
	ContactLinkEmail,
	ContactLinkGithub,
	ContactLinkPhone,
	ContactLinkPlace,
} from '@/components/ui/link'

type Props = {
	params: Promise<{ lang: string }>
}

export default async function Home({ params }: Props) {
	const lang = await useLang(params)
	const strings = await useStrings(lang)

	const remote = await remoteConfigAll(lang)

	return (
		<div className="flex flex-col grow">
			<main className="flex-1">
				<section
					className="w-full py-12 bg-gradient-to-b from-gray-50 to-white
							dark:from-gray-900 dark:to-gray-800"
				>
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
							<div className="flex flex-col justify-center space-y-4">
								<div>
									<Image
										alt="Profile picture"
										className="rounded-full"
										height={160}
										src={'/icon.png'}
										width={160}
									/>
								</div>
								<div className="space-y-2">
									<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
										{strings.name}
									</h1>
									<p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
										{
											strings.home
												.subtitle
										}
									</p>
								</div>
								<div className="flex flex-col gap-2 min-[400px]:flex-row">
									<Link
										href={useNavigateTo(
											lang,
											'projects'
										)}
									>
										<Button className="w-full min-[400px]:w-auto">
											{
												strings.home
													.view_projects
											}
										</Button>
									</Link>
									<Link
										href={useNavigateTo(
											lang,
											'certificates'
										)}
									>
										<Button
											className="w-full min-[400px]:w-auto"
											variant="outline"
										>
											{
												strings.home
													.view_certificates
											}
										</Button>
									</Link>
								</div>
								<div className="flex items-center gap-4 text-sm">
									<ContactLinkGithub
										github={
											strings.github
										}
									/>
									<ContactLinkDocker
										docker={
											strings.docker_hub
										}
									/>
								</div>
							</div>
							<div className="flex items-center justify-center">
								<Card className="w-full max-w-sm">
									<CardContent className="p-6">
										<div className="space-y-4">
											<div className="space-y-2">
												<h2 className="text-xl font-bold">
													{
														strings
															.contact
															.info
															.title
													}
												</h2>
												<div className="text-sm text-gray-500 dark:text-gray-400">
													<div className="flex items-center gap-2">
														<span className="font-medium pr-12">
															CNPJ:
														</span>
														<span>
															36.217.301/0001-19
														</span>
													</div>
													<div className="flex items-center gap-2">
														<span className="font-medium">
															{
																strings
																	.contact
																	.info
																	.name
															}
															:
														</span>
														<span>
															36.217.301
															ANDERSON
															COSTA
															DA
															SILVA
														</span>
													</div>
												</div>
											</div>
											<div className="space-y-2">
												<h3 className="text-lg font-medium">
													{
														strings
															.contact
															.info
															.info
													}
												</h3>
												<div className="grid gap-2 text-sm">
													<ContactLinkPhone
														phones={[
															strings.phone,
															strings.phone2,
														]}
													/>
													<ContactLinkEmail
														emails={[
															strings.email,
															strings.email2,
														]}
													/>
													<ContactLinkPlace
														place={
															strings.place
														}
													/>
													<ContactLinkGithub
														github={
															strings.github
														}
														text={`github.com/${strings.username}`}
													/>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									{strings.home.about_me}
								</h2>
								<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
									{remote.about_me}
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="w-full border-t bg-gray-100 py-6 dark:bg-gray-900">
				<div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6">
					<p className="text-sm text-gray-500 dark:text-gray-400">
						© {new Date().getFullYear()}{' '}
						Anderson Costa da Silva.{' '}
						{strings.home.rights}.
					</p>
					<div className="flex items-center gap-4">
						<ContactLinkGithub
							className="sr-only"
							github={strings.github}
						/>
						<ContactLinkEmail
							className="sr-only"
							emails={[
								strings.email,
								strings.email2,
							]}
						/>
					</div>
				</div>
			</footer>
		</div>
	)
}
