import React from 'react'

const Video = (props) => (
  <iframe
    title={props.title}
    width='560'
    height='315'
    src={'https://www.youtube.com/embed/' + props.embedId + '?autoplay=1'}
    frameBorder='0'
    autoPlay
    allowFullScreen />
)

export default Video
