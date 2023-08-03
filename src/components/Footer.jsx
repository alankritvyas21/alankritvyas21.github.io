import React from "react";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">Alankrit Vyas</h1>

          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="footer__link">
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
            <a href="mailto:av3h.vyas@gmail.com" className="footer__social-link" target="_blank" rel="noopener noreferrer">
              <i className="uil uil-google"></i>
            </a>

            <a
              href="https://www.instagram.com/i_alanvyas/"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-instagram"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/alankrit-vyas-667063190/"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-linkedin"></i>
            </a>

            <a
              href="https://github.com/alankritvyas21"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-github"></i>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100007428494855"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-facebook"></i>
            </a>

            <a
              href="https://twitter.com/AlankritVyas"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
