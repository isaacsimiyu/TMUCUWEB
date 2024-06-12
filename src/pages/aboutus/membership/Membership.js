import React from "react";
import "./Membership.css";
import { Link, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
// import Footer from "../../../common/footer/Footer";

const Membership = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    // Navigate to the registration page
    navigate("/components/registration");
  };

  return (
    <div>
      <Header />
      <div className="membership">
        <section className="section-with-image">
          <div className="background-image"></div>
          <h1>Membership</h1>
        </section>

        <section className="membership-content">
          <Container>
            <div className="membership-info">
              <h2>Membership Types</h2>
              <div className="membership-type">
                <h3>Full Membership</h3>
                <p>
                  Shall be open to all undergraduate students of Tom Mboya
                  University who profess the Christian faith and conscientiously
                  sign a membership registration form that shall contain the
                  following declaration at the beginning of the academic year.
                </p>
                <p>DECLARATION:</p>
                <p>
                  "I………………………………………………… born again in understanding that TMUCU
                  is a non-denominational fellowship, I declare my faith in
                  Jesus Christ as my Savior, Lord, and God. It is my desire by
                  the grace of God to live a life consistent with scriptures. I
                  am also determined to give active support to the Christian
                  Union as it seeks to fulfill its aims and objectives. I also
                  agree to uphold the doctrinal basis as outlined in this
                  constitution."
                </p>
              </div>

              <div className="membership-type">
                <h3>Special Membership</h3>
                <p>
                  Shall be open to all school-based students, part-timers,
                  international students, postgraduates who are not former
                  members of the Union who ascribe to the doctrinal basis and
                  conscientiously sign the Declaration in Article 3.1.1.
                </p>
              </div>

              <div className="membership-type">
                <h3>Associates Membership</h3>
                <p>
                  Associate membership shall be open to all staff, non-students,
                  and former students of Tom Mboya University, who profess Jesus
                  Christ as Lord and Savior, ascribe to Doctrinal Basis and
                  their names have been entered into the Associates register.
                  There shall be NO Membership Fee.
                </p>
              </div>

              <h2>Rights and Responsibilities</h2>

              <div className="membership-rights">
                <h3>Full Membership</h3>
                <ul>
                  <li>
                    Eligible to hold office except in the final year of their
                    study. Final year students may hold office in another ad hoc
                    committee(s), except the sub-committee.
                  </li>
                  <li>
                    Eligible to hold office except for the Special Membership.
                  </li>
                  <li>
                    Vote in any General Meeting and participate in the
                    nomination of officials subject to the provisions of this
                    constitution.
                  </li>
                  <li>
                    Propose an amendment to the constitution as provided by
                    Article 19.
                  </li>
                </ul>
              </div>

              <div className="membership-rights">
                <h3>Special Membership</h3>
                <ul>
                  <li>
                    Shall be free to participate in the activities of the union.
                  </li>
                  <li>
                    Shall be entitled to participate in the nominations of the
                    officials of the union.
                  </li>
                  <li>Shall be entitled to vote in general meetings.</li>
                  <li>
                    Shall not be eligible to be members of the Executive
                    Committee, but may be nominated to any other leadership
                    position in the union through consensus or shall be voted in
                    by a majority of the members of the Executive Committee.
                  </li>
                </ul>
              </div>

              <div className="membership-rights">
                <h3>Associates</h3>
                <ul>
                  <li>
                    Shall be free to participate in the activities of the union
                  </li>
                  <li>Shall have an advisory role.</li>
                  <li>
                    Shall not be entitled to vote in general meetings or hold
                    any office or participate in the nominations of the
                    officials of the union.
                  </li>
                  <li>
                    Shall form an associate’s fellowship composed of all
                    associate members of the union.
                  </li>
                  <li>
                    Shall actively support the union in achieving its Objectives
                    individually or as per the discretion of the Associates
                    Fellowship.
                  </li>
                </ul>
              </div>

              <div className="membership-rights">
                <h3>Termination of Membership</h3>
                <ul>
                  <li>A member ceases to be a student of the University.</li>
                  <li>
                    If a member writes to the Secretary of the Union declaring
                    to cease being a member of the Union.
                  </li>
                  <li>
                    If a member is ex-communicated because of belief and/or
                    practice, which is not in line with the Union’s objectives
                    and doctrinal basis.
                  </li>
                  <li>
                    Contravention of Article 2 and/or their conduct has been
                    proven to contradict the Christian faith prescribed in the
                    Holy Bible.
                  </li>
                </ul>
              </div>

              <div className="membership-rights">
                <h3>Renewal of Membership</h3>
                <p>
                  Membership shall be renewed every academic year by signing of
                  the declaration in Article 3 OR otherwise as the Executive
                  Committee deems necessary OR entering of the names into the
                  associate members’ register as the case may be
                </p>
              </div>
            </div>
          </Container>
        </section>
        <section className="register-section">
          <div className="membership-register">
            <h2>Ready to Join?</h2>
            <Button
              className="register-button"
              variant="primary"
              onClick={handleRegisterClick}
            >
              Register Now
            </Button>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Membership;
