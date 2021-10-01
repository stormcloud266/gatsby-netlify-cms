import React from "react"
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import * as styles from "./video.module.scss"

const Video = ({ id, title }) => {
  return (
    <div className={styles.container}>
      <LiteYouTubeEmbed id={id} title={title} />
    </div>
  )
}

export default Video
