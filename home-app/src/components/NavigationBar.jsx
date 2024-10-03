import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/styles.css';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
       <img src={'logo.png'} alt="Logo" className="navbar-logo" />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#blogs">Blogs</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
