import React, { useState } from 'react';
import './Signin.css';

const Signin = ({ onRouteChange, loadUser }) => {
  let [signInEmail, setEmail] = useState('');
  let [signInPassword, setPassword] = useState('');

  const onEmailChange = e => {
    setEmail((signInEmail = e.target.value));
  };
  const onPasswordChange = e => {
    setPassword((signInPassword = e.target.value));
  };

  const onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
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
          <legend className='display-4 mb-4'>Sign In</legend>
          <div className='form-group mx-4'>
            <label htmlFor='userEmail'>Email address</label>
            <input
              onChange={onEmailChange}
              type='email'
              className='form-control'
              id='userEmail'
              aria-describedby='emailHelp'
              placeholder='Enter email'
              required
            />
          </div>
          <div className='form-group mx-4'>
            <label htmlFor='userPassword'>Password</label>
            <input
              onChange={onPasswordChange}
              type='password'
              className='form-control'
              id='userPassword'
              placeholder='Password'
              required
            />
          </div>
          <div>
            <button
              onClick={onSubmitSignIn}
              type='submit'
              className='btn custom-button'>
              Sign in
            </button>
          </div>
          <div>
            <button
              onClick={() => onRouteChange('register')}
              type='button'
              className='btn btn-link orange'>
              register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
