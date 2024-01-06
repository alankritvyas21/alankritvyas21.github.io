import React from "react";
import "../assets/css/projects.css";
import { projectsData } from "./ProjectData";

const Projects = () => {
  return (
    <>
      <section className="projects section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Top Projects</span>

        <div className="projects__container container grid">
          {projectsData.map((project) => {
            return (
              <div className="projects__card">
                <div className="projects__content">
                  <img src={project.image} alt="" className="projects__img" />
                  <div className="projects__data">
                    <h3 className="projects__title">{project.title}</h3>
                    {project.id !== 1 && (
                      <a
                        href={project.link}
                        className="projects__button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                        <i className="bx bx-right-arrow-alt projects__button"></i>
                      </a>
                    )}
                    {project.id === 1 && (
                      <div className="projects__button">Coming Soon</div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
