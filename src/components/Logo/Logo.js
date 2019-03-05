import React from 'react';
import Tilt from 'react-tilt';
import star from './star.svg';
import './Logo.css';

const Logo = () => {
  return (
    <div className='m-4 mt-0'>
      <Tilt
        className='Tilt rounded shadow'
        options={{ max: 75 }}
        style={{ height: 150, width: 150 }}>
        <div className='Tilt-inner p-3'>
          <img className='logo pt-3' alt='shooting star logo' src={star} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
