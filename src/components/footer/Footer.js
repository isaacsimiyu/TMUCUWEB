import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faMapMarker,
  faPhone,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/images/tmulogo.jpg";
import Playstore from "../../assets/pay/play.jpg";
import appstore from "../../assets/pay/app.jpg";
import "./Footer.css"; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <Container>
        <Row>
          <Col md={3} sm={6} xs={12} className="footer-col">
            <div className="footer-logo">
              <img src={logo} alt="Company Logo" />
            </div>
            <div className="footer-contact">
              <h4>Contact</h4>
              <p>
                <strong>
                  <FontAwesomeIcon icon={faMapMarker} />
                </strong>{" "}
                Homa Bay Town
              </p>
              <p>
                <strong>
                  <FontAwesomeIcon icon={faPhone} />
                </strong>{" "}
                +254 742 902 332
              </p>
              <p>
                <strong>
                  <FontAwesomeIcon icon={faBriefcase} />
                </strong>{" "}
                tommboyaunicu@gmail.com
              </p>
              <p>
                <strong>
                  <FontAwesomeIcon icon={faClock} />
                </strong>{" "}
                10:00 AM - 6:00 PM, Mon - Sat
              </p>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12} className="footer-col">
            <h4>Sunday Services</h4>
            <p>
              <strong>Morning Devotion:</strong>{" "}
              <FontAwesomeIcon icon={faClock} /> 5:50 AM - 6:50 AM
            </p>
            <p>
              <strong>1st Service:</strong> <FontAwesomeIcon icon={faClock} />{" "}
              6:50 AM - 9:15 AM
            </p>
            <p>
              <strong>2nd Service:</strong> <FontAwesomeIcon icon={faClock} />{" "}
              9:15 AM - 11:30 AM
            </p>
          
          </Col>

          <Col md={3} sm={6} xs={12} className="footer-col">
            <h4>Mid Week Services</h4>
            <p>
              <strong>Mon:</strong> Esters and Jacobs,{" "}
              <FontAwesomeIcon icon={faClock} /> 6:00 PM - 7:00 PM
            </p>
            <p>
              <strong>Tue:</strong> Prayer and Fasting,{" "}
              <FontAwesomeIcon icon={faClock} /> 6:00 PM - 7:00 PM
            </p>
            <p>
              <strong>Wed:</strong> Discipleship,{" "}
              <FontAwesomeIcon icon={faClock} /> 6:00 PM - 7:00 PM
            </p>
            <p>
              <strong>Thurs:</strong> Class Fellowship,{" "}
              <FontAwesomeIcon icon={faClock} /> 6:00 PM - 7:00 PM
            </p>
            <p>
              <strong>Fri:</strong> Mini Service,{" "}
              <FontAwesomeIcon icon={faClock} /> 6:00 PM - 7:30 PM
            </p>
            <p>
              <strong>Sat:</strong> Various trainings,{" "}
              <FontAwesomeIcon icon={faClock} /> 9:00 AM - 6:00 PM
            </p>
          </Col>

          <Col md={3} sm={6} xs={12} className="footer-col">
            <div className="footer-install-app">
              <h4>Install App</h4>
              <p>Available on Google Play and App Store</p>
              <div className="footer-store-images">
                <img src={Playstore} alt="Google Play Store" />
                <img src={appstore} alt="Apple App Store" />
              </div>
            </div>
            <div className="footer-follow">
              <h4>Follow Us</h4>
              <div className="footer-icon-container">
                <a href="https://youtube.com/@tommboyaunichristianunion?si=8YQusBSS9lqwo5vE">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://instagram.com/tmu_cu?igshid=MzRlODBiNWFlZA==">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.tiktok.com/@tmucu?_t=8gpq3ehzDok&_r=1">
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
                <a href="https://youtube.com/@tommboyaunichristianunion?si=8YQusBSS9lqwo5vE">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <p>
          &copy; 2023, TMUCCU. Developed by TMUCCU Media Team, Powered by the
          Grace of God.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
