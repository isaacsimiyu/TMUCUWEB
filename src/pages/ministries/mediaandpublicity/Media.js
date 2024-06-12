import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Media.css";
import image1 from "../../../assets/images/gallery/gl24.jpg";
import image2 from "../../../assets/images/gallery/gl23.jpg";
import image3 from "../../../assets/images/gallery/gl22.jpg";
import image4 from "../../../assets/images/gallery/gl20.jpg"; // Add your own images
import image5 from "../../../assets/images/gallery/gl1.jpg"; // Add your own images

// additional images
import additional1 from "../../../assets/images/gallery/gl2.jpg";
import additional2 from "../../../assets/images/gallery/gl3.jpg";
import additional3 from "../../../assets/images/gallery/gl9.jpg";
import additional4 from "../../../assets/images/gallery/gl22.jpg"; // Add your own images
import additional5 from "../../../assets/images/gallery/gl8.jpg"; // Add your own images
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

const cardImages = [
  {
    src: image4,
    description: "Card Image Description 1",
  },
  {
    src: image5,
    description: "Card Image Description 2",
  },
  // Add more card images with descriptions as needed
];

const additionalImages = [
  // Add more images here
  {
    src: additional1,
    description: "Image Description 1",
  },
  {
    src: additional2,
    description: "Image Description 2",
  },
  {
    src: additional3,
    description: "Image Description 3",
  },
  {
    src: additional4,
    description: "Image Description 4",
  },
  {
    src: additional5,
    description: "Image Description 5",
  },
  {
    src: additional5,
    description: "Image Description 5",
  },
  // Add more images with descriptions as needed
];

const Media = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const images = [
    { src: image1, description: "2023/2024 TMUCU Executive" },
    { src: image2, description: "Praise And Worship Team" },
    { src: image3, description: "The Media Team" },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const prevImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToImage = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <Header />
      <div className="home-body">
        <section className="slider-section">
          <div className="image-slider">
            {images.map((image, index) => (
              <div
                key={index}
                className={`image-slide ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                <img src={image.src} alt={`Image ${index + 1}`} />
                <div className="description">
                  <h2>{image.description}</h2>
                  <Button
                    className="registration-button"
                    onClick={() => navigate("/ministriesreg/media")} // Use navigate to go to the registration page
                  >
                    Become a Media Member
                  </Button>
                </div>
              </div>
            ))}
            <div className="carousel-controls">
              <Button className="slider-button left" onClick={prevImage}>
                Previous
              </Button>
              <Button className="slider-button right" onClick={nextImage}>
                Next
              </Button>
            </div>
            <div className="dot-navigation">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${index === activeIndex ? "active" : ""}`}
                  onClick={() => goToImage(index)}
                ></div>
              ))}
            </div>
          </div>
        </section>

        <section className="description-section">
          <Row>
            <Col>
              <h2>About Media and Publicity Ministry</h2>
              <p>
                This team shall be responsible for receiving and interpreting
                all publicity needs of The Union. This includes designing,
                producing, and putting all The Union announcements, posters,
                banners, shirts, and all other publicity tools employed by the
                union. It shall also be responsible for the update and
                management of The Union's social media i.e. Website, Facebook,
                Twitter, and any other social group. This team shall consist of;
              </p>
              <ul>
                <li>Chairperson</li>
                <li>Vice-chairperson</li>
                <li>Secretary</li>
                <li>Treasurer</li>
                <li>One special member</li>
              </ul>
            </Col>
            <Col>
              <h2>Media Gallery</h2>
              <p>Images and videos of their work...</p>
              <Row>
                {cardImages.map((image, index) => (
                  <Col key={index} xs={12} md={4}>
                    <Card className="image-card">
                      <Card.Img
                        src={image.src}
                        alt={`Image ${index + 1}`}
                        className="hover-zoom"
                      />
                      <Card.ImgOverlay>
                        <Card.Title>{image.description}</Card.Title>
                      </Card.ImgOverlay>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </section>

        <section className="additional-images-section">
          <h2>Additional Images</h2>
          <Row>
            {additionalImages.map((image, index) => (
              <Col key={index} xs={12} md={4}>
                <Card className="image-card">
                  <Card.Img
                    src={image.src}
                    alt={`Image ${index + 1}`}
                    className="hover-zoom"
                  />
                  <Card.ImgOverlay>
                    <Card.Title>{image.description}</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Media;
