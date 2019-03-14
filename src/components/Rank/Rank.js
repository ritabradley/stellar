import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='text-light'>
        <h4>{`${name}, your current entry count is...`}</h4>
      </div>
      <div className='text-light'>
        <h2>{entries}</h2>
      </div>
    </div>
  );
};

export default Rank;
