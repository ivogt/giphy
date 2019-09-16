import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink  to="/photos" style={{ marginLeft: "10px" }}>Photos</NavLink>
        <NavLink  to="/another-photos" style={{ marginLeft: "10px" }}>Another Photos</NavLink>
      </li>

    </ul>
  </nav>
);

export default Nav;
