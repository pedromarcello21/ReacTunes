import React from 'react'
import './SearchBar.css'

export default function SearchBar({setSearchPlaylist}) {

    const handleInput = e =>{
        setSearchPlaylist(e.target.value)
    }
  return (
    <input className='searchbar' onChange={handleInput} placeholder='Search playlist...'/>
  )
}
