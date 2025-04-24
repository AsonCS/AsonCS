import * as React from 'react'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDocker, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import { cn } from '@/lib/utils'

export const ContactLink = React.forwardRef<
	HTMLAnchorElement,
	React.HTMLAttributes<HTMLAnchorElement> & {
		href: string
	}
>(({ className, ...props }, ref) => (
	<Link
		className={cn(
			`flex items-center gap-1 text-gray-500
                hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50`,
			className
		)}
		ref={ref}
		rel="noopener noreferrer"
		target="_blank"
		{...props}
	/>
))
ContactLink.displayName = 'ContactLink'
const contactLinkContentClassName = 'h-5 w-5 mr-1'

export function ContactLinkEmail({ className, emails }: { className?: string; emails: string[] }) {
	return emails.map((email) => (
		<ContactLink href={`mailto:${email}`}>
			<Mail className={contactLinkContentClassName} />
			<span className={className}>{email}</span>
		</ContactLink>
	))
}

export function ContactLinkDocker({ className, docker }: { className?: string; docker: string }) {
	return (
		<ContactLink href={docker}>
			<FontAwesomeIcon className={contactLinkContentClassName} icon={faDocker} />
			<span className={className}>Docker</span>
		</ContactLink>
	)
}

export function ContactLinkGithub({
	className,
	github,
	text = 'GitHub',
}: {
	className?: string
	github: string
	text?: string
}) {
	return (
		<ContactLink href={github}>
			<FontAwesomeIcon className={contactLinkContentClassName} icon={faGithub} />
			<span className={className}>{text}</span>
		</ContactLink>
	)
}

export function ContactLinkPhone({ className, phones }: { className?: string; phones: string[] }) {
	function toWhatsapp(phone: string) {
		return phone
			.replaceAll('(', '')
			.replaceAll(')', '')
			.replaceAll(' ', '')
			.replaceAll('-', '')
			.replaceAll('+', '')
	}
	return phones.map((phone) => (
		<ContactLink href={`https://wa.me/:${toWhatsapp(phone)}`}>
			<FontAwesomeIcon className={contactLinkContentClassName} icon={faWhatsapp} />
			<span className={className}>{phone}</span>
		</ContactLink>
	))
}

export function ContactLinkPlace({ className, place }: { className?: string; place: string }) {
	return (
		<ContactLink href={place}>
			<MapPin className={contactLinkContentClassName} />
			<span className={className}>Jandira - State of São Paulo - Brazil</span>
		</ContactLink>
	)
}
