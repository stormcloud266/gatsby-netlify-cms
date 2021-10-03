import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Container, Title } from '@UI'
import { Leaf, Tree, Wrench, Compass } from '@images/icons'
import * as styles from './iconsGrid.module.scss'

const IconsGrid = () => {
	const data = [
		{
			title: 'Pruning and Hedging',
			body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias dolor reprehenderit corrupti quos?',
			icon: <Leaf />,
		},
		{
			title: 'Tree Trimming',
			body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias dolor reprehenderit corrupti quos?',
			icon: <Tree />,
		},
		{
			title: 'Landscaping',
			body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias dolor reprehenderit corrupti quos?',
			icon: <Compass />,
		},
		{
			title: 'Irrigation Installation',
			body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias dolor reprehenderit corrupti quos?',
			icon: <Wrench />,
		},
	]

	return (
		<Container bgAccent section id='services'>
			<Container wrapperSmOnMd>
				<Container wrapperSm noPadding>
					<Fade triggerOnce>
						<Title center>We Provide Top-Rated Services</Title>
					</Fade>
				</Container>

				<div className={styles.cardContainer}>
					{data.map(({ title, body, icon }, i) => (
						<Fade triggerOnce fraction={0.5} key={i}>
							<div className={styles.card}>
								<div className={styles.iconContainer}>{icon}</div>
								<div>
									<Title tag='h3' className={styles.cardTitle}>
										{title}
									</Title>
									<p>{body}</p>
								</div>
							</div>
						</Fade>
					))}
				</div>
			</Container>
		</Container>
	)
}

export default IconsGrid
