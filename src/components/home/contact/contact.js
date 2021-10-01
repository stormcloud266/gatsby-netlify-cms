import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Button, Container, Flex, Title } from '@UI'
import { Map, Phone, Mail } from '@images/icons'
import * as styles from './contact.module.scss'

const Contact = () => {
	const data = [
		{ icon: <Map />, text: 'placeholder text' },
		{ icon: <Phone />, text: 'placeholder text' },
		{ icon: <Mail />, text: 'placeholder text' },
	]
	return (
		<Container section wrapperSmOnMd>
			<Fade triggerOnce>
				<Flex collapseOnMd>
					<Container>
						<Title>It's Time To Enjoy Your Perfect Yard</Title>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nemo,
							esse corporis voluptatibus nesciunt nihil odit expedita aliquam
							minus vitae obcaecati iure laborum labore repudiandae provident.
						</p>
						<div className={styles.list}>
							{data.map(({ icon, text }) => (
								<div className={styles.listItem}>
									<div className={styles.iconContainer}>{icon}</div>
									<p>{text}</p>
								</div>
							))}
						</div>
					</Container>
					<div className={styles.formContainer}>
						<form action='' className={styles.form}>
							<div className={styles.inputContainer}>
								<label htmlFor='name'>Name</label>
								<input type='text' name='name' id='name' />
							</div>

							<div className={styles.inputContainer}>
								<label htmlFor='email'>Email</label>
								<input type='email' name='email' id='email' />
							</div>

							<div className={styles.inputContainer}>
								<label htmlFor='message'>Message</label>
								<textarea name='message' id='message' cols='10' rows='5' />
							</div>

							<Button type='submit' cta className={styles.button}>
								Send Message
							</Button>
						</form>
					</div>
				</Flex>
			</Fade>
		</Container>
	)
}

export default Contact