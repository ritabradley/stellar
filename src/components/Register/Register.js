import React from 'react';
import './Register.css';

const Register = ({ onRouteChange }) => {
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
              type='text'
              className='form-control'
              id='name'
              placeholder='Enter name'
            />
          </div>
          <div className='form-group mx-4'>
            <label htmlFor='email'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='email'
              placeholder='Enter email'
            />
          </div>
          <div className='form-group mx-4'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control'
              id='password'
              placeholder='Password'
            />
          </div>
          <div>
            <button
              onClick={() => onRouteChange('home')}
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
