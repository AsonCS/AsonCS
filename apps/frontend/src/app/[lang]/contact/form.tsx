'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function Form({ email }: { email: string }) {
	const [sending, setSending] = useState(false)

	return (
		<form
			action="#"
			id="form"
			className="space-y-4"
			onSubmit={(e) => {
				e.preventDefault()
				setSending(true)
				toast({
					title: 'Message sent!',
					description: "Thank you for your message. I'll get back to you soon.",
				})
				const { message, subject } = e.target as any
				const mailto = `mailto:${email}?subject=${subject.value}&body=${message.value}`
				console.log(mailto)
				window.open(mailto)
				setTimeout(() => {
					location.reload()
				}, 1_000 * 3)
			}}
		>
			<div className="space-y-2">
				<Label htmlFor="name">Name</Label>
				<Input id="name" name="name" placeholder="Your name" required />
			</div>
			<div className="space-y-2 hidden">
				<Label htmlFor="email">Email</Label>
				<Input id="email" name="email" type="email" placeholder="your.email@example.com" />
			</div>
			<div className="space-y-2">
				<Label htmlFor="subject">Subject</Label>
				<Input id="subject" name="subject" placeholder="What is this regarding?" required />
			</div>
			<div className="space-y-2">
				<Label htmlFor="message">Message</Label>
				<Textarea
					id="message"
					name="message"
					placeholder="Your message"
					rows={5}
					required
				/>
			</div>
			<Button className="w-full" disabled={sending}>
				{sending ? 'Sending...' : 'Send Message'}
			</Button>
		</form>
	)
}
