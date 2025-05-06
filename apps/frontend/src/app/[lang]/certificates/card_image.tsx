'use client'

import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

import placeholder from '../../../../public/img/placeholder.png'

type Props = {
	image: string
	title: string
}

export default function CardImage({ image, title }: Props) {
	const [src, setSrc] = useState<
		string | StaticImageData
	>(image ?? placeholder)
	return (
		<Image
			src={src}
			alt={title}
			className="object-cover+ transition-all hover:scale-110"
			fill
			onError={() => setSrc(placeholder)}
		/>
	)
}
