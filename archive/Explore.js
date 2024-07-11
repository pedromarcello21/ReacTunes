import React, { useState } from 'react'
import APIKit from "../src/spotify"

export default function Explore({ setPlaylists, playlists, playback, recs, setRecs}) {


    function createPlaylist(){
        APIKit.post("users/pedromarcello/playlists",{
            "name":"test"
        })
        .then(newPlaylist => setPlaylists([...playlists, newPlaylist.data]))
    }

    function getRecs(){
        APIKit.get("recommendations?limit=50&seed_artists=3wcj11K77LjEY1PkEazffa&seed_genres=afrobeat&seed_tracks=5hVjoL3sHepZROri63wBxP")
        .then(recs => setRecs(recs.data.tracks))
        
    }

    function addRecs(){
        const uris = recs.map(rec => rec.uri)
        APIKit.post(`playlists/${playback}/tracks`,{
            "uris":uris
        })
        .then(res => console.log("songs added", res))
        
    }


  return (
    <>
        <button onClick = {createPlaylist}>Create Playlist</button>
        {/* <button onClick = {getSeeds}>Get genre seeds</button> */}
        <button onClick = {getRecs}>Get recs</button>
        <button onClick = {addRecs}>Add Recs to Test</button>

    </>
  )
}

// genre seeds: afrobeat, house, reggaeton

//burna: 3wcj11K77LjEY1PkEazffa, track: 5hVjoL3sHepZROri63wBxP 
//Bad Bunny: 4q3ewBCX7sLwd24euuV69X track: 4tYFy8ALRjIZvnvSLw5lxN
//Cloonee: 7MdlXmq2HViAJWo9cf30sR track: 1LldihpfcYdxAnCigKijW2
