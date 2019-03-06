import React from 'react';
import './FaceRecognizer.css';
const FaceRecognizer = ({ imageUrl, box }) => {
  return (
    <div className='d-flex justify-content-center m-1'>
      <div className='position-absolute mt-2'>
        <img
          id='inputimage'
          alt='uploaded by user'
          width='500px'
          height='auto'
          src={
            imageUrl ||
            'https://images.unsplash.com/photo-1551214012-84f95e060dee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
          }
        />
        <div
          className='bounding-box'
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        />
      </div>
    </div>
  );
};

export default FaceRecognizer;
