import React from "react";
import "../assets/css/projects.css";
import { projectsData } from "./ProjectData";
// import { useTheme } from "../assets/js/themeContext";

const Projects = () => {
  // const { darkMode } = useTheme();
  return (
    <>
      <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Top Projects</span>

      <div className="projects__container container grid">
      {projectsData.map((project) => {
            return (
              <>
              <div className="projects__card"  data-aos="fade-up" data-aos-delay="300">
                <div className="projects__content">
                  <img src={project.image} alt="" className="projects__img" />
                  <div className="projects__data">
                    <h3 className="projects__title">{project.title}</h3>
                    {project.id !== 1 && (
                      <button className="button">Demo</button> 
                    )}
                    {project.id === 1 && (
                     <button className="button" disabled>Coming Soon</button> 
                    )}
                  </div>
                </div>
              </div>
              </>
            )})}
      </div>
    </section>
    </>
  );
};

export default Projects;
