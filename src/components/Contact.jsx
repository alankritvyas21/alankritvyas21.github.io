import React, { useState } from "react";
import "../assets/css/contact.css";
// import ContactImg from "../assets/images/Contact.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../assets/js/contact";
// import { useTheme } from "../assets/js/themeContext";

const Contact = () => {
  // const { darkMode } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const userData = collection(db, "userData");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return;
    }

    try {
      await addDoc(userData, {
        Firstname: name,
        Email: email,
        Subject: subject,
        Message: message,
      });

      toast.success("Message Sent Successfully");
      document.getElementById("myForm").reset();
    } catch (error) {
      toast.error("Message Not Sent");
    }
  };

  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section__title">Contact Me</h2>
        <span className="section__subtitle">Get in Touch</span>

        <div className="contact__container container grid">
          <div className="contact_content">
            <div className="contact__info">
              <div className="contact_cards grid">
                <div
                  className="contact__box"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <div className="notiglow"></div>
                  <i className="uil uil-envelope contact__icon"></i>
                  <h3 className="contact__title">Email</h3>
                  <span className="contact__subtitle">av3h.vyas@gmail.com</span>
                </div>

                <div
                  className="contact__box"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <div className="notiglow"></div>
                  <i className="uil uil-map contact__icon"></i>
                  <h3 className="contact__title">Location</h3>
                  <span className="contact__subtitle">Thane</span>
                </div>

                <div
                  className="contact__box"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <div className="notiglow"></div>
                  <i className="uil uil-linkedin contact__icon"></i>
                  <h3 className="contact__title">LinkedIn</h3>
                  <span className="contact__subtitle">Alankrit Vyas</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact_content">
            <h3 className="contact__title">Write Me a message</h3>

            <form className="contact__form" id="myForm">
              <div
                className="contact__form-div"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <label className="contact__form-tag">Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="contact__form-input"
                  placeholder="Enter Your Name"
                />
              </div>

              <div
                className="contact__form-div"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <label className="contact__form-tag">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="contact__form-input"
                  placeholder="Enter Your Email"
                />
              </div>

              <div
                className="contact__form-div"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <label className="contact__form-tag">Subject</label>
                <input
                  type="text"
                  name="subject"
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  className="contact__form-input"
                  placeholder="Enter Your Subject"
                />
              </div>

              <div
                className="contact__form-div contact__form-area"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <label className="contact__form-tag">Message</label>
                <textarea
                  name="message"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  className="contact__form-input"
                  placeholder="Enter Your Message"
                  cols="30"
                  rows="10"
                />
              </div>

              <button
                className="button button--flex contact__button"
                data-aos="fade-up"
                data-aos-delay="300"
                id="sendMessage"
                type="submit"
                onClick={handleSubmit}
                disabled={!name || !email || !subject || !message}
              >
                Send Message
                <i className="uil uil-message contact__icons"></i>
              </button>
            </form>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </section>
    </>
  );
};

export default Contact;
