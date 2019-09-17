import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink  to="/gifs" style={{ marginLeft: "10px" }}>Gifs</NavLink>
        <NavLink  to="/other-gifs" style={{ marginLeft: "10px" }}>Other Gifs</NavLink>
      </li>

    </ul>
  </nav>
);

export default Nav;
