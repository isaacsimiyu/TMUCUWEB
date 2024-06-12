import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Header from "../../components/header/Header";
// import Footer from "../../common/footer/Footer";
import bibleStudyImage from "../../assets/program/bile study.jpg";
import cbrImage from "../../assets/program/cbr.jpg";
import bestPImage from "../../assets/program/bible-exposition.jpg";
import morningDevotionImage from "../../assets/program/morning devotion.jpg";
import AnzaFitiImage from "../../assets/program/anzafiti.jpg";
import sportsImage from "../../assets/program/sports.jpg";
import "./Programs.css";
import Footer from "../../components/footer/Footer";

const Program = ({ image, title, description }) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <Col sm={6} md={4} lg={3} className="program">
      <Image src={image} alt={title} fluid />
      <div className="program-description">
        <h4>{title}</h4>
        {isDescriptionVisible && <p>{description}</p>}
        <Button onClick={toggleDescription} variant="primary">
          {isDescriptionVisible ? "Hide Description" : "Read more"}
        </Button>
      </div>
    </Col>
  );
};

const Programs = () => {
  return (
    <div>
      <Header />

      <section className="section-with-image">
        <div className="background-image"></div>
        <h1>Programs</h1>
      </section>

      <section className="programs">
        <Container>
          <Row>
            <Program
              image={bibleStudyImage}
              title="Bible Study"
              description="Bible study at TMUCU consists of small groups led by dedicated Bible study leaders. These groups come together to explore and deepen their understanding of the Bible using a common guide. Each participant has the opportunity to delve into the scriptures, ask questions, and engage in discussions with fellow group members. These gatherings foster a sense of community and provide a structured and collaborative approach to biblical learning. The shared guide ensures that all groups are studying the same passages or topics, allowing for unified and insightful discussions while also encouraging personal growth and reflection. It's a meaningful and educational experience that promotes a deeper connection with the scriptures and a stronger bond among participants."
            />
            <Program
              image={cbrImage}
              title="CBR"
              description="Consistent Bible Reading (CBR) at TMUCU is a program designed to help members establish and maintain a regular and disciplined habit of reading the Bible. The goal of this program is to support participants in their journey to complete the entire Bible. Members are provided with resources and guidance to ensure that they can steadily progress through the scriptures, ultimately reaching the impressive milestone of completing the entire Bible. CBR not only promotes regular engagement with the Word of God but also offers a structured and supportive environment for members to track their progress, seek understanding, and celebrate their accomplishments along the way. It's an initiative that fosters spiritual growth, knowledge, and dedication to the sacred text."
            />
            <Program
              image={bestPImage}
              title="BEST-P"
              description="The Bible Exposition Self Training program, commonly known as BEST-P, is a comprehensive and long-term group-oriented training initiative designed to nurture participants' skills in Bible study and expository preaching. This program is dedicated to equipping individuals with the knowledge and techniques necessary for in-depth exploration and interpretation of the Scriptures, ultimately fostering the ability to deliver insightful and impactful sermons. BEST-P provides a structured and supportive environment where participants collaborate, learn, and grow in their understanding of the Bible and the art of preaching. Through systematic study and practical application, this program empowers individuals to become effective communicators of the Word, fostering a deeper connection with the sacred text and a greater capacity for sharing its teachings with others."
            />
            <Program
              image={morningDevotionImage}
              title="Morning Devotion"
              description="Morning devotions at TMUCU are primarily focused on prayer. These sessions are dedicated moments for participants to come together in a spirit of devotion and engage in collective and individual prayers. It's a sacred time for seeking guidance, expressing gratitude, and seeking spiritual strength as they start their day. The emphasis on prayer underscores the importance of seeking divine guidance and reflecting on one's faith during this early morning gathering."
            />
            <Program
              image={AnzaFitiImage}
              title="Anza Fiti"
              description="ANZA FITI program is a special orientation initiative aimed at acclimating first-year students to the Christian Union (CU) doctrine and the broader campus life experience. This program serves as an introductory platform designed to familiarize new students with the core values, principles, and beliefs of the CU, providing them with a strong foundation for spiritual growth and involvement within the CU community. In addition to religious teachings and principles, ANZA FITI offers insights into general campus life, helping students navigate academic, social, and extracurricular aspects of university life. By participating in this program, first-year students are equipped with the knowledge and guidance necessary to integrate seamlessly into both the CU community and the broader campus environment, ensuring a well-rounded and fulfilling college experience."
            />
            <Program
              image={sportsImage}
              title="Sports"
              description="At TMUCU, sports and games play a vital role in breaking the monotony and keeping members focused. These recreational activities, including soccer, volleyball, basketball, rope skipping, rope pulling, and other exciting games, offer a dynamic and enjoyable break from routine. They foster camaraderie, relaxation, and stress relief while providing an opportunity for physical and mental well-being. By engaging in these activities, members not only recharge their spirits but also build lasting friendships, contributing to a vibrant and unified community that helps them stay energized and dedicated in their daily lives and spiritual journeys."
            />
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
