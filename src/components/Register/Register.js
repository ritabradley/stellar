import React, { useState } from 'react';
import './Register.css';

const Register = ({ onRouteChange, loadUser }) => {
  let [registerName, setName] = useState('');
  let [registerEmail, setEmail] = useState('');
  let [registerPassword, setPassword] = useState('');

  const onNameChange = e => {
    setName((registerName = e.target.value));
  };
  const onEmailChange = e => {
    setEmail((registerEmail = e.target.value));
  };
  const onPasswordChange = e => {
    setPassword((registerPassword = e.target.value));
  };

  const onRegisterSubmit = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: registerName,
        email: registerEmail,
        password: registerPassword,
      }),
    })
      .then(response => response.json())
      .then(user => {
        if (user) {
          loadUser(user);
          onRouteChange('home');
          console.log(registerName, registerEmail, registerPassword);
        }
      });
  };

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div
        className='py-4 text-center card bg-transparent shadow text-light'
        style={{ width: '18rem' }}>
        <div>
          <legend className='display-4 mb-4'>Register</legend>
          <div className='form-group mx-4'>
            <label htmlFor='name'>Name</label>
            <input
              onChange={onNameChange}
              type='text'
              className='form-control'
              id='name'
              placeholder='Enter name'
            />
          </div>
          <div className='form-group mx-4'>
            <label htmlFor='email'>Email address</label>
            <input
              onChange={onEmailChange}
              type='email'
              className='form-control'
              id='email'
              placeholder='Enter email'
            />
          </div>
          <div className='form-group mx-4'>
            <label htmlFor='password'>Password</label>
            <input
              onChange={onPasswordChange}
              type='password'
              className='form-control'
              id='password'
              placeholder='Password'
            />
          </div>
          <div>
            <button
              onClick={onRegisterSubmit}
              type='submit'
              className='btn custom-button'>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
