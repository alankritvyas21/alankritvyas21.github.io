import React from "react";
import "../assets/css/resume.css"; 
// import { useTheme } from "../assets/js/themeContext";

const Resume2 = () => {
  // const { darkMode } = useTheme();
  return (
    <>
      <section className="skills section" id="resume">
      <h2 className="section__title">Resume</h2>
      <span className="section__subtitle"></span>

      <div className="resume__container container grid">
        <div className="resume__column">

          <h3 className="resume__title">Education</h3>
          <div className="resume__item" data-aos="fade-up" data-aos-delay="300">
            <h4 className="title">2019 - 2023</h4>
            <div className="resume__inner__data">
              <h4>Graduation</h4>
              <p><em>Manipal University Jaipur</em></p>
              <p>B.Tech (Computer and Communication Engineering)</p>
              <p>C.G.P.A: 8.24</p>
            </div>
          </div>
          <div className="resume__item" data-aos="fade-up" data-aos-delay="300">
          <h4 className="title">2017 - 2019</h4>
            <div className="resume__inner__data">
              <h4>H.S.C</h4>
              <p><em>New Horizon Scholars School</em></p>
              <p>Grade: 12th (CBSE Board)</p>
              <p>Secured: 75.4%</p>
            </div>
          </div>
          <div className="resume__item" data-aos="fade-up" data-aos-delay="300">
          <h4 className="title">2005 - 2017</h4>
            <div className="resume__inner__data">
              <h4>S.S.C</h4>
              <p><em>Smt. Sulochanadevi Singhania School</em></p>
              <p>Grade: 10th (ICSE Board)</p>
              <p>Secured: 87.5%</p>
            </div>
          </div>
        </div>
        <div className="resume__column">
          <h3 className="resume__title">Professional Experience</h3>
          <div className="resume__item" data-aos="fade-up" data-aos-delay="300">
            <h4 className="title">Oct 2023 - Present</h4>
            <div className="resume__inner__data">
              <h4>Jr. Software Engineer</h4>
              <p><em>Dusane Infotech India Pvt Ltd.</em></p>
              <p className="tech">Tech Stack: </p>
              <ul>
                <li>HTML, CSS and JavaScript</li>
                <li>Angular JS</li>
                <li>React JS</li>
                <li>Java Server Faces (JSF)</li>
                <li>Enact JS</li>
              </ul>
              {/* <p className="projects">Projects: </p>
              <ul>
                <li>B2Tech</li>
                <li>Chop Lotto</li>
                <li>WiMed</li>
                <li>MovieBeam</li>
              </ul> */}
            </div>
          </div>
          <div className="resume__item" data-aos="fade-up" data-aos-delay="300">
            <h4 className="title">Jan 2023 - July 2023</h4>
            <div className="resume__inner__data">
              <h4>Web Development Intern</h4>
              <p><em>Rawattech Consulting and Solutions Private Ltd.</em></p>
              <p className="tech">Tech Stack: </p>
              <ul>
                <li>HTML, CSS and JavaScript</li>
                <li>React JS</li>
              </ul>
              {/* <p className="projects">Projects: </p>
              <ul>
                <li>Saarthi</li>
                <li>OCR Website</li>
                <li>Project Portfolio</li>
                <li>Emotion Detector</li>
              </ul> */}
            </div>
          </div>
          <div className="resume__item" data-aos="fade-up" data-aos-delay="300">
            <h4 className="title">Aug 2021 - Sep 2021</h4>
            <div className="resume__inner__data">
              <h4>Web Development Intern</h4>
              <p><em>The Sparks Foundation</em></p>
              <p className="tech">Tech Stack: </p>
              <ul>
                <li>HTML, CSS and JavaScript</li>
              </ul>
              {/* <p className="projects">Projects: </p>
              <ul>
                <li>Basic Banking Website</li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Resume2;
