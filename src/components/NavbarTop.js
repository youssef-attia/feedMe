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
        <Link to="/feed"><h3><img src={logo} alt='logo'/>FeedMe</h3></Link>
          <Navbar.Toggle id='toggleNav' aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Link to="/feed">Feed</Link>
              {(props.user!=='')?
              <>
                <Link to="/">Profile</Link>
                <Link onClick={()=>props.setUser('')} to="/feed">Sign Out</Link>
              </>:
              // eslint-disable-next-line
              <a onClick={props.popup} >Sign In</a>
              }
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
  )
}

export default NavbarTop;