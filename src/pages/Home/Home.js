import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImages,
  faBook,
  faVideo,
  faUsers,
  faThumbsUp,
  faHeart,
  faSmile,
  faStar,
  faGlobe,
  faQuoteRight,
  faQuoteLeft,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import avatar1 from "../../assets/testimonials/testimonial2.jpg";
import avatar2 from "../../assets/testimonials/testimonial1.jpg";
import avatar3 from "../../assets/testimonials/testimonial3.jpg";

import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "../../components/header/Header";

import image1 from "../../assets/tmucu/home/2022-2023exec.JPG";
import image2 from "../../assets/tmucu/home/hm2.JPG";
import image3 from "../../assets/tmucu/home/currentexecutive.JPG";
import image4 from "../../assets/tmucu/home/ariseandshine.JPG";
import image5 from "../../assets/tmucu/home/praiseandworship.JPG";

import "./Home.css"; // Add your CSS file for custom styles
import Footer from "../../components/footer/Footer";
import axios from "axios"; // Import Axios for making HTTP requests
import API from "../../API/axios";

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: image1, description: "2022/2023 TMUCU Executive" },
    { src: image2, description: "TMUCU Sunday Service" },
    { src: image3, description: "2023/2024 TMUCU Executive" },
    { src: image4, description: "The Arise and Shine" },
    { src: image5, description: "TMUCU Praise and Worship" },
  ];

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Validate email format using regex
    setIsValidEmail(validateEmail(e.target.value));
  };

  const validateEmail = (email) => {
    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = () => {
    // Make sure email is not empty and valid
    if (!email || !isValidEmail) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Make a POST request to your backend endpoint
    axios
      .post("http://localhost:3500/api/newsletter/signup", { email }) // Send email to backend
      .then((response) => {
        if (response.status === 200) {
          setMessage("Successfully signed up for the newsletter!");
          setEmail(""); // Clear the email input field
        } else {
          setMessage(
            "Failed to sign up for the newsletter. Please try again later."
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("An error occurred. Please try again later.");
      });
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
                    onClick={() => navigate("/components/Registration")} // Use navigate to go to the registration page
                  >
                    Become an Official Member
                  </Button>
                </div>
              </div>
            ))}
            <div className="carousel-controls">
              <Button className="slider-button left" onClick={prevImage}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </Button>
              <Button className="slider-button right" onClick={nextImage}>
                <FontAwesomeIcon icon={faChevronRight} />
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

        <section className="welcome-section">
          <div className="welcome">
            <h1>welcome</h1>
            <p>Achieve the best from our fellowships</p>
          </div>
        </section>

        <section className="vision-section">
          <Container>
            <Row>
              <Col md={2} sm={4} xs={8}>
                <div className="featured-container">
                  <FontAwesomeIcon icon={faBook} />
                  <h3>Our Vision</h3>
                  <ul>
                    <li>
                      To be true agents of transformation living a holy life to
                      the current and coming generations in and outside campus.
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={2} sm={4} xs={8}>
                <div className="featured-container">
                  <FontAwesomeIcon icon={faGlobe} />
                  <h3>Our Mission</h3>
                  <ul>
                    <li>
                      To equip members to be able to study, practice, and
                      evangelize God’s word to the current and generations to
                      come.
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={2} sm={4} xs={8}>
                <div className="featured-container">
                  <FontAwesomeIcon icon={faHeart} />
                  <h3>Our Core Values</h3>
                  <ul>
                    <li>Integrity</li>
                    <li>Team work </li>
                    <li>Excellence </li>
                    <li>Accountability </li>
                    <li>Faithfulness to the Holy Scripture </li>
                  </ul>
                </div>
              </Col>
              <Col md={2} sm={4} xs={8}>
                <div className="featured-container">
                  <FontAwesomeIcon icon={faStar} />
                  <h3>Our Year Theme</h3>
                  <ul>
                    <li>We,The Letters of Christ.</li>
                    <li>
                      2Cor 3:3 3 For as much as ye are manifestly declared to be
                      the epistle of Christ ministered by us, written not with
                      ink, but with the Spirit of the living God; not in tables
                      of stone, but in fleshy tables of the heart.
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="socials-section">
          <Container>
            <Row>
              <Col>
                <h1>
                  Like, Follow, leave a comment, Double tap and share our
                  socials
                </h1>
              </Col>
            </Row>
            <Row className="social-container">
              {/* Facebook */}
              <Col md={2} sm={4} xs={8}>
                <div className="social-item">
                  <a
                    href="https://www.facebook.com/groups/your-facebook-group-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="icon" />
                  </a>
                  <div className="embedded-content">
                    {/* Replace with your actual Facebook post iframe */}
                    <div className="fb-post">
                      <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftommboyaunicu%2Fposts%2Fpfbid034ZDGbfyH1EZ9qPT6VAwXfB9HZ5GAKGnWyiBx9Y9nq2SGFeQJSw4rEQhAArUzesSvl&show_text=true&width=500"
                        width="85"
                        height="105"
                        style={{
                          border: "none",
                          overflow: "hidden",
                        }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                    {/* Link to your Facebook group */}
                    <a
                      href="https://www.facebook.com/tommboyaunicu"
                      target="_blank"
                    >
                      Visit our Facebook Page
                    </a>
                  </div>
                </div>
              </Col>

              {/* Twitter */}
              <Col md={2} sm={4} xs={8}>
              
                <div className="social-item">
                  <a
                    href="https://twitter.com/Tmu_cu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    
                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                  </a>
                  <div className="embedded-content">
                    {/* Replace with your actual Twitter tweet embed code */}
                    <div className="twitter-feed">
                      <blockquote className="twitter-tweet">
                        <p lang="en" dir="ltr">
                          This is a Twitter tweet content.
                        </p>
                        <a href="https://twitter.com/Tmu_cu"></a>
                      </blockquote>
                      <script
                        async
                        src="https://platform.twitter.com/widgets.js"
                        charSet="utf-8"
                      ></script>
                      
                    </div>
                    {/* Link to your Twitter account */}
                    <a
                      href="https://twitter.com/Tmu_cu"
                      target="_blank"
                    >
                      Visit our Twitter account
                    </a>
                  </div>
                </div>
              </Col>

              {/* YouTube */}
              <Col md={2} sm={4} xs={8}>
                <div className="social-item">
                  <a
                    href="https://youtube.com/@tommboyaunichristianunion?si=O1BCU4kaYbqOc0OA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faYoutube} className="icon" />
                  </a>
                  <div className="embedded-content">
                    {/* Replace with your actual YouTube video iframe */}
                    <div className="youtube-video">
                      <iframe
                        width="85"
                        height="105"
                        src="https://www.youtube.com/embed/tFNTEGgti1k?si=tHK6UR09bPitetlp"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                    {/* Link to your YouTube channel */}
                    <a
                      href="https://youtube.com/@tommboyaunichristianunion?si=O1BCU4kaYbqOc0OA"
                      target="_blank"
                    >
                      Visit our YouTube channel
                    </a>
                  </div>
                </div>
              </Col>



                {/* YouTube */}
                <Col md={2} sm={4} xs={8}>
                <div className="social-item">
                  <a
                    href="https://www.tiktok.com/@tmu_cu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTiktok} className="icon" />
                  </a>
                  <div className="embedded-content">
                    {/* Replace with your actual tiktok video iframe */}
                    <div className="tiktok-video">
                      <iframe
                        width="85"
                        height="105"
                        src="https://www.tiktok.com/@tmu_cu"
                        title="Tiktok video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                    {/* Link to your Tiktok channel */}
                    <a
                      href="https://www.tiktok.com/@tmu_cu"
                      target="_blank"
                    >
                      Visit our Tiktok account
                    </a>
                  </div>
                </div>
              </Col>



              {/* Instagram */}
              <Col md={2} sm={3} xs={8}>
                <div className="social-item">
                  <a
                    href="https://instagram.com/tmu_cu?igshid=MzRlODBiNWFlZA=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="icon" />Visit our instagram account

                  </a>
                  <div className="embedded-content">
                    {/* Instagram embed code */}
                    <blockquote
                      className="instagram-media"
                      data-instgrm-captioned
                      data-instgrm-permalink="https://www.instagram.com/p/CvpFu9rtX_r/?utm_source=ig_embed&amp;utm_campaign=loading"
                      data-instgrm-version="14"
                      style={{
                        background: "#FFF",
                        border: 0,
                        borderRadius: "3px",
                        boxShadow:
                          "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                        margin: "1px",
                        maxWidth: "20px",
                        minWidth: "10px",
                        padding: 0,
                        width: "40.375%",
                        width: "-webkit-calc(00% - 2px)",
                        width: "calc(00% - 2px)",
                      }}
                    >
                      <React.Fragment>
                        <div style={{ padding: "16px" }}>
                          <a
                            href="https://www.instagram.com/p/CvpFu9rtX_r/?utm_source=ig_embed&amp;utm_campaign=loading"
                            style={{
                              background: "#FFFFFF",
                              lineHeight: 0,
                              padding: "0 0",
                              textAlign: "center",
                              textDecoration: "none",
                              width: "100%",
                            }}
                            target="_blank"
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              <div
                                style={{
                                  backgroundColor: "#F4F4F4",
                                  borderRadius: "50%",
                                  flexBasis: "40px",
                                  height: "40px",
                                  marginRight: "14px",
                                  width: "40px",
                                }}
                              ></div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  flexGrow: 1,
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    backgroundColor: "#F4F4F4",
                                    borderRadius: "4px",
                                    flexBasis: "14px",
                                    height: "14px",
                                    marginBottom: "6px",
                                    width: "100px",
                                  }}
                                ></div>
                                <div
                                  style={{
                                    backgroundColor: "#F4F4F4",
                                    borderRadius: "4px",
                                    flexBasis: "14px",
                                    height: "14px",
                                    width: "60px",
                                  }}
                                ></div>
                              </div>
                            </div>
                            <div style={{ padding: "19% 0" }}></div>
                            <div
                              style={{
                                display: "block",
                                height: "50px",
                                margin: "0 auto 12px",
                                width: "50px",
                              }}
                            >
                              <svg
                                width="50px"
                                height="50px"
                                viewBox="0 0 60 60"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                {/* Your SVG content here */}
                              </svg>
                            </div>
                          </a>
                          {/* Rest of your content */}
                        </div>
                      </React.Fragment>
                    </blockquote>
                    <script async src="//www.instagram.com/embed.js"></script>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="testimonial-section">
          <Container>
            <Row>
              <Col>
                <h2>Testimonials</h2>
              </Col>
            </Row>
            <Row className="testimonials">
              <Col md={4} sm={6} xs={12}>
                <div className="testimonial">
                  <div className="avatar">
                    <img src={avatar1} alt="" />
                  </div>
                  <p>
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="quote-icon"
                    />
                    "As a member of the Tom Mboya University Christian Union,
                    I've experienced God's unwavering presence through every
                    trial and triumph. In moments of doubt, His reassurance
                    steadies my heart. In times of joy, His love overflows. The
                    Christian Union has been a catalyst for deepening my faith,
                    providing a supportive community where I've witnessed His
                    transformative power. Through it all, God's faithfulness
                    remains my anchor, guiding me with grace and reminding me
                    that I'm never alone."
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      className="quote-icon"
                    />
                  </p>
                  <p className="testimonial-info">
                    <span className="name">Nancy Wakonyo</span> -{" "}
                    <span className="role">Member</span>
                  </p>
                </div>
              </Col>
              <Col md={4} sm={6} xs={12}>
                <div className="testimonial">
                  <div className="avatar">
                    <img src={avatar2} alt="" />
                  </div>
                  <p>
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="quote-icon"
                    />
                    As a member of the Tom Mboya University Christian Union
                    since 2021, I'm nearing the end of my undergraduate journey,
                    and I am profoundly grateful for God's faithfulness.
                    Throughout these years, He has graciously kept me in good
                    health, despite the rigors of academic life. It's a
                    testament to His unwavering care and provision, for which I
                    am deeply thankful.
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      className="quote-icon"
                    />
                  </p>
                  <p className="testimonial-info">
                    <span className="name">Alvin Saiguran</span> -{" "}
                    <span className="role">Member</span>
                  </p>
                </div>
              </Col>
              <Col md={4} sm={6} xs={12}>
                <div className="testimonial">
                  <div className="avatar">
                    <img src={avatar3} alt="" />
                  </div>
                  <p>
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="quote-icon"
                    />
                    In my cherished journey at Tom Mboya University Christian
                    Union, I've discovered more than just a community; I've
                    found a loving family. The heartfelt interactions with its
                    members have nourished my spiritual growth, inspiring me to
                    walk the Christ-centered path. In our local language, we
                    embrace the saying *'Obwaka buli okhusinga'*, which
                    translates to 'Family is everything' in English,
                    encapsulating the profound significance of family bonds.
                    With gratitude and love, I share my experiences and extend
                    heartfelt thanks to TMUCU."
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      className="quote-icon"
                    />
                  </p>
                  <p className="testimonial-info">
                    <span className="name">Austine Aligula</span> -{" "}
                    <span className="role">Member</span>
                  </p>
                </div>
              </Col>
              {/* Add more testimonials as needed */}
            </Row>
          </Container>
        </section>
        <section id="newsletter" className="section-p1 section-m1">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6}>
                <div className="newstext">
                  <h4>Sign Up For Newsletter</h4>
                  <p>
                    Get updates about our latest programs and{" "}
                    <span>our services.</span>
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="form">
                  <input
                    type="text"
                    placeholder="Your email address"
                    value={email}
                    onChange={handleEmailChange}
                    className={!isValidEmail ? "invalid" : ""}
                  />
                  <Button className="normal" onClick={handleSignUp}>
                    Sign Up
                  </Button>
                </div>
                {message && <p>{message}</p>}
              </Col>
            </Row>
          </Container>
        </section>

        <section id="newsletter1" className="section-p1 section-m1">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6}>
                <div className="newstext">
                  <h4>Sign Up For Newsletter</h4>
                  <p>
                    Get updates about our latest programs and{" "}
                    <span>our services.</span>
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="form">
                  <input
                    type="text"
                    placeholder="Your email address"
                    value={email}
                    onChange={handleEmailChange}
                    className={!isValidEmail ? "invalid" : ""}
                  />
                  {isValidEmail || !email ? null : (
                    <p className="error-message">
                      Please enter a valid email address.
                    </p>
                  )}
                  <Button className="normal" onClick={handleSignUp}>
                    Sign Up
                  </Button>
                </div>
                {message && <p>{message}</p>}
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
