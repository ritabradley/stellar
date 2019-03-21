import React, { useState } from 'react';
import './Register.css';

const Register = ({ onRouteChange, loadUser }) => {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const onNameChange = e => {
    setName((name = e.target.value));
  };
  const onEmailChange = e => {
    setEmail((email = e.target.value));
  };
  const onPasswordChange = e => {
    setPassword((password = e.target.value));
  };

  const onRegisterSubmit = () => {
    fetch('https://sleepy-crag-47754.herokuapp.com/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          loadUser(user);
          onRouteChange('home');
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
              required
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
              required
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
              required
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
