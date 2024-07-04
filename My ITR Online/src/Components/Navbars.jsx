import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Image,
  Row,
  Button,
  NavDropdown,
} from "react-bootstrap";

function CustomNavbar() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      
      className="justify-content-between mb-5 shadow-sm shadow"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home">
          <Image
            src="https://www.myitronline.com/build/assets/myitronline-logo-BscHGXkW.svg"
            style={{ width: "15rem" }}
            alt="Logo"
          />
        </Navbar.Brand>

        {/* Navigation Links */}
        <Nav className="mx-auto">
          <NavDropdown title="e-Filing Services" id="efiling-dropdown">
            <NavDropdown.Item href="#/action-1">Action 1</NavDropdown.Item>
            <NavDropdown.Item href="#/action-2">Action 2</NavDropdown.Item>
            <NavDropdown.Item href="#/action-3">Action 3</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Start up A Business" id="startup-dropdown">
            <NavDropdown.Item href="#/action-1">Action 1</NavDropdown.Item>
            <NavDropdown.Item href="#/action-2">Action 2</NavDropdown.Item>
            <NavDropdown.Item href="#/action-3">Action 3</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Tax & Compliance" id="tax-dropdown">
            <NavDropdown.Item href="#/action-1">Action 1</NavDropdown.Item>
            <NavDropdown.Item href="#/action-2">Action 2</NavDropdown.Item>
            <NavDropdown.Item href="#/action-3">Action 3</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Trademark & Copyright" id="trademark-dropdown">
            <NavDropdown.Item href="#/action-1">Action 1</NavDropdown.Item>
            <NavDropdown.Item href="#/action-2">Action 2</NavDropdown.Item>
            <NavDropdown.Item href="#/action-3">Action 3</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Guides" id="guides-dropdown">
            <NavDropdown.Item href="#/action-1">Action 1</NavDropdown.Item>
            <NavDropdown.Item href="#/action-2">Action 2</NavDropdown.Item>
            <NavDropdown.Item href="#/action-3">Action 3</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        {/* Login/Sign Up Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button
              variant="success"
              style={{ backgroundColor: "#006d07", color: "white" }}
            >
              Login / Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
