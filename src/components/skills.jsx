import React from "react";
import "../assets/css/skills.css";
import HTML from "../assets/images/html.png";
import CSS from "../assets/images/css.png";
import JS from "../assets/images/js.png";
import REACT from "../assets/images/react.png";
import ANGULAR from "../assets/images/angular.png";
import Git from "../assets/images/git.png";
import BOOTSTRAP from "../assets/images/bootstrap.png";
import ENACT from "../assets/images/enact.png";
import FIREBASE from "../assets/images/firebase.png";
import SCSS from "../assets/images/scss.png";

const skillsData = [
  { img: HTML, alt: "HTML", progress: 75},
  { img: CSS, alt: "CSS", progress: 90},
  { img: SCSS, alt: "SASS", progress: 70},
  { img: BOOTSTRAP, alt: "BOOTSTRAP", progress: 90},
  { img: JS, alt: "JavaScript", progress: 60},
  { img: REACT, alt: "React", progress: 80},
  { img: ANGULAR, alt: "Angular", progress: 70},
  { img: Git, alt: "Git", progress: 60},
  { img: ENACT, alt: "Enact", progress: 50},
  { img: FIREBASE, alt: "Firebase", progress: 75},
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle"></span>

      <div className="skills_container container grid">
        {skillsData.map((skill, index) => (
          <div
            className="skills_data"
            key={index}
            style={{
              "--progress": skill.progress
            }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="circle">
              <img src={skill.img} alt={skill.alt} />
            </div>
            <div className="skills__name">{skill.alt}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
