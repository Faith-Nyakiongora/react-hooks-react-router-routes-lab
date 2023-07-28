import React from "react";
import { NavLink } from "react-router-dom";

const navLinkStyle = {
  padding: "5px 10px",
  color: "black",
};

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" style={navLinkStyle}>
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
