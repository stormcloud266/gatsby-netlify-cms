import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Container, Gallery, Title } from '@UI'
import * as styles from './gallery.module.scss'

const GallerySection = () => {
	return (
		<Container
			section
			wrapper
			noPadding
			className={styles.container}
			id='gallery'
		>
			<Fade triggerOnce>
				<Title center className={styles.title}>
					View Our Recent Work
				</Title>
				<Gallery />
			</Fade>
		</Container>
	)
}

export default GallerySection
