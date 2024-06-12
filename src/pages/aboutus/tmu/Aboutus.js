import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import Aboutimg from "../../../assets/tmucu/home/hm2.JPG";
import constitution from "../../../assets/constitution/tmucu constitution.pdf";
import "./Aboutus.css";

function AboutUs() {
  return (
    <div>
      <Header />
      <section>
        {/* Main Content */}
        <section className="section-with-image">
          <div className="background-image"></div>
          <h1>About TMUCU</h1>
        </section>

        {/* Footer */}
        <section className="about-us">
          <Container>
            <Row>
              <Col md={6} className="about-col">
                <h1>Tom Mboya University Christian Union</h1>
                <p>
                  We the Tom Mboya University Christian Union being; a body of
                  Christian students in Tom Mboya University bound together by
                  faith in God the father, son, and the Holy Spirit. Seeking to
                  live according to the holy word of God (The BIBLE), exclusively
                  nondenominational, non-political, non-profit making and
                  non-partisan. Do adopt, enact and submit ourselves and the
                  future Tom Mboya University College Christian Union generations
                  to this constitution. By this constitution, we declare that no
                  provision in this constitution is intended to contravene,
                  defeat, or contradict in any manner the Holy word of God (The
                  BIBLE). Any such provision shall to the extent of contravention,
                  defeat, or contradiction have no effect
                </p>
                <Button href={constitution} className="hero-btn red-btn">
                  EXPLORE NOW
                </Button>
              </Col>
              <Col md={6} className="about-col">
                <img src={Aboutimg} alt="Library" />
              </Col>
            </Row>
          </Container>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default AboutUs;
