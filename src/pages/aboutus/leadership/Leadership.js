import React from "react";
import "./Leadership.css"; // Import your CSS file here
import { Container, Row, Col, Image } from "react-bootstrap"; // Import React Bootstrap components
// import Footer from "../../../common/footer/Footer";
import Header from "../../../components/header/Header";

// Import the leader images (assuming they are located in the 'src' folder)
import leader1Image from "../../../assets/tmucu/2023-2024 Exec/chair.JPG"; // Replace with your image paths
import leader2Image from "../../../assets/tmucu/2023-2024 Exec/vc.JPG";
import leader3Image from "../../../assets/tmucu/2023-2024 Exec/secretary.JPG";
import leader4Image from "../../../assets/tmucu/2023-2024 Exec/vs.JPG"; // Replace with your image paths
import leader5Image from "../../../assets/tmucu/2023-2024 Exec/treasure.JPG";
import leader6Image from "../../../assets/tmucu/2023-2024 Exec/discipleship.JPG";
import leader7Image from "../../../assets/tmucu/2023-2024 Exec/media.JPG"; // Replace with your image paths
import leader8Image from "../../../assets/tmucu/2023-2024 Exec/mission.JPG";
import leader9Image from "../../../assets/tmucu/2023-2024 Exec/praiseandworship.JPG";
import leader10Image from "../../../assets/tmucu/2023-2024 Exec/ushering.JPG";
import leader11Image from "../../../assets/tmucu/2023-2024 Exec/PAC.JPG";
import leader12Image from "../../../assets/tmucu/2023-2024 Exec/creative.JPG";
import leader13Image from "../../../assets/tmucu/2023-2024 Exec/prayer.JPG";
import Footer from "../../../components/footer/Footer";

const Leadership = () => {
  // Define an array of leaders with their information
  const leaders = [
    {
      id: 1,
      name: "Lawrence Ngigi Mwangi",
      role: "Chairperson",
      avatar: leader1Image,
    },
    {
      id: 2,
      name: "Ruth Margret",
      role: "Vice Chairperson",
      avatar: leader2Image,
    },
    {
      id: 3,
      name: "Sharon Mboya",
      role: "Secretary",
      avatar: leader3Image,
    },
    {
      id: 4,
      name: "Nickson Jeremiah",
      role: "Vise-Secretary",
      avatar: leader4Image,
    },
    {
      id: 5,
      name: "Leonard Mambo",
      role: "Treasurer",
      avatar: leader5Image,
    },
    {
      id: 6,
      name: "Morris Nyamhanga",
      role: "Discipleship Coordinator",
      avatar: leader6Image,
    },
    {
      id: 7,
      name: "Isaac simiyu",
      role: "Media and Literature Coordinaror",
      avatar: leader7Image,
    },
    {
      id: 8,
      name: "Margret Njeri",
      role: "Mission and Evangelism Coordinator",
      avatar: leader8Image,
    },
    {
      id: 9,
      name: "Lucy Wanjiku",
      role: "Music Coordinator",
      avatar: leader9Image,
    },
    {
      id: 10,
      name: "Subira Masinde",
      role: "Ushering",
      avatar: leader10Image,
    },
    {
      id: 11,
      name: "George Orao",
      role: "Partnership and Associates Coordinator (PAC)",
      avatar: leader11Image,
    },
    {
      id: 12,
      name: "Mishelle Obayete",
      role: "Creative Coordinator",
      avatar: leader12Image,
    },
    {
      id: 13,
      name: "Lavender Akinyi",
      role: "Prayer Coordinator",
      avatar: leader13Image,
    },
    
    
    // Add more leaders here with their image imports
  ];

  return (
    <div>
      <Header />
      <div className="membership">
        <section className="section-with-image">
          <div className="background-image"></div>
          <h1>Leadership</h1>
        </section>
        <section className="leadership-year">
          <Container>
            <p>Meet the 2023/2024 Leaders</p>
          </Container>
        </section>
        <section className="leadership-content">
          <Container>
            <Row>
              {leaders.map((leader) => (
                <Col key={leader.id} md={6} lg={3} className="mb-4">
                  <div className="leader-container">
                    <div className="leader-avatar">
                      <Image src={leader.avatar} alt={leader.name} roundedCircle fluid />
                    </div>
                    <h2 className="leader-name">{leader.name}</h2>
                    <p className="leader-role">{leader.role}</p>
                    <p className="leader-contact">{leader.contact}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Leadership;
