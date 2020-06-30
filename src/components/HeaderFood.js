import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './HeaderFood.css';

import pfp from '../images/pfp.png';

function HeaderFood(props) {
  return (
    <div id='HeaderFood'>
      <Row>
        {(props.user !== '') ? 
          <>
            <Col><h1>Welcome Back, <br /> <span id='name'>{props.user.name}</span></h1></Col>
            <Col xs='auto'><img src={pfp} alt='profile pic' /></Col>
          </>: 
          <Col><h1>Log in to see your feed...</h1></Col>
        }
      </Row>
    </div>
  );
}

export default HeaderFood;
