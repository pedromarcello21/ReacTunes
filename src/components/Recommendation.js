import React, {useState} from 'react'
import APIKit from "../spotify"
import "./Explore.css"



export default function Recommendation({playlists, setPlaylists, updatedPlaylist, setUpdatedPlaylist}) {

    const [recs, setRecs] = useState([])
    const [playlistID, setPlaylistID] = useState("")


    
    async function getRecs(e){
        let response ;
        switch(e.target.genre.value){
            case 'afrobeats':
                response = await APIKit.get("recommendations?limit=50&seed_artists=3wcj11K77LjEY1PkEazffa&seed_genres=afrobeat&seed_tracks=5hVjoL3sHepZROri63wBxP")
                // setRecs(response.data.tracks)
                // return response.data.tracks
                break;
            case 'chill':
                response = await APIKit.get("recommendations?limit=50&seed_artists=28yVvEvA2lT3K5RNIhV1Dj&seed_genres=chill&seed_tracks=2SPOiBNBMVBbF3qFwRmZhB")
                // setRecs(response.data.tracks)
                // return response.data.tracks
                break;
            case 'house':
                response = await APIKit.get("recommendations?limit=50&seed_artists=1VJ0briNOlXRtJUAzoUJdt&seed_genres=house&seed_tracks=6ho0GyrWZN3mhi9zVRW7xi")
                // setRecs(response.data.tracks)
                // return response.data.tracks
                break;
            case 'reggaeton':
                response = await APIKit.get("recommendations?limit=50&seed_artists=4q3ewBCX7sLwd24euuV69X&seed_genres=reggaeton&seed_tracks=4tYFy8ALRjIZvnvSLw5lxN")
                // setRecs(response.data.tracks)
                // return response.data.tracks
                break;

        }
        setRecs(response.data.tracks)
        return response.data.tracks

        
    }

    async function createPlaylist(e) {
        const newPlaylist = await APIKit.post("users/pedromarcello/playlists", {
            "name": e.target.playlist.value
        });
        const newPlaylistID = newPlaylist.data.id;
        setPlaylistID(newPlaylistID);
        // setPlaylists([...playlists, newPlaylist.data]);******
        return newPlaylistID;
    }

    async function addRecs(playlistID, recs){
        const uris = recs.map(rec => rec.uri)
        await APIKit.post(`playlists/${playlistID}/tracks`,{
            "uris":uris
        })

        //fix for getting default playlist artwork
        const updatedPlaylist = await APIKit.get(`playlists/${playlistID}`)
        setUpdatedPlaylist(updatedPlaylist.data)
        
    }


    async function handleSubmit(e){
        e.preventDefault();
        const recsData = await getRecs(e);
        // console.log(recsData)
        const newPlaylistID = await createPlaylist(e);
        await addRecs(newPlaylistID, recsData);
        // console.log(e.target.genre.value)
        // console.log(e.target.playlist.value)

    }

  return (
    <form id="create-playlist-form" onSubmit = {handleSubmit}>
        <h1>Create a playlist based on the following genres!</h1>
        <div id ="rec-list">
            <span className="rec">
                <label htmlFor="playlistChoice1">Afrobeats</label>
                <input type="radio" id="playlistChoice1" name="genre" value="afrobeats" required />
                
            </span>

            <span className="rec">
                <label htmlFor="playlistChoice2">Chill</label>
                <input type="radio" id="playlistChoice2" name="genre" value="chill" />
            </span>

            <span className="rec">
                <label htmlFor="playlistChoice3">House</label>
                <input type="radio" id="playlistChoice3" name="genre" value="house" />
            </span>

            <span className="rec">
                <label htmlFor="playlistChoice4">Reggaeton</label>
                <input type="radio" id="playlistChoice4" name="genre" value="reggaeton" />
            </span>
        </div>

        <input type = "text" placeholder="Give your playlist a name" name="playlist" required/>
        <button type = "submit">Create Playlist</button>
    </form>
  )
}




        // console.log(playlists[playlists.length-4].images)
        // console.log(playlists[playlists.length-1].images)
        // const albumUrls = recs.slice(0,4).map(recs => recs.album.images[0].url)

        // // Generate a mosaic image
        // const mosaicImage = await mergeImages([
        //     { src: albumUrls[0], x: 0, y: 0 },
        //     { src: albumUrls[1], x: 320, y: 0 },
        //     { src: albumUrls[2], x: 0, y: 320 },
        //     { src: albumUrls[3], x: 320, y: 320 }
        // ], {
        //     width: 640,
        //     height: 640
        // });

        // const base64data = mosaicImage.split(",")[1];
        // await APIKit.put(await APIKit.put(`playlists/${playlistID}/images`,base64data, {
        //             headers:{
        //                 "Content-Type":'image/jpeg'
        //             }
        //         }))




        // console.log(recs[0].album.images[0].url.split("/").pop())
        
        // let albumArtString="https://mosaic.scdn.co/640/"
        // for(let i=0; i<4; i++){
        //     albumArtString+="ab67616d00001e02"+recs[i].album.images[2].url.split("/").pop()
        // }

        // const response = await fetch(albumArtString);
        // const blob = await response.blob();
        // const reader = new FileReader();
        // reader.readAsDataURL(blob);
        // reader.onloaded = async () =>{
        //     const base64data = reader.result.split(',')[1]

        //     await APIKit.put(`playlists/${playlistID}/images`,base64data, {
        //         headers:{
        //             "Content-Type":'image/jpeg'
        //         }
        //     })

        // }
    
        // console.log(albumArt)

    // function getRecs(){
    //     APIKit.get("recommendations?limit=50&seed_artists=3wcj11K77LjEY1PkEazffa&seed_genres=afrobeat&seed_tracks=5hVjoL3sHepZROri63wBxP")
    //     .then(res => setRecs(res.data.tracks))
    // }

    // function createPlaylist(){
    //     APIKit.post("users/pedromarcello/playlists",{
    //         "name":"testyyyyy"
    //     })
    //     .then(newPlaylist => {
    //         setPlaylistID(newPlaylist.data.id)
    //         setPlaylists([...playlists, newPlaylist.data])
    // })
    // }


        // <form onSubmit = {handleSubmit}>
    //     <select name="playlists" id="playlist-select">
    //         <option value = "">Select a Playlist to edit</option>
    //         {playlists.map(playlist => <option value = {playlist.id} key = {playlist.id}>{playlist.name}</option>)}
    //     </select>
    //     <button type = "submit">Add Recs</button>
    // </form>
