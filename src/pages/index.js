import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Fade } from 'react-awesome-reveal'
import { Layout, Seo } from '@global'
import { Container, Title } from '@UI'

const IndexPage = ({ data }) => {
	console.log('data: ', data.allFile.edges)
	return (
		<Layout>
			<Seo />
			{data.allFile.edges.map(({ node }) => (
				<GatsbyImage image={getImage(node)} />
			))}
			<Container section wrapperSm textBlock textCenter>
				<p>Welcome to</p>
				<Fade triggerOnce>
					<Title tag='h1'>Gatsby Starter Stormcloud</Title>
				</Fade>
			</Container>
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
	query HomePageQuery {
		allFile(filter: { sourceInstanceName: { eq: "staticImages" } }) {
			edges {
				node {
					id
					relativePath

					childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 700
							placeholder: BLURRED
						)
					}
				}
			}
		}
	}
`
