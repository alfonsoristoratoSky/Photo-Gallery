import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Nav } from 'react-bootstrap';
import {

NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
NavEnvelope, NavInsta
} from './NavbarElements';

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
	// <>
	// <Nav expand='lg'>
		
	// 	<Bars/>
		

	// 	<NavMenu>
    //     <NavLink to='/' activeStyle>
	// 		Home
	// 	</NavLink>
	// 	<NavLink to='/about' activeStyle>
	// 		About
	// 	</NavLink>
	// 	<NavLink to='/art' activeStyle>
	// 		Art
	// 	</NavLink>

		
		

	// 	{/* Second Nav */}
	// 	{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
	// 	</NavMenu>
	// 	<NavBtn>
	// 	<NavLink as="a" href="mailto:alfonso.ristorato@sky.uk" target='_blank' activeStyle >
	// 			<NavEnvelope />
	// 		</NavLink>		
	// 		<NavLink as="a" href="https://instagram.com" target='_blank' activeStyle > 
	// 			<NavInsta />
	// 		</NavLink>
	// 	</NavBtn>

		
		
	// 	{/* <NavBtn>
	// 	<NavBtnLink to='/signin'>Sign In</NavBtnLink>
	// 	</NavBtn> */}
	// </Nav>
	// </>
);
};

export default NavbarElem;
