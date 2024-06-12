import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (!emailRegex.test(newEmail)) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  };

  const handleSignUp = () => {
    if (!emailRegex.test(email)) {
      return;
    }

    setIsLoading(true);

    // Perform your sign-up logic here

    setIsLoading(false);
    setMessage({
      text: "Successfully signed up for the newsletter!",
      type: "success",
    });
    setEmail("");

    // Clear the message after 5 seconds
    setTimeout(() => setMessage(null), 5000);
  };

  return (
    <section id="newsletter" className="section-p1 section-m1">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="newstext">
              <h4>Sign Up For Newsletter</h4>
              <p>
                Get email updates about our latest programs and{" "}
                <span>special services.</span>
              </p>
            </div>
          </Col>
          <Col md={6}>
            <Form className="form">
              <Row>
                <Col xs={9}>
                  <Form.Control
                    type="text"
                    placeholder="Your email address"
                    value={email}
                    onChange={handleEmailChange}
                    isInvalid={!emailRegex.test(email)}
                  />
                </Col>
                <Col xs={3} className="text-center">
                  <Button
                    className="normal"
                    onClick={handleSignUp}
                    disabled={isButtonDisabled || isLoading}
                  >
                    {isLoading ? "Signing Up..." : "Sign Up"}
                  </Button>
                </Col>
              </Row>
            </Form>
            {message && (
              <Alert variant={message.type} className="mt-3">
                {message.text}
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
