import React from "react";
import "../assets/css/about.css";
import AboutImg from "../assets/images/IMG_4035.png";
import Resume from "../assets/Alankrit Vyas Resume.pdf";
// import { useTheme } from "../assets/js/themeContext";


const About = () => {
  // const { darkMode } = useTheme();

  return (
    <>
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">Introduction</span>

        <div className="about__container container grid">
          <img
            data-aos="fade-right"
            data-aos-delay="300"
            src={AboutImg}
            alt="about"
            className="about__img"
          />

          <div className="about__data">
            <div
              className="about__info grid"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="about__box">
                <div className="notiglow"></div>
                <i className="uil uil-briefcase-alt about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">1.5 Year</span>
              </div>

              <div className="about__box">
                <div className="notiglow"></div>
                <i className="uil uil-book-open about__icon"></i>
                <h3 className="about__title">Education</h3>
                <span className="about__subtitle">Undergraduate</span>
              </div>

              <div className="about__box">
                <div className="notiglow"></div>
                <i className="uil uil-award about__icon"></i>
                <h3 className="about__title">Certifications</h3>
                <span className="about__subtitle">20+</span>
              </div>
            </div>

            <p
              className="about__description"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              I'm passionate about developing intuitive, aesthetically pleasing,
              and user-centered digital experiences as a front-end web developer
              and UI/UX designer. I have developed my knowledge of UI/UX design
              ideas and processes, as well as HTML, CSS, JavaScript, and several
              front-end frameworks and libraries. I am a valuable member of any
              team since I have a sharp eye for detail and a knack for resolving
              design and technical problems. I am committed to providing
              top-notch outcomes, whether I am working on large-scale projects
              or creating tiny, dynamic sites.
            </p>
            <div className="about__download">
                <a href={Resume} class="button button--flex" download="Alankrit Vyas Resume.pdf" id="downloadBtn"
                data-aos="fade-up"
                data-aos-delay="300">
                Download CV  <i className="uil uil-download-alt button__icon"></i>
                </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
