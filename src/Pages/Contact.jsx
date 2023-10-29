import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import google from "../Assets/google.png";

function ContactUs() {
  return (
    <Container style={{ marginTop: "70px", marginBottom: "70px" }}>
      <Row>
        <Col md={6}>
          <h1>Download MiLab</h1>
          <p>
            Easily access practical activities anytime, anywhere with MiLab. We
            have released the i-Lab mobile application which makes it easy for
            you to access various features via your smartphone.
          </p>

          <div>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.infotech.milab"
              rel="noreferrer"
            >
              <img
                src={google}
                alt="application"
                className="downloadAppClick"
                style={{ width: "200px", height: "70px" }}
              />
            </a>
          </div>
        </Col>
        <Col md={6}>
          <div>Send us an email</div>
          <Form>
            <Form.Group controlId="contact-us-body">
              <Form.Control as="textarea" rows={3} placeholder="Your message" />
            </Form.Group>

            <Form.Group controlId="contact-us-name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" />
              <div
                className="error-message"
                id="error-name"
                style={{ display: "none" }}
              >
                Please input name
              </div>
            </Form.Group>

            <Form.Group controlId="contact-us-email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="xxxx@webmail.ac.id" />
              <div
                className="error-message"
                id="error-email"
                style={{ display: "none" }}
              >
                Please input email
              </div>
              <div
                className="error-message"
                id="error-format-email"
                style={{ display: "none" }}
              >
                Invalid format*
              </div>
            </Form.Group>

            <Button
              variant="primary"
              id="submit-form"
              style={{ marginTop: "20px" }}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
