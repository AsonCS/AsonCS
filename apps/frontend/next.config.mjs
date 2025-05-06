/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'firebasestorage.googleapis.com',
				port: '',
				pathname:
					'/v0/b/asoncs-ts.firebasestorage.app/o/**',
				search: '',
			},
		],
		unoptimized: true,
	},
}

export default nextConfig
