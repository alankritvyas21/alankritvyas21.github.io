import React, { useState } from "react";
import "../assets/css/header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Alankrit Vyas
        </a>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className="nav__link active-link"
                onClick={() => {
                  setToggle(false);
                }}
              >
                <i className="uil uil-estate nav__icons"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className="nav__link active-link"
                onClick={() => {
                  setToggle(false);
                }}
              >
                <i className="uil uil-user nav__icons"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#resume"
                className="nav__link active-link"
                onClick={() => {
                  setToggle(false);
                }}
              >
                <i className="uil uil-file-alt nav__icons"></i>Resume
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#projects"
                className="nav__link active-link"
                onClick={() => {
                  setToggle(false);
                }}
              >
                <i className="uil uil-scenery nav__icons"></i>Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className="nav__link active-link"
                onClick={() => {
                  setToggle(false);
                }}
              >
                <i className="uil uil-message nav__icons"></i>Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
