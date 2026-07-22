import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const revalidate = 3600

const AVATAR_URL =
	'https://avatars.githubusercontent.com/u/42609750?v=4'

export default async function Icon() {
	return new ImageResponse(
		(
			<div
				style={{
					width: '100%',
					height: '100%',
					borderRadius: '50%',
					overflow: 'hidden',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: 'transparent',
				}}
			>
				<img
					src={AVATAR_URL}
					alt="avatar"
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
					}}
				/>
			</div>
		),
		{
			width: 512,
			height: 512,
			headers: {
				'Cache-Control':
					'public, max-age=31536000, immutable',
			},
		}
	)
}
