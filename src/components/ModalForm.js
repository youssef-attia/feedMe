import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

import './ModalForm.css';

function ModalForm(props) {
  const [SUUName, setSUUName] = useState('');
  const [SUName, setSUName] = useState('');
  const [SUPass, setSUPass] = useState('');
  const [SUEmail, setSUEmail] = useState('');

  function handleSUSubmit(e) {
    e.preventDefault();
    const SUOBject = {
      username: SUUName,
      name: SUName,
      password: SUPass,
      email: SUEmail,
    };
    console.log(SUOBject);
    axios.post('http://localhost:5000/users/add', SUOBject).then((res) => {
      console.log(res);
    });
    e.target.reset();
    props.handleClose();
  }

  const [SIPass, setSIPass] = useState('');
  const [SIEmail, setSIEmail] = useState('');

  function handleSISubmit(e) {
    e.preventDefault();
    const SIOBject = {
      email: SIEmail,
      password: SIPass,
    };
    var serverUser;
    console.log(SIOBject);
    axios.get('http://localhost:5000/users/').then((res) => {
      res.data.map((userEl) => {
        if(userEl.email === SIEmail){
          serverUser = userEl
        }
      });
      if (serverUser.password === SIOBject.password) {
        props.setUser(serverUser)
      }else{
        alert('Incorrect Password')
      }
    })
    e.target.reset();
    props.handleClose();
  }

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Body>
        <div className='form'>
          <form className='register-form' onSubmit={handleSUSubmit}>
            <input
              id='signUpUName'
              type='text'
              placeholder='username'
              onChange={(e) => {
                setSUUName(e.target.value);
              }}
            />
            <input
              id='signUpName'
              type='text'
              placeholder='name'
              onChange={(e) => {
                setSUName(e.target.value);
              }}
            />
            <input
              id='signUpPass'
              type='password'
              placeholder='password'
              onChange={(e) => {
                setSUPass(e.target.value);
              }}
            />
            <input
              id='signUpEmail'
              type='text'
              placeholder='email address'
              onChange={(e) => {
                setSUEmail(e.target.value);
              }}
            />
            <button type='submit'>create</button>
          </form>
          <form className='login-form' onSubmit={handleSISubmit}>
            <input
              id='signInEmail'
              type='text'
              placeholder='username'
              onChange={(e) => {
                setSIEmail(e.target.value);
              }}
            />
            <input
              id='signInPass'
              type='password'
              placeholder='password'
              onChange={(e) => {
                setSIPass(e.target.value);
              }}
            />
            <button type='submit'>login</button>
            <p className='message'>Not registered? Create an account</p>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalForm;
