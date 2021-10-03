import React from 'react'
import { Link } from 'gatsby'

const NavLinks = ({ ctaClass }) => {
	const links = [
		{
			title: 'Home',
			to: '/',
		},
		{
			title: 'About',
			to: '/#about',
		},
		{
			title: 'Services',
			to: '/#services',
		},
		{
			title: 'Gallery',
			to: '/#gallery',
		},
		{
			title: 'Contact',
			to: '/#contact',
			cta: true,
		},
	]
	return (
		<>
			{links.map(({ title, to, cta }) => (
				<Link to={to} key={to} className={cta && ctaClass}>
					{title}
				</Link>
			))}
		</>
	)
}

export default NavLinks
