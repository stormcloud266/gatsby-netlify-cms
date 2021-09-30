import React from 'react'
import { Layout, Seo, Gallery } from '@global'
import { Container, Flex, Title } from '@UI'
import hours from '../../site/hours'
import contact from '../../site/contact_info'

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<Seo />

			<Container section wrapper>
				<Gallery />
			</Container>

			<Container section bgAccent>
				<Flex alignStart>
					<Container wrapperSm textBlock>
						<Title tag='p'>Office Hours</Title>
						<p>Monday: {hours.monday}</p>
						<p>Tuesday: {hours.tuesday}</p>
						<p>Wednesday: {hours.wednesday}</p>
						<p>Thursday: {hours.thursday}</p>
						<p>Friday: {hours.friday}</p>
						<p>Saturday: {hours.saturday}</p>
						<p>Sunday: {hours.sunday}</p>
					</Container>
					<Container wrapperSm textBlock>
						<Title tag='p'>Contact Info</Title>
						<p>Phone: {contact.phone}</p>
						<p>Email: {contact.email}</p>
						<p>
							Address: <br />
							{contact.street}
							<br />
							{contact.city_state_zip}
						</p>
					</Container>
				</Flex>
			</Container>
		</Layout>
	)
}

export default IndexPage
