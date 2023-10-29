import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "../css/About.style.css";
import app from "../Assets/app.png";
import milab from "../Assets/milab.png";
import App from "../Assets/UIApp.png";

function AboutUs() {
  return (
    <Container style={{ marginTop: "70px", marginBottom: "100px" }}>
      <Row style={{ marginBottom: "100px" }}>
        <Col md={6}>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={app} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={milab} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={App} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={6}>
          <section className="text-right">
            <div className="container">
              <div className="row">
                <div>
                  <h2>About Us</h2>
                  <p className="centered-text">
                    i-Lab is an integrated system that can support practicum
                    activities in the Department of Informatics at the
                    University of Muhammadiyah Malang, both for practitioners,
                    lecturers, and assistants.
                  </p>
                  <p className="centered-text">
                    i-Lab is the work of students of the University of
                    Muhammadiyah Malang and has been around since 2012 and has
                    gone through many changes since then
                  </p>
                  <p className="centered-text">
                    i-Lab merupakan sistem terintegrasi yang dapat menunjang
                    kegiatan praktikum jurusan Informatika Universitas
                    Muhammadiyah Malang, baik untuk praktikan, dosen maupun
                    asisten.
                  </p>
                  <a
                    href="https://infotech.umm.ac.id"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Col>
      </Row>
      <Row>
        <div className="col-sm-4">
          <ul className="icon-list animate-group">
            <li>
              <div className="icon-list-content">
                <div className="circle-icon" style={{ backgroundColor: "red" }}>
                  <i className="fa-solid fa-calendar-days"></i>
                </div>
                <div className="icon-text">
                  <h4>Schedule</h4>
                  <p>
                    Fitur ini memudahkan kita dalam melihat jadwal praktikum,
                    nomor meja, serta ruang lab tempat praktikum dilaksanakan.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-sm-4">
          <ul className="icon-list animate-group">
            <li>
              <div className="icon-list-content">
                <span
                  className="circle-icon"
                  style={{ backgroundColor: "blue" }}
                >
                  <i className="fa-regular fa-paper-plane"></i>{" "}
                </span>
                <div className="icon-text">
                  <h4>Grade</h4>
                  <p>
                    Pengecekan nilai menjadi lebih mudah dengan fitur ini. Semua
                    nilai pada setiap modul akan direkap dan ditampilkan dalam
                    satu nilai.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-sm-4">
          <ul className="icon-list animate-group">
            <li>
              <div className="icon-list-content">
                <span
                  className="circle-icon"
                  style={{ backgroundColor: "green" }}
                >
                  <i className="fa-regular fa-book"></i>
                </span>
                <div className="icon-text">
                  <h4>Left Stuff</h4>
                  <p>
                    Setiap barang dari praktikkan yang tertinggal di lab akan
                    diumumkan melalui fitur left stuff.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Row>
    </Container>
  );
}

export default AboutUs;
