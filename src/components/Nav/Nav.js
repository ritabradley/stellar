import React from 'react';

const Nav = ({ onRouteChange }) => {
  return (
    <nav className='d-flex justify-content-end nav'>
      <a
        onClick={() => onRouteChange('signin')}
        className='nav-item p-3 text-light'
        href='/'>
        Sign Out
      </a>
    </nav>
  );
};

export default Nav;
