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
          src={
            imageUrl ||
            'https://images.pexels.com/photos/936112/pexels-photo-936112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
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
