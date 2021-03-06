import React, { useState, useRef, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Container } from '@UI'
import galleryData from '../../../../site/gallery'
import * as styles from './gallery.module.scss'

const Gallery = () => {
	const data = useStaticQuery(graphql`
		query GalleryQuery {
			allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
				edges {
					node {
						id
						relativePath
						childImageSharp {
							gatsbyImageData(
								layout: CONSTRAINED
								width: 1080
								quality: 100
								placeholder: BLURRED
							)
						}
					}
				}
			}
		}
	`)

	// State
	const [isOpen, setIsOpen] = useState(false)
	const [modalImage, setModalImage] = useState([])
	const [currentImg, setCurrentImg] = useState(null)

	// Refs
	const closeButtonRef = useRef(null)
	const imageRefs = useRef([])
	imageRefs.current = []

	useEffect(() => {
		if (isOpen) {
			closeButtonRef.current.focus()
		}
	}, [isOpen])

	const addImageRefs = (el) => {
		if (el && !imageRefs.current.includes(el)) {
			imageRefs.current.push(el)
		}
	}

	// Handlers
	const openModal = (image, i) => {
		setModalImage(image)
		setIsOpen(true)
		setCurrentImg(i)
	}

	const closeModal = () => {
		setModalImage([])
		setIsOpen(false)
		imageRefs.current[currentImg].focus()
	}

	const images = data.allFile.edges.map(({ node }) => {
		const imageMatch = galleryData.gallery_images.find((galleryImage) => {
			return galleryImage.image.includes(node.relativePath)
		})

		return {
			...node,
			description: imageMatch.description,
		}
	})

	return (
		<>
			<div className={styles.gallery}>
				{images.map((image, i) => {
					return (
						<div
							key={image.id}
							onClick={() => openModal(image, i)}
							onKeyPress={(e) => e.key === 'Enter' && openModal(image, i)}
							tabIndex='0'
							className={styles.image}
							ref={addImageRefs}
							role='button'
						>
							<GatsbyImage image={getImage(image)} alt={image.description} />
						</div>
					)
				})}
			</div>

			{isOpen && (
				<div
					className={styles.modal}
					onKeyUp={(e) => e.key === 'Escape' && closeModal()}
					tabIndex='0'
					role='button'
				>
					<Container wrapper section className={styles.modalWrapper}>
						<GatsbyImage
							image={getImage(modalImage)}
							alt={modalImage.description}
							imgStyle={{ objectFit: 'contain' }}
						/>
						<button
							onClick={closeModal}
							className={styles.closeButton}
							ref={closeButtonRef}
						>
							Close
						</button>
					</Container>
				</div>
			)}
		</>
	)
}

export default Gallery
