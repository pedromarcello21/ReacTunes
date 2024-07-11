import React from 'react'
// import APIKit from "../spotify"
import "./Playlists.css";
import Click from "./Click"
import Playback from './Playback';



export default function Playlists({playlists, playback, setPlayback, handleDarkMode, darkMode}) {




  return (
    <div id = "main-page">
      <div id="library">
          {playlists?.map(playlist => 
          <div key = {playlist.id}className = "playlist" onClick = {() => setPlayback(playlist.id)}>
            {playlist.images && playlist.images.length > 0 ? <img src = {playlist.images[0].url} alt = {playlist.name}/> : <div>No Image</div>}
            <p>{playlist.name}</p>
          </div>
          )}
      </div>

      {/* <Playback playback = {playback}/> */}


      {/* <iframe
          title="Spotify Embed"
          src={`https://open.spotify.com/embed/playlist/${playback ? playback : "4sxxq1RvtsxBubRh4KcHQN"}?utm_source=generator&theme=${darkMode}`}
          width="80%"
          height="100%"
          style={{ minHeight: '360px' }}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
      /> */}


      {/* <Click handleClick = {handleDarkMode}/> */}

    </div>
  )
}
