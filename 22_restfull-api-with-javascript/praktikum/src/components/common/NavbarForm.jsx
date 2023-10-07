import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarForm() {
  return (
    <>
      <Navbar
        expand="lg"
        className="shadow navbar-expand-md navbar-light bg-white"
      >
        <Navbar.Brand as={Link} to="/" id="nav-brand" className="ms-4">
          Simple header
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" id="nav-content">
          <Nav.Link
              className="active bg-primary text-white rounded me-4"
              id="nav-link"
              as={Link}
              to="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="rounded me-4"
              id="nav-link"
              as={Link}
              to="/product"
            >
              Product
            </Nav.Link>
            <Nav.Link
              className="rounded me-4"
              id="nav-link"
              href="#"
            >
              Account
            </Nav.Link>
            <Nav.Link className="rounded me-4" id="nav-link" href="#">
              Pricing
            </Nav.Link>
            <Nav.Link className="rounded me-4" id="nav-link" href="#">
              FAQs
            </Nav.Link>
            <Nav.Link className="rounded me-4" id="nav-link" href="#">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarForm;
