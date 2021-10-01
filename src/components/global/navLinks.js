import React from 'react'
import { Link } from 'gatsby'
import { Button } from '@UI'

const NavLinks = () => {
	const links = [
		{
			title: 'Home',
			to: '/',
		},
		{
			title: 'About',
			to: '/about',
		},
		{
			title: 'Blog',
			to: '/blog',
		},
		{
			title: 'Contact',
			to: '/contact',
			cta: true,
		},
	]
	return (
		<>
			{links.map(({ title, to, cta }) =>
				cta ? (
					<Button to={to} key={to} cta nav>
						{title}
					</Button>
				) : (
					<Link to={to} key={to}>
						{title}
					</Link>
				)
			)}
		</>
	)
}

export default NavLinks
