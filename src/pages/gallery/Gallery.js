import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Header from "../../components/header/Header";
import "./Gallery.css"; // Import your CSS for styling
import image1 from "../../assets/tmucu/galery/gl1.JPG";
import image2 from "../../assets/tmucu/galery/gl2.JPG";
import image3 from "../../assets/tmucu/galery/gl3.JPG";
import image4 from "../../assets/tmucu/galery/gl4.JPG";
import image5 from "../../assets/tmucu/galery/gl5.JPG";
import image6 from "../../assets/tmucu/galery/gl6.JPG";
import image7 from "../../assets/tmucu/galery/gl7.JPG";
import image8 from "../../assets/tmucu/galery/gl8.JPG";
import image9 from "../../assets/tmucu/galery/gl9.JPG";
import image10 from "../../assets/tmucu/galery/gl10.JPG";
import image11 from "../../assets/tmucu/galery/gl11.JPG";
import image12 from "../../assets/tmucu/galery/gl12.JPG";
import image13 from "../../assets/tmucu/galery/gl13.JPG";
import image14 from "../../assets/tmucu/galery/gl14.JPG";
import image15 from "../../assets/tmucu/galery/gl15.JPG";
import Footer from "../../components/footer/Footer";
// Import more image files as needed

const Gallery = () => {
  return (
    <div>
      <Header />

      {/* Section with Background Image */}
      <section className="section-with-image">
        <div className="background-image"></div>
        <Container>
          <h1>Gallery</h1>
        </Container>
      </section>

      {/* Section for Christian Union Images */}
      <section className="christian-union-images">
        <Container>
          <Row>
            {/* Add your Christian Union images here */}
            <Col xs={12} sm={6} md={4}>
              <Image src={image1} alt="Image 1" fluid />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Image src={image2} alt="Image 2" fluid />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Image src={image3} alt="Image 3" fluid />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Image src={image4} alt="Image 4" fluid />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Image src={image5} alt="Image 5" fluid />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Image src={image6} alt="Image 6" fluid />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Image src={image7} alt="Image 7" fluid />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Image src={image8} alt="Image 8" fluid />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Image src={image9} alt="Image 9" fluid />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Image src={image10} alt="Image 10" fluid />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Image src={image11} alt="Image 11" fluid />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Image src={image12} alt="Image 12" fluid />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Image src={image13} alt="Image 13" fluid />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Image src={image14} alt="Image 14" fluid />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Image src={image15} alt="Image 15" fluid />
            </Col>
            
            {/* Add more images as needed */}
          </Row>
        </Container>
      </section>

      {/* Link to Google Drive */}
      <section className="google-drive-link">
        <Container>
          <p>View more photos on our Google Drive:</p>
          <a
            href="https://drive.google.com/drive/folders/your-folder-id"
            target="_blank"
            rel="noopener noreferrer"
          >
            Christian Union Gallery
          </a>
        </Container>
      </section>

      <Footer/>
    </div>
  );
};

export default Gallery;
