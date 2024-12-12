import React, { useState, useEffect } from 'react';
// import APIKit from "../spotify"
import "./Playlists.css";
import Click from "./Click"
import Playback from './Playback';
import SearchBar from './SearchBar';



export default function Playlists({playlists, playback, setPlayback, handleDarkMode, darkMode}) {


  const [searchPlaylist, setSearchPlaylist] = useState("")

  const filteredPlaylists = playlists.filter(playlist => playlist.name.toLowerCase().includes(searchPlaylist.toLowerCase()))


  return (
    <div id = "main-page">
      <SearchBar setSearchPlaylist = {setSearchPlaylist}/>
      <div id="library">
          {filteredPlaylists?.map(playlist => 
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
