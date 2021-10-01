import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Container, Flex, Title, Video } from '@UI'
import { Check } from '@images/icons'
import * as styles from './intro.module.scss'

const Intro = () => {
	const data = [
		'Get professional results',
		'Save your time',
		'Enjoy your summer',
	]

	return (
		<Container section wrapperSmOnMd>
			<Fade triggerOnce>
				<Flex collapseOnMd>
					<Container textBlock>
						<Title>Helping You Make Your Neighbors Jealous</Title>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
							soluta rem obcaecati quis officiis, sed et nesciunt, enim animi
							nostrum, aut amet ipsam ab hic tempore culpa quod nisi deserunt.
						</p>
						<Fade triggerOnce cascade damping={0.2}>
							<ul className={styles.list}>
								{data.map((item, i) => (
									<li key={i} className={styles.item}>
										<span className={styles.iconContainer}>
											<Check />
										</span>
										{item}
									</li>
								))}
							</ul>
						</Fade>
					</Container>
					<Video title='Long wet glass' id='Yt5zu5Q5s2s' />
				</Flex>
			</Fade>
		</Container>
	)
}

export default Intro
