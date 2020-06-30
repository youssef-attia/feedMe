import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../images/spoon.png'
import { Link } from "@reach/router";

import './NavbarTop.css';


function NavbarTop(props) {
  return (
      <div>
        <Navbar className='navbar-dark' id='navBar' expand='lg'>
          <Navbar.Brand href='#home'><h3><img src={logo} alt='logo'/><Link to="/feed">FeedMe</Link></h3></Navbar.Brand>
          <Navbar.Toggle id='toggleNav' aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
            <Nav.Link><Link to="/feed">Feed</Link></Nav.Link>
              {(props.user!=='')?
              <>
                <Nav.Link href='#home'><Link to="/">Profile</Link></Nav.Link>
                <Nav.Link href='#link' onClick={()=>props.setUser('')}><Link to="/feed">Sign Out</Link></Nav.Link>
              </>:
              <Nav.Link href='#link' onClick={props.popup}><Link to="/">Sign In</Link></Nav.Link>
              }
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
  )
}

export default NavbarTop;