import React from "react";
import "../assets/css/home.css";
import { useTheme } from "../assets/js/themeContext";

const Home = () => {
  const { darkMode } = useTheme();
  return (
    <>
      <section className={`home section ${darkMode ? "dark-mode" : ""}`} id="home">
        <div className={`home__container container grid ${darkMode ? "dark-mode" : ""}`}>
          <div className="home__content grid">
            <div className="home__img"></div>
            <div className="home__social">
              <a
                href="https://bento.me/alankritvyas"
                className="home__social-icons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-user-circle"></i>
              </a>

              <a
                href="mailto:av3h.vyas@gmail.com"
                className="home__social-icons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-envelope-alt"></i>
              </a>

              <a
                href="https://www.instagram.com/alankritvyas/"
                className="home__social-icons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-instagram"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/alankrit-vyas-667063190/"
                className="home__social-icons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-linkedin"></i>
              </a>

              <a
                href="https://github.com/alankritvyas21"
                className="home__social-icons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-github"></i>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100007428494855"
                className="home__social-icons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-facebook"></i>
              </a>
            </div>

            <div className="home__data">
              <h1 className="home__title">Alankrit Vyas</h1>
              <h3 className="home__subtitle">
                Web Developer and UI/UX Designer
              </h3>
              <p className="home__description">
                Jr. Software Engineer at Dusane Infotech India Pvt Ltd
              </p>

              <a href="#contact" className="button button--flex">
                Say Hello <i className="uil uil-message home__icons"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
