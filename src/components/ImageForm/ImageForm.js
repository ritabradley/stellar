import React from 'react';
import 'hover.css';
import './ImageForm.css';

const ImageForm = ({ onInputChange, onDetectButtonSubmit }) => {
  return (
    <div>
      <p className='lead text-light'>
        {`Stellar's facial recognition system will detect faces in your photos. Try it out:`}
      </p>
      <div className='d-flex justify-content-center'>
        <div className='form d-flex justify-content-center w-50 p-4 rounded shadow-lg'>
          <input
            className='image-input border border-light rounded w-50 mr-3'
            type='text'
            onChange={onInputChange}
          />
          <button
            className='btn btn-outline-light detect-button hvr-grow'
            onClick={onDetectButtonSubmit}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageForm;
