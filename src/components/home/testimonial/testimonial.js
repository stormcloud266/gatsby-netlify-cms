import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Fade } from 'react-awesome-reveal'
import classes from 'classnames'
import { BackgroundImage, Container, Title } from '@UI'
import { Quote, Next, Previous } from '@images/icons'
import * as styles from './testimonial.module.scss'

const Testimonial = () => {
	const data = useStaticQuery(graphql`
		query TestimonialQuery {
			image: file(relativePath: { eq: "testimonials.jpeg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 350, placeholder: BLURRED)
				}
			}
		}
	`)

	const testimonials = [
		{
			name: 'John Doe',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quos harum quam quis nisi recusandae nulla dolores. Asperiores, nesciunt esse?',
		},
		{
			name: 'Jane Doe',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		},
		{
			name: 'Carmen Sandiego',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		},
	]

	const [visibleIndex, setVisibleIndex] = useState(0)

	return (
		<Container className={styles.container} bgDark>
			<BackgroundImage
				className={styles.imageContainer}
				image={data.image}
				overlayColor='linear-gradient(to top left, hsla(248, 39%, 39%, .8), hsla(180, 25%, 25%, .8))'
			>
				<div className={styles.iconContainer}>
					<Quote />
				</div>
			</BackgroundImage>

			<div className={styles.textContainer}>
				<Fade triggerOnce>
					<Container className={styles.textInner}>
						<Title className={styles.title}>
							See what our clients are saying
						</Title>
						<div>
							{testimonials.map(({ name, text }, i) => (
								<div
									key={i}
									className={classes(
										styles.testimonial,
										visibleIndex === i && styles.visible
									)}
								>
									<p>{text}</p>
									<p className={styles.author}>- {name}</p>
								</div>
							))}
						</div>
						<div>
							<button
								className={styles.button}
								onClick={() => setVisibleIndex(visibleIndex - 1)}
								aria-label='previous testimonial'
								disabled={visibleIndex === 0}
							>
								<Previous />
							</button>
							<button
								className={styles.button}
								onClick={() => setVisibleIndex(visibleIndex + 1)}
								aria-label='next testimonial'
								disabled={visibleIndex === testimonials.length - 1}
							>
								<Next />
							</button>
						</div>
					</Container>
				</Fade>
			</div>
		</Container>
	)
}

export default Testimonial
