import React from 'react'
import { Layout, Seo } from '@global'
import {
	Hero,
	Intro,
	Cta,
	IconsGrid,
	Gallery,
	Testimonial,
	Contact,
} from '@components/home'

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<Seo />
			<Hero />
			<Intro />
			<IconsGrid />
			<Cta />
			<Gallery />
			<Testimonial />
			<Contact />
		</Layout>
	)
}

export default IndexPage
