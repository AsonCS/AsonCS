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

export default async function ContactPage({ params }: Props) {
	const lang = await useLang(params)
	const strings = await useStrings(lang)
	const contact = strings.contact

	return (
		<div className="container px-4 py-12 md:px-6 md:py-24">
			<div className="flex flex-col items-center justify-center space-y-4 text-center">
				<div className="space-y-2">
					<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						{contact.title}
					</h1>
					<p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
						{contact.subtitle}
					</p>
				</div>
			</div>

			<div className="mx-auto max-w-5xl pt-12">
				<div className="grid gap-8 md:grid-cols-2">
					<Card>
						<CardHeader>
							<CardTitle>{contact.info.title}</CardTitle>
							<CardDescription>{contact.info.subtitle}</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-2">
								<h3 className="font-medium">{contact.info.detail}</h3>
								<div className="grid gap-1 text-sm">
									<div className="flex items-start gap-2">
										<span className="font-medium">CNPJ:</span>
										<span>36.217.301/0001-19</span>
									</div>
									<div className="flex items-start gap-2">
										<span className="font-medium">{contact.info.name}:</span>
										<span>36.217.301 ANDERSON COSTA DA SILVA</span>
									</div>
								</div>
							</div>

							<div className="space-y-2">
								<h3 className="font-medium">{contact.info.info}</h3>
								<div className="grid gap-3">
									<ContactLinkPhone phones={[strings.phone, strings.phone2]} />
									<ContactLinkEmail emails={[strings.email, strings.email2]} />
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
							<CardTitle>{contact.form.title}</CardTitle>
							<CardDescription>{contact.form.subtitle}</CardDescription>
						</CardHeader>
						<CardContent>
							<Form email={strings.email} strings={contact.form} />
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
