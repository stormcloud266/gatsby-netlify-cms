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

// import hours from '../../site/hours'
// import contact from '../../site/contact_info'

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

			{/* 
			<p>Monday: {hours.monday}</p>
			<p>Tuesday: {hours.tuesday}</p>
			<p>Wednesday: {hours.wednesday}</p>
			<p>Thursday: {hours.thursday}</p>
			<p>Friday: {hours.friday}</p>
			<p>Saturday: {hours.saturday}</p>
			<p>Sunday: {hours.sunday}</p>
		
			<p>Phone: {contact.phone}</p>
			<p>Email: {contact.email}</p>
			<p>
				Address: <br />
				{contact.street}
				<br />
				{contact.city_state_zip}
			</p>
		*/}
		</Layout>
	)
}

export default IndexPage
