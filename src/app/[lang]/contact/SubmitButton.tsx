'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'

export default function SubmitButton() {
	const [sending, setSending] = useState(false)
	return (
		<Button
			className="w-full"
			disabled={sending || true}
			onClick={(e) => {
				e.preventDefault()
				setSending(true)
				toast({
					title: 'Message sent!',
					description: "Thank you for your message. I'll get back to you soon.",
				})
				setTimeout(() => {
					location.reload()
				}, 1_000 * 3)
			}}
		>
			{/*sending ? 'Sending...' : 'Send Message'*/}
			Work in progress 🥲
		</Button>
	)
}
