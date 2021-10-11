import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

import { Nav } from 'react-bootstrap';
import { NavEnvelope, NavInsta} from './NavbarElements';

const NavbarElem = () => {
return (
	<Navbar bg='light' expand="md">
  <Container>
    <Navbar.Brand href="/">Artist Name</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
		<Nav.Link href="/art">Art</Nav.Link>
		<Nav.Link ahref="mailto:alfonso.ristorato@sky.uk" target='_blank' >
 			<NavEnvelope />
 		</Nav.Link>	
		<Nav.Link href="https://instagram.com" target='_blank' > 
 			<NavInsta />
 		</Nav.Link>
      </Nav>
    </Navbar.Collapse>

  </Container>
	
</Navbar>

);
};

export default NavbarElem;
