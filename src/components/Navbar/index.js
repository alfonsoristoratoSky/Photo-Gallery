import React from 'react';
import { Link } from 'react-router-dom';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
NavEnvelope, NavInsta
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
        <NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/art' activeStyle>
			Art
		</NavLink>

		
		

		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavLink as="a" href="mailto:alfonso.ristorato@sky.uk" target='_blank' activeStyle >
				<NavEnvelope />
			</NavLink>		
			<NavLink as="a" href="https://instagram.com" target='_blank' activeStyle > 
				<NavInsta />
			</NavLink>
		</NavBtn>

		
		
		{/* <NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn> */}
	</Nav>
	</>
);
};

export default Navbar;
