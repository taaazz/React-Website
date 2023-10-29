import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Homepage() {
  return (
    <div>
      <div className="hero">
        <Container>
          <Row>
            <Col>
              <h1>Selamat Datang</h1>
              <p>Di Website Praktikum Pemrograman Website</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Homepage;
