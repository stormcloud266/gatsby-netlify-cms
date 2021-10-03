const path = require('path')

module.exports = {
	siteMetadata: {
		title: 'Gatsby Starter Stormcloud',
		siteUrl: `https://www.gatsbyjs.com`,
		description: `Gatsby v3 starter for getting website projects up and running fast.`,
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-netlify-cms',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/assets/images/favicon.png',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Montserrat:400,600', 'Work Sans:700'],
				},
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/assets/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'static',
				path: './static',
			},
			__key: 'static',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'gallery',
				path: './site/gallery/images',
			},
			__key: 'gallery',
		},
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'@components': path.resolve(__dirname, 'src/components'),
					'@global': path.resolve(__dirname, 'src/components/global'),
					'@UI': path.resolve(__dirname, 'src/components/UI'),
					'@images': path.resolve(__dirname, 'src/assets/images'),
					'@globalStyles': path.resolve(__dirname, 'src/assets/globalStyles'),
					'@site': path.resolve(__dirname, 'site'),
				},
			},
		},
	],
}
