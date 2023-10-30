import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

function NavbarForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");
// console.log(isAuthenticated, 'is authenticated');
  function handleLogout(e) {
    // Log the current value of isAuthenticated (Debugging)
    // console.log("Before Logout:", localStorage.getItem('isAuthenticated'));
  
    // Set isAuthenticated to false
    localStorage.setItem("isAuthenticated", false);
    
    // Log the updated value of isAuthenticated (Debugging)
    // console.log("After Logout:", localStorage.getItem('isAuthenticated'));
  
    // Redirect to the login page
    navigate("/");
  }
  

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
              className={`rounded me-4 ${
                location.pathname === "/" ? "active bg-primary text-white" : ""
              }`}
              id="nav-link"
              as={Link}
              to="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`rounded me-4 ${
                location.pathname === "/product"
                  ? "active bg-primary text-white"
                  : ""
              }`}
              id="nav-link"
              as={Link}
              to="/product"
            >
              Product
            </Nav.Link>
            <Nav.Link className="rounded me-4" id="nav-link" href="#">
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
            {isAuthenticated === "true" ? (
              <Nav.Link className="rounded me-4 btn-danger text-white" id="nav-link" onClick={handleLogout}>
                Logout
              </Nav.Link>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarForm;
