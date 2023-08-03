import React from "react";
import "../assets/css/resume.css"; // Make sure to update the path to your CSS file

const Resume2 = () => {
  return (
    <>
      <section className="skills section" id="resume">
        <h2 className="section__title">Resume</h2>
        <span className="section__subtitle">Summary</span>

        <div className="resume__container container grid">
          <div className="resume__column">
            <div className="resume__item">
              <h4>Alankrit Vyas</h4>
              <p>
                <em>Web Developer and UI/UX designer</em>
              </p>

              <a href="mailto:av3h.vyas@gmail.com">
                <p>av3h.vyas@gmail.com</p>
              </a>
            </div>

            <h3 className="resume__title">Education</h3>
            <div className="resume__item">
              <h4>Graduation</h4>
              <h5>2019 - 2023</h5>
              <p>
                <em>Manipal University Jaipur</em>
              </p>
              <p>B.Tech (Computer and Communication Engineering)</p>
              <p>C.G.P.A: 8.24</p>
            </div>
            <div className="resume__item">
              <h4>H.S.C</h4>
              <h5>2017 - 2019</h5>
              <p>
                <em>New Horizon Scholars School</em>
              </p>
              <p>Class: 12th (CBSE Board)</p>
              <p>Secured: 75.4%</p>
            </div>
            <div className="resume__item">
              <h4>S.S.C</h4>
              <h5>2005 - 2017</h5>
              <p>
                <em>Smt. Sulochanadevi Singhania School</em>
              </p>
              <p>Class: 10th (ICSE Board)</p>
              <p>Secured: 87.5%</p>
            </div>
          </div>
          <div className="resume__column">
            <h3 className="resume__title">Professional Experience</h3>
            <div className="resume__item">
              <h4>Web Development Intern</h4>
              <h5>Jan 2023 - July 2023</h5>
              <p>
                <em>Rawattech Consulting and Solutions Private Ltd.</em>
              </p>
              <p>MERN Stack Developer</p>
            </div>
            <div className="resume__item">
              <h4>Web Development Intern</h4>
              <h5>Aug 2021 - Sep 2021</h5>
              <p>
                <em>The Sparks Foundation</em>
              </p>
              <p>Basic Banking Website</p>
            </div>
            <h3 className="resume__title">Activities</h3>
            <div className="resume__item">
              <h4>Treasurer</h4>
              <h5>May 2021 - May 2022</h5>
              <p>
                <em>
                  Litmus: The Writing, Debating and MUN society of Manipal
                  University
                </em>
              </p>
            </div>
            <div className="resume__item">
              <h4>Treasurer</h4>
              <h5>Jan 2022 - July 2022</h5>
              <p>
                <em>
                  Panacea: The Computer and Communication Engineering Club
                </em>
              </p>
            </div>
            <div className="resume__item">
              <h4>Finance and Registration Team</h4>
              <p>
                <em>Cultural Night - Team Lead</em>
              </p>
              <p>
                <em>MUJMUN 7.0</em>
              </p>
              <p>
                <em>TedX MUJ</em>
              </p>
              <p>
                <em>E-Conclave</em>
              </p>
              <p>
                <em>Under 25</em>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume2;
