import React from "react";
import "../assets/css/about.css";
import AboutImg from "../assets/images/IMG_4035.png";
import Resume from "../assets/Alankrit Vyas Resume.pdf";
// import { useTheme } from "../assets/js/themeContext";
// import qrcode from "../assets/images/CV QR.png";

const About = () => {
  // const { darkMode } = useTheme();
  // const [progress, setProgress] = useState(0);
  // const [downloading, setDownloading] = useState(false);

  // const handleDownload = () => {
  //   setDownloading(true);
  //   setProgress(0);

  //   const downloadInterval = setInterval(() => {
  //     setProgress((prevProgress) => {
  //       if (prevProgress >= 100) {
  //         clearInterval(downloadInterval);
  //         setTimeout(() => {
  //           setDownloading(false);
  //           startFileDownload();
  //           setProgress(0);
  //         }, 500);
  //         return 0;
  //       }
  //       return prevProgress + 10;
  //     });
  //   }, 500);
  // };

  const startFileDownload = () => {
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
                <span className="about__subtitle">1 Year</span>
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
              <button
                className="button button--flex"
                id="downloadBtn"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <span className="button__text" onClick={startFileDownload}>
                  Download CV
                </span>
                <i className="uil uil-download-alt button__icon"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
