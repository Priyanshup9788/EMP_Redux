import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        
        <Nav.Link ><Link to="/" className='text-decoration-none fw-normal text-light'>Add</Link></Nav.Link>
        <Nav.Link ><Link to="/view" className='text-decoration-none fw-normal text-light'>View</Link></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header