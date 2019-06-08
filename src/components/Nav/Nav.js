import React from 'react';
import './Nav.css';

const Nav = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className='d-flex justify-content-end nav'>
        <p
          onClick={() => onRouteChange('signout')}
          className='nav-item p-3 text-light'>
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav className='d-flex justify-content-end nav'>
        <p
          onClick={() => onRouteChange('signin')}
          className='nav-item p-3 text-light'>
          Sign In
        </p>
        <p
          onClick={() => onRouteChange('register')}
          className='nav-item p-3 orange'>
          Register
        </p>
      </nav>
    );
  }
};

export default Nav;
