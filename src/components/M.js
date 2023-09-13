import React, { useState } from 'react';

const M = () => {
  const [showSpecifications, setShowSpecifications] = useState(false);

  const toggleSpecifications = () => {
    setShowSpecifications(!showSpecifications);
  };

  return (
    <div className='container-m' id='db11'>
      <div className={`content-box ${showSpecifications ? 'show-specifications' : ''}`}>
        <div className='content'>
          <h1>Aston Martin DB11</h1>
          <button onClick={toggleSpecifications}>
            {showSpecifications ? 'Hide Specifications' : 'Show Specifications'}
          </button>
          <div className='specifications'>
            <h2>Car Specifications</h2>
            <ul>
              <li>Model: Aston Martin DB11</li>
              <li>Engine: 5.2 L V12</li>
              <li>Horsepower: 630 HP</li>
              <li>Top Speed: 335 kmph</li>
              <li>0-100 kmph: 4 seconds</li>
              <li>Price: Rupees  4.20 Cr </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default M;
