import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const navLinkStyle = {
    margin: "10px",  // Add margin
    padding: "10px", // Add padding
    textDecoration: "none", // Remove underlines from links
    color: "black" // Set text color to black
  };

  return (
    <div>
      <NavLink exact to="/" style={navLinkStyle}>
        Home
      </NavLink>
      <NavLink to="/movies" style={navLinkStyle}>
        Movies
      </NavLink>
      <NavLink to="/directors" style={navLinkStyle}>
        Directors
      </NavLink>
      <NavLink to="/actors" style={navLinkStyle}>
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;
