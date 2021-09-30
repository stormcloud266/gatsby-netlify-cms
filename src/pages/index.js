import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Fade } from 'react-awesome-reveal'
import { Layout, Seo } from '@global'
import { Container, Title } from '@UI'

import galleryData from '../../site/settings/gallery.json'

const IndexPage = ({ data }) => {
	const allImages = data.allFile.edges
	return (
		<Layout>
			<Seo />

			<Container section wrapperSm textBlock textCenter>
				{allImages.map(({ node }) => {
					const match = galleryData.galleryImages.find((galleryImage) => {
						return galleryImage.image.includes(node.relativePath)
					})

					return (
						match && (
							<GatsbyImage image={getImage(node)} alt={match.description} />
						)
					)
				})}
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
