import React from 'react'
import "./Playback.css"

export default function Playback({playback}) {
  return (
    <iframe
    title="Spotify Embed"
    src={`https://open.spotify.com/embed/playlist/${playback ? playback : "4sxxq1RvtsxBubRh4KcHQN"}?utm_source=generator&theme=0`}
    width="80%"
    height="30%"
    style={{ minHeight: '360px' }}
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
/>
  )
}
