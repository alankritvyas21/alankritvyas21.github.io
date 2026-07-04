import React from "react";
import "../assets/css/skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle"></span>

      <div className="skills_container container grid">
        <div className="skills__progressbar">
          <div class="progressBar" data-aos="fade-up"
                data-aos-delay="300">
            <h4>HTML5</h4>
            <div class="progressBarContainer">
              <div class="progressBarValue value-90"></div>
              <div className="progressBarValueData">90%</div>
            </div>
          </div>
          <div class="progressBar" data-aos="fade-up"
                data-aos-delay="300">
            <h4>CSS and SCSS</h4>
            <div class="progressBarContainer">
              <div class="progressBarValue value-90"></div>
              <div className="progressBarValueData">90%</div>
            </div>
          </div>
          <div class="progressBar" data-aos="fade-up"
                data-aos-delay="300">
            <h4>JavaScript</h4>
            <div class="progressBarContainer">
              <div class="progressBarValue value-60"></div>
              <div className="progressBarValueData">60%</div>
            </div>
          </div>
          <div class="progressBar" data-aos="fade-up"
                data-aos-delay="300">
            <h4>Bootstrap</h4>
            <div class="progressBarContainer">
              <div class="progressBarValue value-80"></div>
              <div className="progressBarValueData">80%</div>
            </div>
          </div>
        </div>
        <div className="skills__progressbar">
          <div class="progressBar" data-aos="fade-up"
                data-aos-delay="300">
            <h4>ReactJS</h4>
            <div class="progressBarContainer">
              <div class="progressBarValue value-60"></div>
              <div className="progressBarValueData">60%</div>
            </div>
          </div>
          <div class="progressBar" data-aos="fade-up"
                data-aos-delay="300">
            <h4>AngularJS</h4>
            <div class="progressBarContainer">
              <div class="progressBarValue value-75"></div>
              <div className="progressBarValueData">75%</div>
            </div>
          </div>
          <div class="progressBar" data-aos="fade-up"
                data-aos-delay="300">
            <h4>Firebase</h4>
            <div class="progressBarContainer">
              <div class="progressBarValue value-60"></div>
              <div className="progressBarValueData">60%</div>
            </div>
          </div>
          <div class="progressBar" data-aos="fade-up"
                data-aos-delay="300">
            <h4>EnactJS</h4>
            <div class="progressBarContainer">
              <div class="progressBarValue value-50"></div>
              <div className="progressBarValueData">50%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
