import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import ilabLogo from "../Assets/logo-ilab.png";
import { Link } from "react-router-dom";
import "../Components/style/Navbar.style.css";

export const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-white fixed-top">
        <Container>
          <Navbar.Brand href="#home">
            <img src={ilabLogo} alt="logo" width="100" height="50" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-auto">
              <Nav.Link as={Link} to="/" activeClassName="active">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/AboutUs" activeClassName="active">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/Contact" activeClassName="active">
                Contact
              </Nav.Link>
            </Nav>
            <div className="d-flex">
              <Button variant="outline-dark" style={{ marginRight: "10px" }}>
                SIGN UP
              </Button>
              <Button variant="primary">LOG IN</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
