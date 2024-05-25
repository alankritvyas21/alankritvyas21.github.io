import React from "react";
import "../assets/css/footer.css";
// import { useTheme } from "../assets/js/themeContext";

const Footer = () => {
  // const { darkMode } = useTheme();
  return (
    <>
      <footer className="footer" data-aos="fade-up" data-aos-delay="300">
        <div className="footer__container container" data-aos="fade-up" data-aos-delay="500">
          <h1 className="footer__title">Alankrit Vyas</h1>

          <ul className="footer__list" data-aos="fade-up" data-aos-delay="500">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#resume" className="footer__link">
                Resume
              </a>
            </li>
            <li>
              <a href="#projects" className="footer__link">
                Projects
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a
              href="https://bento.me/alankritvyas"
              className="bento"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-user-circle"></i>
            </a>

            <a
              href="mailto:av3h.vyas@gmail.com"
              className="email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-envelope-alt"></i>
            </a>

            <a
              href="https://www.instagram.com/alankritvyas/"
              className="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-instagram"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/alankrit-vyas-667063190/"
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-linkedin"></i>
            </a>

            <a
              href="https://github.com/alankritvyas21"
              className="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-github"></i>
            </a>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
