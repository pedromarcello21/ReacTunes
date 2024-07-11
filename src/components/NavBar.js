import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" id ="logo">
        ReacTunes
      </NavLink>
      <NavLink to="/">
        Playlists
      </NavLink>
      <NavLink to ="/recommendation">
        Explore
      </NavLink>
      <NavLink to="/album-artwork">
        Edit Playlist Artwork
      </NavLink>
    
    </nav>
    );
};

export default NavBar;