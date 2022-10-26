import "./Navbar.scss";

import React from "react";
import { images } from "../../constant";

const Navbar = () => {
  return (
    <div>
      <nav className="app_navbar">
        <div className="app_navbar-logo">
          <img src={images.logo} alt="" />
        </div>

        <ul className="app_navbar-link">
          {["Home", "About", "Work", "Skills", "Contact"].map((item) => (
            <li className="app_flex p-text" key={`link-${item}`}>
              <div></div>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
