import React from "react";
import "./Nav.scss";

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
        <a href="/">Home</a>
        <a  href="/giphy" style={{ marginLeft: "10px" }}>Giphy</a>
        <a  href="/readme" style={{ marginLeft: "10px" }}>ReadMe</a>
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
