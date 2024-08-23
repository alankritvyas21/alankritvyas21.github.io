import React from "react";
import "../assets/css/resume.css"; 
// import { useTheme } from "../assets/js/themeContext";

const Resume2 = () => {
  // const { darkMode } = useTheme();
  return (
    <>
      <section className="skills section" id="resume">
      <h2 className="section__title">Resume</h2>
      <span className="section__subtitle">Summary</span>

      <div className="resume__container container grid">
        <div className="resume__column">

          <h3 className="resume__title">Education</h3>
          <div className="resume__item" data-aos="fade-up" data-aos-delay="300">
            <div className="resume__inner__data">
              <h4>Graduation</h4>
              <h5>2019 - 2023</h5>
              <p><em>Manipal University Jaipur</em></p>
              <p>B.Tech (Computer and Communication Engineering)</p>
              <p>C.G.P.A: 8.24</p>
            </div>
          </div>
          <div className="resume__item" data-aos="fade-up" data-aos-delay="300">
            <div className="resume__inner__data">
              <h4>H.S.C</h4>
              <h5>2017 - 2019</h5>
              <p><em>New Horizon Scholars School</em></p>
              <p>className: 12th (CBSE Board)</p>
              <p>Secured: 75.4%</p>
            </div>
          </div>
          <div className="resume__item" data-aos="fade-up" data-aos-delay="300">
            <div className="resume__inner__data">
              <h4>S.S.C</h4>
              <h5>2005 - 2017</h5>
              <p><em>Smt. Sulochanadevi Singhania School</em></p>
              <p>className: 10th (ICSE Board)</p>
              <p>Secured: 87.5%</p>
            </div>
          </div>
        </div>
        <div className="resume__column">
          <h3 className="resume__title">Professional Experience</h3>
          <div className="resume__item" data-aos="fade-up" data-aos-delay="300">
            <div className="resume__inner__data">
              <h4>Jr. Software Engineer</h4>
              <h5>Oct 2023 - Present</h5>
              <p><em>Dusane Infotech India Pvt Ltd.</em></p>
              <p>Front-End Developer</p>
              <p>Angular Developer</p>
              <p>React and Enact Developer</p>
            </div>
          </div>
          <div className="resume__item" data-aos="fade-up" data-aos-delay="300">
            <div className="resume__inner__data">
              <h4>Web Development Intern</h4>
              <h5>Jan 2023 - July 2023</h5>
              <p><em>Rawattech Consulting and Solutions Private Ltd.</em></p>
              <p>Front-End Developer</p>
              <p>MERN Stack Developer</p>
            </div>
          </div>
          <div className="resume__item" data-aos="fade-up" data-aos-delay="300">
            <div className="resume__inner__data">
              <h4>Web Development Intern</h4>
              <h5>Aug 2021 - Sep 2021</h5>
              <p><em>The Sparks Foundation</em></p>
              <p>Front-End Developer</p>
              <p>Basic Banking Website</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Resume2;
