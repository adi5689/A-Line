import React, { useState } from 'react';

const C = () => {
  const [showSpecifications, setShowSpecifications] = useState(false);

  const toggleSpecifications = () => {
    setShowSpecifications(!showSpecifications);
  };

  return (
    <div className='container-c' id='458'>
      <div className={`content-box ${showSpecifications ? 'show-specifications' : ''}`}>
        <div className='content'>
          <h1>Ferrari 458</h1>
          <button onClick={toggleSpecifications}>
            {showSpecifications ? 'Hide Specifications' : 'Show Specifications'}
          </button>
          <div className='specifications'>
            <h2>Car Specifications</h2>
            <ul>
              <li>Model: Ferrari 458</li>
              <li>Engine: 4.5L V8</li>
              <li>Horsepower: 562 HP</li>
              <li>Top Speed: 325 kmph</li>
              <li>0-100 kmph: 3.3 seconds</li>
              <li>Price: Rupees 3.86 Cr </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default C;
