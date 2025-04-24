import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useStrings } from '@/hooks/use-strings'
import { useLang } from '@/hooks/use-lang'
import {
	ContactLinkEmail,
	ContactLinkGithub,
	ContactLinkPhone,
	ContactLinkPlace,
} from '@/components/ui/link'
import Form from './form'

type Props = {
	params: Promise<{ lang: string }>
}

export const revalidate = 3600

export default async function ContactPage({ params }: Props) {
	const lang = await useLang(params)
	const strings = await useStrings(lang)

	return (
		<div className="container px-4 py-12 md:px-6 md:py-24">
			<div className="flex flex-col items-center justify-center space-y-4 text-center">
				<div className="space-y-2">
					<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						Contact Me
					</h1>
					<p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
						Get in touch for business inquiries or project collaboration
					</p>
				</div>
			</div>

			<div className="mx-auto max-w-5xl pt-12">
				<div className="grid gap-8 md:grid-cols-2">
					<Card>
						<CardHeader>
							<CardTitle>Business Information</CardTitle>
							<CardDescription>My official business details</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-2">
								<h3 className="font-medium">Business Details</h3>
								<div className="grid gap-1 text-sm">
									<div className="flex items-start gap-2">
										<span className="font-medium">CNPJ:</span>
										<span>36.217.301/0001-19</span>
									</div>
									<div className="flex items-start gap-2">
										<span className="font-medium">Business Name:</span>
										<span>36.217.301 ANDERSON COSTA DA SILVA</span>
									</div>
								</div>
							</div>

							<div className="space-y-2">
								<h3 className="font-medium">Contact Information</h3>
								<div className="grid gap-3">
									<ContactLinkPhone phone={strings.phone} />
									<ContactLinkEmail email={strings.email} />
									<ContactLinkPlace place={strings.place} />
									<ContactLinkGithub
										github={strings.github}
										text={`github.com/${strings.username}`}
									/>
								</div>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Send a Message</CardTitle>
							<CardDescription>
								Fill out the form below to get in touch
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Form email={strings.email} />
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
