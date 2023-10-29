import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {} from "../Components/style/Footer.style.css";
import ilabLogo from "../Assets/logo-ilab.png";
import facebookLogo from "../Assets/logo-facebook.png";
import twitterLogo from "../Assets/logo-twitter.png";
import instagramLogo from "../Assets/logo-instagram.png";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="container my-5">
            <footer>
              <div className="container p-4">
                <Row>
                  <Col lg={3} md={6} className="mb-4">
                    <img
                      src={ilabLogo}
                      width="150"
                      height="70"
                      alt="iLab Logo"
                    />
                  </Col>
                  <Col lg={3} md={6} className="mb-4">
                    <h5 className="mb-3">Home</h5>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-1">
                        <a href="#">Email Marketing</a>
                      </li>
                      <li className="mb-1">
                        <a href="#">Campaign</a>
                      </li>
                      <li className="mb-1">
                        <a href="#">Branding</a>
                      </li>
                      <li className="mb-1">
                        <a href="#">Offline</a>
                      </li>
                    </ul>
                  </Col>
                  <Col lg={3} md={6} className="mb-4">
                    <h5 className="mb-3">About</h5>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-1">
                        <a href="#">Our Story</a>
                      </li>
                      <li className="mb-1">
                        <a href="#">Benefit</a>
                      </li>
                      <li className="mb-1">
                        <a href="#">Team</a>
                      </li>
                      <li className="mb-1">
                        <a href="#">Careers</a>
                      </li>
                    </ul>
                  </Col>
                  <Col lg={3} md={6} className="mb-4">
                    <h5 className="mb-3">Follow Us</h5>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-1">
                        <a href="#">
                          <img
                            src={facebookLogo}
                            width="10"
                            height="20"
                            alt="Facebook Logo"
                            style={{ marginRight: "18px" }}
                          />
                          Facebook
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="#">
                          <img
                            src={twitterLogo}
                            width="20"
                            height="20"
                            alt="Twitter Logo"
                            style={{ marginRight: "8px" }}
                          />
                          Twitter
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="#">
                          <img
                            src={instagramLogo}
                            width="20"
                            height="20"
                            alt="Instagram Logo"
                            style={{ marginRight: "11px" }}
                          />
                          Instagram
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <Row style={{ textAlign: "center", padding: "1rem" }}>
                  Copyright &copy; 2023. Pemrograman Web
                </Row>
              </div>
            </footer>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
