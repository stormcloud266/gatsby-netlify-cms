import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Fade } from 'react-awesome-reveal'
import { Layout, Seo, Gallery } from '@global'
import { Container, Title } from '@UI'

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<Seo />

			<Container section wrapperSm textBlock textCenter>
				<Gallery />
			</Container>
		</Layout>
	)
}

export default IndexPage
