import React from "react";
import "../assets/css/home.css";
// import { useTheme } from "../assets/js/themeContext";
import mainImg from "../assets/images/Conov2.jpg";


const Home = () => {
  // const { darkMode } = useTheme();
  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__img">
              <img src={mainImg} data-aos="fade-left" data-aos-delay="300" alt="" className="home__img" />
            </div>
            <div className="container_mouse" data-aos="fade-right" data-aos-delay="300">
            <span className="mouse-btn">
              <span className="mouse-scroll"></span>
            </span>
            <span>Scroll</span>
          </div>

            <div className="home__data" data-aos="fade-up" data-aos-delay="300">
              <h1 className="home__title">Alankrit Vyas</h1>
              <h3 className="home__subtitle">
                Web Developer and UI/UX Designer
              </h3>
              <p className="home__description">
                Jr. Software Engineer at Dusane Infotech India Pvt Ltd
              </p>

              <div class="home__social"  data-aos="fade-up" data-aos-delay="500">
              <a
                href="https://bento.me/alankritvyas"
                class="bento"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="uil uil-user-circle"></i>
              </a>

              <a
                href="mailto:av3h.vyas@gmail.com"
                class="email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="uil uil-envelope-alt"></i>
              </a>

              <a
                href="https://www.instagram.com/alankritvyas/"
                class="instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="uil uil-instagram"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/alankrit-vyas-667063190/"
                class="linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="uil uil-linkedin"></i>
              </a>

              <a
                href="https://github.com/alankritvyas21"
                class="github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="uil uil-github"></i>
              </a>
            </div>

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
