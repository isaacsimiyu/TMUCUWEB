import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../../components/header/Header";
import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
  faUser,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../../components/footer/Footer";
import axios from "axios"; // Import Axios

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [nameError, setNameError] = useState("");

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phoneRegex = /^\d{10}$/;
  const USER_REGEX = /^[a-zA-Z\s]+$/;

  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    setName(nameValue);

    if (!USER_REGEX.test(nameValue)) {
      setNameError("Please enter a valid name");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (!emailRegex.test(emailValue)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value;
    setPhone(phoneValue);

    if (!phoneRegex.test(phoneValue)) {
      setPhoneError("Please enter a valid phone number.");
    } else {
      setPhoneError("");
    }
  };

  const handleMessageChange = (e) => {
    const messageValue = e.target.value;
    setMessage(messageValue);

    if (messageValue.trim().length === 0) {
      setMessageError("Please enter a message.");
    } else {
      setMessageError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isFormValid = true;

    if (!USER_REGEX.test(name)) {
      setNameError("Please enter a valid name");
      isFormValid = false;
    } else {
      setNameError("");
    }

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      isFormValid = false;
    } else {
      setEmailError("");
    }

    if (!phoneRegex.test(phone)) {
      setPhoneError("Please enter a valid phone number.");
      isFormValid = false;
    } else {
      setPhoneError("");
    }

    if (message.trim().length === 0) {
      setMessageError("Please enter a message.");
      isFormValid = false;
    } else {
      setMessageError("");
    }

    if (isFormValid) {
      try {
        const response = await axios.post("http://localhost:3500/api/contact", {
          name,
          email,
          phone,
          message,
        });

        if (response.status === 200) {
          // Assuming a successful submission:
          // Clear the form fields and reset error states
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setNameError("");
          setEmailError("");
          setPhoneError("");
          setMessageError("");

          // Optionally, you can show a success message to the user
          alert("Message submitted successfully!");
        } else {
          // Handle errors or display an error message to the user
          alert("Message submission failed.");
        }
      } catch (error) {
        // Handle network errors or server issues
        console.error("Error submitting the form:", error);
        alert("Message submission failed.");
      }
    }
  };

  return (
    <div>
      <Header />
      <section className="section-with-image">
        <div className="background-image"></div>
        <h1>Contact Us</h1>
      </section>
      <section className="map-section">
        <Container>
          <iframe
            title="TMUCU Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6472922435014!2d34.45832297022601!3d-0.5305133982803297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d4d4560903a9c5%3A0xb5c155ec5b42c331!2sTom%20Mboya%20University!5e0!3m2!1sen!2ske!4v1695214595000!5m2!1sen!2ske"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Container>
      </section>
      <section className="contact-section">
        <Container>
          <Row>
            <Col md={6}>
              <div className="find-us">
                <h2>Find Us</h2>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span> Homabay Town</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhone} />
                    <span> +254742902332</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span> tommboyaunicu@gmail.com</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faClock} />
                    <span> Mon-Fri, 9:00 AM - 5:00 PM</span>
                  </li>
                </ul>
              </div>
              <div className="follow-us">
                <h2>Follow Us</h2>
                <ul>
                  <li>
                    <a href="https://youtube.com/@tommboyaunichristianunion?si=8YQusBSS9lqwo5vE">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li>
                  <a href="https://instagram.com/tmu_cu?igshid=MzRlODBiNWFlZA==">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Tmu_cu">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tiktok.com/@tmu_cu">
                      <FontAwesomeIcon icon={faTiktok} />
                    </a>
                  </li>
                  <li>
                  <a href="https://youtube.com/@tommboyaunichristianunion?si=8YQusBSS9lqwo5vE">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="contact-us">
                <h2>Contact Us</h2>
                <p>
                  If you have any questions or inquiries, please feel free to
                  get in touch with us. We'll get back to you as soon as
                  possible.
                </p>
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>
                      <FontAwesomeIcon icon={faUser} />
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={name}
                      onChange={handleNameChange}
                      className={nameError ? "error-input" : ""}
                    />
                    {nameError && <div className="error-text">{nameError}</div>}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </Form.Label>
                    <Form.Control
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={handleEmailChange}
                      className={emailError ? "error-input" : ""}
                    />
                    {emailError && (
                      <div className="error-text">{emailError}</div>
                    )}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      <FontAwesomeIcon icon={faPhone} />
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Your Phone"
                      value={phone}
                      onChange={handlePhoneChange}
                      className={phoneError ? "error-input" : ""}
                    />
                    {phoneError && (
                      <div className="error-text">{phoneError}</div>
                    )}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      <FontAwesomeIcon icon={faComment} />
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Your Message"
                      value={message}
                      onChange={handleMessageChange}
                      className={messageError ? "error-input" : ""}
                    />
                    {messageError && (
                      <div className="error-text">{messageError}</div>
                    )}
                  </Form.Group>
                  <Button className="submit-button" type="submit">
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
