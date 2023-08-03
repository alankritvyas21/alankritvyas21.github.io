import React from "react";
import "../assets/css/about.css";
import AboutImg from "../assets/images/IMG_4035.png";
import Resume from "../assets/Alankrit Vyas Resume.pdf"

const About = () => {
  const handleDownload = () => {
    const pdfUrl = Resume;

    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.target = "_blank";
    anchor.download = "Alankrit Vyas Resume";

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">Introduction</span>

        <div className="about__container container grid">
          <img src={AboutImg} alt="" className="about__img" />

          <div className="about__data">
            <div className="about__info grid">
              <div className="about__box">
                <i class="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">6 months</span>
              </div>

              <div className="about__box">
                <i class="bx bx-list-check  about__icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">4 Projects</span>
              </div>

              <div className="about__box">
                <i class="bx bx-award about__icon"></i>
                <h3 className="about__title">Certifications</h3>
                <span className="about__subtitle">20+</span>
              </div>
            </div>

            <p className="about__description">
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

            <button onClick={handleDownload} className="button button--flex">
              Download CV
              <i className="uil uil-download-alt button__icon"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
