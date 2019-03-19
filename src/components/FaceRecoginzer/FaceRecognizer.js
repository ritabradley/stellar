import React from 'react';
import './FaceRecognizer.css';
const FaceRecognizer = ({ imageUrl, box }) => {
  return (
    <div className='d-flex justify-content-center m-1'>
      <div className='position-absolute mt-2'>
        <img
          id='inputimage'
          width='500px'
          height='auto'
          alt=''
          src={imageUrl}
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
