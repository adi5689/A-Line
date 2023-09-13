import React, { useState } from 'react';

const G = () => {
  const [showSpecifications, setShowSpecifications] = useState(false);

  const toggleSpecifications = () => {
    setShowSpecifications(!showSpecifications);
  };

  return (
    <div className='container-g' id='f40'>
      <div className={`content-box ${showSpecifications ? 'show-specifications' : ''}`}>
        <div className='content'>
          <h1>Ferrari F40</h1>
          <button onClick={toggleSpecifications}>
            {showSpecifications ? 'Hide Specifications' : 'Show Specifications'}
          </button>
          <div className='specifications'>
            <h2>Car Specifications</h2>
            <ul>
              <li>Model: Ferrari F40</li>
              <li>Engine: 2.9L twin-turbo V8</li>
              <li>Horsepower: 471 HP</li>
              <li>Top Speed: 321 kmph</li>
              <li>0-100 kmph: 4.7 seconds</li>
              <li>Price: Rupees 8.2 Cr </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default G;
