import React from 'react'
import { Link } from 'gatsby'
import { NavLinks } from '@global'
import { Container, Flex } from '@UI'
import { Facebook, Twitter, Linkedin, Instagram } from '@images/icons'
import * as styles from './footer.module.scss'

const Footer = () => {
	const data = [
		{ icon: <Facebook />, link: 'https://ex.com', label: 'go to facbeook' },
		{ icon: <Twitter />, link: 'https://ex.com', label: 'go to facbeook' },
		{ icon: <Linkedin />, link: 'https://ex.com', label: 'go to facbeook' },
		{ icon: <Instagram />, link: 'https://ex.com', label: 'go to facbeook' },
	]
	return (
		<footer className={styles.footer}>
			<Container wrapperSmOnMd>
				<Flex collapseOnMd>
					<Container textBlock className={styles.textContainer}>
						<Link to='/' className={styles.logo}>
							Logo
						</Link>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Necessitatibus tenetur a quis.
						</p>
						<div className={styles.social}>
							{data.map(({ icon, link, label }, i) => (
								<a href={link} aria-label={label} key={i}>
									{icon}
								</a>
							))}
						</div>
					</Container>
					<nav className={styles.nav}>
						<NavLinks />
					</nav>
				</Flex>
			</Container>
		</footer>
	)
}

export default Footer
