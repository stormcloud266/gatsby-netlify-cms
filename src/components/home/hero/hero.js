import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Fade } from 'react-awesome-reveal'
import { BackgroundImage, Button, Container, Title } from '@UI'
import * as styles from './hero.module.scss'

const Hero = () => {
	const { image } = useStaticQuery(
		graphql`
			query {
				image: file(relativePath: { eq: "hero.jpeg" }) {
					childImageSharp {
						gatsbyImageData(
							layout: FULL_WIDTH
							quality: 100
							placeholder: BLURRED
						)
					}
				}
			}
		`
	)

	return (
		<BackgroundImage
			image={image}
			overlayColor='linear-gradient(to top left, hsla(248, 39%, 39%, .8), hsla(180, 25%, 25%, .8))'
		>
			<Container className={styles.hero} wrapper textCenter>
				<div>
					<Fade triggerOnce>
						<Title className={styles.title}>
							Get the Perfect Yard without Breaking a Sweat
						</Title>
					</Fade>
					<Fade triggerOnce delay={300}>
						<div className={styles.buttonContainer}>
							<Button to='/#contact' cta>
								Get Your Free Quote
							</Button>
							<Button to='/#contact' white>
								Learn More
							</Button>
						</div>
					</Fade>
				</div>
			</Container>
		</BackgroundImage>
	)
}

export default Hero
