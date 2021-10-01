import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Container, Title } from '@UI'
import { Leaf, Tree, Wrench, Compass } from '@images/icons'
import * as styles from './iconsGrid.module.scss'

const IconsGrid = () => {
	const data = [
		{
			title: 'Advanced Lawn Care',
			body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias dolor reprehenderit corrupti quos?',
			icon: <Leaf />,
		},
		{
			title: 'Advanced Lawn Care',
			body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias dolor reprehenderit corrupti quos?',
			icon: <Tree />,
		},
		{
			title: 'Advanced Lawn Care',
			body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias dolor reprehenderit corrupti quos?',
			icon: <Compass />,
		},
		{
			title: 'Advanced Lawn Care',
			body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias dolor reprehenderit corrupti quos?',
			icon: <Wrench />,
		},
	]

	return (
		<Container bgAccent section>
			<Container wrapperSmOnMd>
				<Container wrapperSm noPadding>
					<Fade triggerOnce>
						<Title center>Checkout All These Things We Can Do</Title>
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
