/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
	  ignoreBuildErrors: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.ctfassets.net',
				port: '',
				pathname: `/${process.env.CONTENTFUL_SPACE_ID}/**`,
			},
		],
	},
	
}

module.exports = nextConfig
