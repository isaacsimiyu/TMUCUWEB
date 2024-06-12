import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/tmulogo.jpg";
import { Nav, NavDropdown, Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/NavbarToggle"; // Import NavbarToggle component
import "./Header.css"; // Create a separate CSS file for your custom styles

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    closeMenu();
  };

  return (
    <header>
      {/* Section 1: Logo, Institution Name, Contact, and Button */}
      <div className="section-1">
        <Container className="logo-name-contact">
          <div className="logo-name">
            <Link to="/navlinks/home">
              <img src={logo} alt="TMUCU Logo" className="logo" />
            </Link>
            <div className="institution-info">
              <p className="institution-name">Tom Mboya University</p>
              <p className="institution-name">Christian Union</p>
            </div>
          </div>
          <div className="contact-email">
            <a href="mailto:tommboyaunicu@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </a>
            <a href="https://wa.me/254745323638">
              <FontAwesomeIcon icon={faPhone} /> WhatsApp
            </a>
          </div>
          <div className="register-btn-container">
            <button
              className="register-btn"
              onClick={() => handleNavigation("/components/Registration")}
            >
              Register
            </button>
            <button
              className="register-btn"
              onClick={() => handleNavigation("/login")}
            >
              Login
            </button>
          </div>
        </Container>
      </div>

      {/* Section 2: Navbar */}
      <div className={`section-2 ${isMenuOpen ? "menu-open" : "menu-closed"}`}>
        <Navbar expand="lg" className="nav-bar">
          <h1 className="navbar-brand">Menu</h1>
          <NavbarToggle onClick={toggleMenu} aria-controls="basic-navbar-nav">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </NavbarToggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={`justify-content-end ${isMenuOpen ? "show" : ""}`}
          >
            <Nav className="ml-auto">
              {" "}
              {/* Align menus to the right */}
              <Nav.Link onClick={() => handleNavigation("/pages/home")}>
                Home
              </Nav.Link>
              <Nav.Link onClick={() => handleNavigation("/pages/events")}>
                Events
              </Nav.Link>
              <Nav.Link onClick={() => handleNavigation("/pages/programs")}>
                Programs
              </Nav.Link>
              <Nav.Link onClick={() => handleNavigation("/pages/gallery")}>
                Gallery
              </Nav.Link>
              <NavDropdown
                title="Ministries"
                id="basic-nav-dropdown"
                align="left"
                className="left-aligned-dropdown"
              >
                <NavDropdown.Item
                  onClick={() => handleNavigation("/home")}
                >
                  Intercessory
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleNavigation("/home")}
                >
                  Ushering
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleNavigation("/home")}
                >
                  Catering
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleNavigation("/home")}
                >
                  Praise and worship
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleNavigation("/home")}
                >
                  Choir
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleNavigation("/home")}
                >
                  Creative
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleNavigation("/home")}
                >
                  Instruments
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleNavigation("/home")}
                >
                  Mission and evangelism
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleNavigation("/home")}
                >
                  Bible study and discibleship
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    handleNavigation("/home")
                  }
                >
                  Media and publicity
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    handleNavigation("/home")
                  }
                >
                  Editorial and literature
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleNavigation("/home")}
                >
                  Jacobs and Esthers
                </NavDropdown.Item>

                <NavDropdown.Item
                  onClick={() => handleNavigation("/home")}
                >
                  Welfare
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleNavigation("/home")}
                >
                  Secretariates
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="About Us"
                id="basic-nav-dropdown"
                align="left"
                className="left-aligned-dropdown"
              >
                <NavDropdown.Item
                  onClick={() => handleNavigation("/aboutus")}
                >
                  About TMUCU
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleNavigation("/aboutus/leadership")}
                >
                  Leadership
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleNavigation("/aboutus/membership")}
                >
                  Membership
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() => handleNavigation("/pages/blogs")}>
                Blog
              </Nav.Link>
              <Nav.Link onClick={() => handleNavigation("/pages/contact")}>
                ContactUs
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
