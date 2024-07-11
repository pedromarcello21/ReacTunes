import React, { useState, useEffect } from 'react'
import APIKit from "../spotify"
import "./PlaylistArtwork.css"

export default function PlaylistArtwork({playlists, setPlaylists, updatedPlaylist, setUpdatedPlaylist, base64Image, setBase64Image, setUpdatedImage}) {

  const handleImageChange = e =>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64Image(reader.result.split(",")[1]) //remove metadata
    };
    reader.readAsDataURL(file)
  }

  
  async function updateArtwork(e){
    const playlistID = e.target.playlists.value;
    await APIKit.put(`playlists/${playlistID}/images`, base64Image, {
      headers: {
        "Content-Type": "image/jpeg",
      },
    });

    const updatedPlaylistResponse = await APIKit.get(`playlists/${playlistID}`);
    setUpdatedImage(updatedPlaylistResponse.data.images)


  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateArtwork(e);

    // const playlistID = e.target.playlists.value;
    // await APIKit.put(`playlists/${playlistID}/images`, base64Image, {
    //   headers: {
    //     "Content-Type": "image/jpeg",
    //   },
    // });

    // const updatedPlaylistResponse = await APIKit.get(`playlists/${playlistID}`);
    // const updatedPlaylist = updatedPlaylistResponse.data;

    // setPlaylists((prevPlaylists) =>
    //   prevPlaylists.map((playlist) =>
    //     playlist.id === playlistID ? updatedPlaylist : playlist
    //   )
    // );
  };


return (
  <form id = "artwork-form" onSubmit = {handleSubmit}>
    <h1>Change your playlist's artwork!</h1>
    <select id = "playlists" name = "playlists" required>
      <option value = "" >Select a Playlist</option>
      {playlists.map(playlist => 
        <option key = {playlist.id} name = "playlist" value = {playlist.id}>
        {playlist.name}
        </option>)
      }
    </select>
    <input type = "file" name = "albumArtwork" accept = "image/*" onChange={handleImageChange} required/>
    <button type = "submit">update playlist artwork</button>
  </form>
)
}


    // console.log(e.target.playlists.value) //access playlist submitted
    // // console.log(e.target.albumArtwork.value) //access artwork submitted
    // console.log(base64Image)
    // const playlistID = e.target.playlists.value;

    // try{
    // await APIKit.put(`playlists/${playlistID}/images`, base64Image, {
    // "headers":{
    //   "Content-Type":"image/jpeg"
    //   }
    // })
    //fix for getting default playlist artwork
    // const response = await APIKit.get(`playlists/${playlistID}/images`)
    // setUpdatedImage(response.data)

    // })

    
    
    // catch(error){
    //   console.log(error)
    // }


    // useEffect(() => {
    //   if (updatedPlaylist) {
    //       setPlaylists(prevPlaylists =>
    //           prevPlaylists.map(playlist =>
    //               playlist.id === updatedPlaylist.id ? updatedPlaylist : playlist
    //           )
    //       );
    //       setUpdatedPlaylist(null);
    //   }
    // }, [updatedPlaylist, setPlaylists]);


