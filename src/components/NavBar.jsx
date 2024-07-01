import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" id='navbar'>
          <Container fluid>
            <Navbar.Brand href="#home" id='header'>CRUD Operations</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
