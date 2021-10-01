import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Button, Container, Title } from '@UI'
import * as styles from './cta.module.scss'

const Cta = () => {
	return (
		<Container bgDark>
			<Container wrapper className={styles.container}>
				<Fade triggerOnce>
					<Container textBlock textCenter>
						<Title className={styles.title}>
							Ready for the landscape of your dreams?
						</Title>

						<Container wrapperSm noPadding>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
								cupiditate? Recusandae amet aperiam aliquid sit.
							</p>
						</Container>
						<Button to='/' cta>
							Get Your Free Quote
						</Button>
					</Container>
				</Fade>
			</Container>
		</Container>
	)
}

export default Cta
