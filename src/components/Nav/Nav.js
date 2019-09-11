import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
const links = [
  { href: "https://www.linkedin.com/in/ivogtodorov/", label: "Ivo Todorov" },
  { href: "https://github.com/ivogt/showcase-react", label: "GitHub" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
        <Link  to="/photos" style={{ marginLeft: "10px" }}>Photos</Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href} target="_blank">
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
