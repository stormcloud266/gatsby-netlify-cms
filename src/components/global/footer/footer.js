import React from 'react'
import { Link } from 'gatsby'
import { NavLinks } from '@global'
import { Container, Flex, Title } from '@UI'
import { Facebook, Twitter, Linkedin, Instagram } from '@images/icons'
import contact from '@site/contact_info'
import hours from '@site/hours'
import * as styles from './footer.module.scss'

const Footer = () => {
	const data = [
		{ icon: <Facebook />, link: contact.facebook, label: 'go to Facebook' },
		{ icon: <Twitter />, link: contact.twitter, label: 'go to Twitter' },
		{ icon: <Linkedin />, link: contact.linkedin, label: 'go to Linkedin' },
		{ icon: <Instagram />, link: contact.instagram, label: 'go to Instagram' },
	]
	return (
		<Container bgDark>
			<footer className={styles.footer}>
				<Container wrapperSmOnMd>
					<Flex collapseOnMd className={styles.flex}>
						<Container textBlock className={styles.textContainer}>
							<Link to='/' className={styles.logo}>
								Logo
							</Link>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Necessitatibus tenetur a quis.
							</p>
							<nav className={styles.nav}>
								<NavLinks />
							</nav>
							<div className={styles.social}>
								{data.map(({ icon, link, label }, i) => (
									<a href={link} aria-label={label} key={i}>
										{icon}
									</a>
								))}
							</div>
						</Container>
						<div className={styles.hours}>
							<Title center className={styles.title}>
								Our Office Hours
							</Title>

							<ul className={styles.hoursList}>
								<li>
									<span>Monday:</span> {hours.monday}
								</li>
								<li>
									<span>Tuesday:</span> {hours.tuesday}
								</li>
								<li>
									<span>Wednesday:</span> {hours.wednesday}
								</li>
								<li>
									<span>Thursday:</span> {hours.thursday}
								</li>
								<li>
									<span>Friday:</span> {hours.friday}
								</li>
								<li>
									<span>Saturday:</span> {hours.saturday}
								</li>
								<li>
									<span>Sunday:</span> {hours.sunday}
								</li>
							</ul>
						</div>
					</Flex>
				</Container>
			</footer>
		</Container>
	)
}

export default Footer
