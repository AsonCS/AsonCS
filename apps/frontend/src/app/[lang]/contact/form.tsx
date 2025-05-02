'use client'

import { TranslatableContactForm } from '@ason_cs_ts/i18n'

import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type Props = {
	email: string
	strings: TranslatableContactForm
}

export default function Form({ email, strings }: Props) {
	return (
		<form
			action="#"
			id="form"
			className="space-y-4"
			onSubmit={(e) => {
				e.preventDefault()
				toast({
					title: 'Message sent!',
					description:
						"Thank you for your message. I'll get back to you soon.",
				})
				const { message, subject } = e.target as any
				const mailto = `mailto:${email}?subject=${subject.value}&body=${message.value}`
				window.open(mailto)
				setTimeout(() => {
					location.reload()
				}, 1_000 * 3)
			}}
		>
			<div className="space-y-2">
				<Label htmlFor="name">{strings.name}</Label>
				<Input
					id="name"
					name="name"
					placeholder={strings.name_placeholder}
					required
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="subject">
					{strings.subject}
				</Label>
				<Input
					id="subject"
					name="subject"
					placeholder={
						strings.subject_placeholder
					}
					required
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="message">
					{strings.message}
				</Label>
				<Textarea
					id="message"
					name="message"
					placeholder={
						strings.message_placeholder
					}
					rows={5}
					required
				/>
			</div>
			<Button className="w-full">
				{strings.send}
			</Button>
		</form>
	)
}
