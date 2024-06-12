import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Header from "../../components/header/Header";
import focusKenyaImage from "../../assets/images/focuskenya.jpg";
import commisionimage from "../../assets/images/commision.jpg";
import estersImage from "../../assets/program/midweek/ch1.jpg";
import prayerImage from "../../assets/program/midweek/prayerfasting.jpg";
import discipleshipImage from "../../assets/program/midweek/discipleship.jpg";
import classFellowshipsImage from "../../assets/program/midweek/classfellowship.jpg";
import miniServiceImage from "../../assets/program/midweek/hm2.JPG";
import ezraConferenceImage from "../../assets/images/Ezra.jpg";
import "./Events.css";
import Footer from "../../components/footer/Footer";

const Event = ({ image, title, description }) => {
  return (
    <Col md={4} sm={6} xs={12}>
      <Card style={{ backgroundColor: "white" }}>
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Events = () => {
  const midWeekServices = [
    {
      image: estersImage,
      title: "Monday: Esters and Jacobs",
      description:
        "The Esters and Jacobs Service at Tom Mboya University Christian Union, held every Monday from 6:00 pm to 7:00 pm, offers a special gathering for female and male members to explore faith, personal growth, and gender-specific topics. The Esters Service is dedicated to the ladies, providing a supportive environment for discussions on matters that resonate with women, combining spiritual guidance with practical life insights. Simultaneously, the Jacobs Service caters to the men's spiritual and personal development needs, fostering unity and growth among the male members. Following their separate sessions, both groups come together for a concluding prayer, emphasizing the importance of communal faith and unity in the Christian Union. This weekly event promotes a holistic approach to spirituality and personal development within the Christian community.",
    },
    {
      image: prayerImage,
      title: "Tuesday: Prayer and Fasting",
      description:
        "The Prayer and Fasting Service at Tom Mboya University Christian Union is a dedicated weekly gathering that takes place every Tuesday evening, running from 6:00 pm to 7:00 pm. This service holds a central place in the spiritual life of the Christian Union, as it involves a day-long fast followed by a deeply enriching evening session. Members commit to fasting throughout the day, seeking spiritual renewal and a closer connection with God. In the evening, they gather for a prayerful and reflective service, which typically includes worship, Scripture reading, and communal prayer. This service is a time for members to draw strength from their collective faith and to seek God's guidance and blessings as they break their fast together, making it a significant moment of spiritual rejuvenation and communal bonding within the Christian Union.",
    },
    {
      image: discipleshipImage,
      title: "Wednesday: Discipleship",
      description:
        "The Discipleship Class at Tom Mboya University Christian Union (TMUCU) is a weekly gathering that provides a platform for members to delve into the essential aspects of Christian discipleship. Held every Wednesday from 6:00 pm to 7:00 pm, this class serves as a valuable opportunity for members to deepen their understanding of what it means to be a disciple of Christ. The sessions primarily focus on discipleship topics, offering in-depth discussions, biblical teachings, and practical insights to equip participants in their journey of faith. This class is a place for members to learn, grow, and engage in meaningful conversations that empower them to live out their faith more fully and make a positive impact in their communities. It plays a vital role in nurturing spiritual growth and providing a strong foundation for Christian discipleship within the TMUCU community.",
    },
    {
      image: classFellowshipsImage,
      title: "Thursday: Class Fellowships",
      description:
        "The Thursday Class Fellowship at Tom Mboya University Christian Union is a vibrant weekly gathering that takes place from 6:00 pm to 7:00 pm, providing a unique and tailored experience for each cohort of students, from first-year to fourth-year. During this time, each cohort has its own distinct service, allowing for age-appropriate discussions, worship, and fellowship. These separate services create a supportive environment for students to explore their faith and share experiences with their peers who are at a similar stage in their academic journey. The fellowship is not only an opportunity for spiritual growth but also a way to build strong connections and friendships within their respective student cohorts, fostering a sense of belonging and unity within the broader Christian Union community. It is a dynamic and inclusive initiative that reflects the diverse needs and spiritual development of students throughout their university years.",
    },
    {
      image: miniServiceImage,
      title: "Friday: Mini Service",
      description:
        "The Mini Service at Tom Mboya University Christian Union, held every Friday from 6:00 pm to 7:30 pm, is a dynamic and powerful gathering that serves as a spiritual transition from the week's activities to the upcoming Sunday service. This service is designed to offer members an opportunity to end their week on a spiritually uplifting note and prepare their hearts and minds for the Sunday worship experience. Much like a typical Sunday service, it includes elements of worship, praise, Scripture readings, and inspirational messages. It acts as a time of reflection, prayer, and connection with God, helping members recharge spiritually and find renewed inspiration to face the challenges of the coming week. The Mini Service is a significant and meaningful addition to the Christian Union's weekly schedule, providing a space for spiritual rejuvenation and readiness for the main Sunday service.",
    },
  ];

  return (
    <div>
      <Header />

      {/* Section with Background Image */}
      <section className="section-with-image">
        <div className="background-image"></div>
        <h1>Events</h1>
      </section>

      {/* Focus Kenya Section */}
      <section className="focus-kenya">
        <Container>
          <Row>
            <Col md={6}>
              <div className="focus-info-image">
                <img
                  src={focusKenyaImage}
                  alt="Focus Kenya Logo"
                  style={{ width: "300px", height: "300px" }} // Add inline styles here
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="focus-info-description">
                <h2>Umbrella Body</h2>
                <p>
                  FOCUS is an acronym for Fellowship Of Christian Unions
                  registered in Kenya in 1973. Operationally, FOCUS serves as an
                  umbrella body bringing together Christian unions from
                  different universities and colleges throughout Kenya. FOCUS’
                  aim is to facilitate mutual support, inter-campus sharing of
                  ideas, and sharpening of leadership capacities for effective
                  Christian work within the affiliated institutions and later in
                  the world of work. FOCUS is run along strong Christian
                  principles of accountability and shared leadership.{" "}
                  <a
                    href="https://www.focuskenya.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Upcoming Events Section */}
      <section className="upcoming-events">
        <Container className="cont1">
          <Row>
            {midWeekServices.map((service, index) => (
              <Event
                key={index}
                image={service.image}
                title={service.title}
                description={service.description}
              />
            ))}
          </Row>
        </Container>
      </section>

      {/* Students Section */}
      <section className="students">
        <Container>
          <Row>
            <Col md={6}>
              <div className="focus-description">
                <h2>Ezra Conference</h2>
                <p>
                  The Ezra Conference is an annual gathering that offers a
                  unique opportunity to enrich your knowledge, strengthen your
                  faith, and connect with fellow believers. At this
                  inspirational event, you'll have the chance to engage with
                  renowned speakers, participate in insightful workshops, and
                  build lasting relationships with others in the Christian
                  community.
                </p>
                <p>
                  Whether you're seeking spiritual growth, seeking answers to
                  life's questions, or simply looking to be part of a vibrant
                  faith community, the Ezra Conference has something for
                  everyone. Join us in this transformative journey of faith and
                  learning.
                </p>
                <a
                  href="https://conferences.focuskenya.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>
              </div>
            </Col>
            <Col md={6}>
              <div className="students-image">
                <img src={ezraConferenceImage} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Harambee Section */}
      <section className="harambee">
        <Container>
          <Row>
            <Col md={6}>
              <div className="harambee-image">
                <img src={commisionimage} alt="Harambee" />
              </div>
            </Col>
            <Col md={6}>
              <div className="harambee-description">
                <h2>Commission 2024</h2>
                <p>
                  The Commission Conference is a triennial missions’
                  mobilization, training, information exchange, and networking
                  conference organized by the Fellowship of Christian Unions
                  (FOCUS) Kenya Running
                  <h3>Theme: As the Father has sent me, So
                  Send I You John 20:21</h3>
                  <h3> Goal: To Preserve Ongoing Mission
                  Awareness, Responsiveness, and Involvement among Christian
                  Students, Graduates, and Churches</h3>
                </p>
                <a
                  href="https://conferences.focuskenya.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Events;
