import React, { useState, useEffect } from 'react';
import { setClientToken, loginEndpoint } from '../spotify';
import Login from './auth/Login';
// import Click from "./Click"
import Playlists from "./Playlists"
// import Explore from "./Explore"
import APIKit from "../spotify";
// import Recommendation from '../../archive/Recommendation';
import PlaylistArtwork from './PlaylistArtwork';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Error from "./Error"
import Playback from './Playback';

export default function Home() {

    ////Token ish
    const [token, setToken] = useState("");

    useEffect(() => {
        const hash = window.location.hash;
        let token = null;

        if (hash) {
            token = hash.split("&")[0].split("=")[1];
            console.log("Token obtained from URL hash:", token);
        }

        if (token) {
            setToken(token);
            setClientToken(token);
            console.log("Token set in state and API client:", token);
            console.log(token)
        } else {
            console.log("No token found, redirecting to login...");
            window.location.href = loginEndpoint;
        }
    }, []);


        ///Playback Ish
        const [playback, setPlayback] = useState("")
        const [playlists, setPlaylists] = useState([])

        const [updatedPlaylist, setUpdatedPlaylist] = useState(null);
        const [updatedImage, setUpdatedImage] = useState(null)

        const [base64Image, setBase64Image] = useState("");

        useEffect(()=>{
          APIKit.get("me/playlists")
          .then(response => {
            console.log(response.data.items)
            const validPlaylists = response.data.items.filter( (playlist)  => playlist && playlist.images && playlist.images.length > 0);
            setPlaylists(validPlaylists)
            
          })
        }, [updatedPlaylist, updatedImage])
    
        //Dark mode config
    
        // const [darkMode, setDarkMode] = useState(0)
    
        // const handleDarkMode = (e) =>{
        //     e.preventDefault()
        //     darkMode === 0 ? setDarkMode(1) : setDarkMode(0)
        // }
    
        ///end of dark mode config
        
        ///genre search
        // const [genres, setGenres] = useState([]);
        // useEffect(()=>{
        //     APIKit.get("/recommendations/available-genre-seeds")
        //     .then(res => setGenres(res))
        // }, [])

        // console.log(genres.data.genres)



    return token ? (
        <Router>
            <NavBar />
            <Routes>
            {<Route path='/' element={<Playlists playlists = {playlists} setPlaylists = {setPlaylists} playback = {playback} setPlayback = {setPlayback} />} /> }
            {/* <Route path='/recommendation' element={<Recommendation playlists= {playlists} setPlaylists = {setPlaylists} updatedPlaylist = {updatedPlaylist} setUpdatedPlaylist = {setUpdatedPlaylist}/>} /> */}
            <Route path = '/album-artwork' element ={<PlaylistArtwork playlists = {playlists} setPlaylists={setPlaylists} updatedPlaylist = {updatedPlaylist} setUpdatedPlaylist = {setUpdatedPlaylist} base64Image={base64Image} setBase64Image={setBase64Image} setUpdatedImage = {setUpdatedImage}/>}/>
            <Route path='*' element={<Error />} />
            </Routes>
            <Playback playback = {playback}/>
        </Router>
    ) : (
        <Login />
    );
}

    /////end of Token ish

    // //Dark mode config

    // const [darkMode, setDarkMode] = useState(0)

    // const handleDarkMode = (e) =>{
    //     e.preventDefault()
    //     darkMode === 0 ? setDarkMode(1) : setDarkMode(0)
    // }

    // ///end of dark mode config

    // ///Playback Ish
    // const [playback, setPlayback] = useState("")
    
    // const [playlists, setPlaylists] = useState([])

    // useEffect(()=>{
    //   APIKit.get("me/playlists")
    //   .then(response => {
    //     setPlaylists(response.data.items)
    //   })
    // }, [])

    // //Explore - get recs




// {/* <Playlists setPlayback = {setPlayback} playlists = {playlists}/>
// <Click handleClick = {handleDarkMode}/>
// <iframe
// title="Spotify Embed"
// src={`https://open.spotify.com/embed/playlist/${playback ? playback : "4sxxq1RvtsxBubRh4KcHQN"}?utm_source=generator&theme=${darkMode}`}
// width="80%"
// height="100%"
// style={{ minHeight: '360px' }}
// frameBorder="0"
// allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
// loading="lazy"
// />
// {/* <Explore playlists = {playlists} setPlaylists = {setPlaylists} playback = {playback}/> */}
////<Recommendation playlists = {playlists} setPlaylists = {setPlaylists}/> 
