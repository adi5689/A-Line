import React, { useState } from 'react';

const D = () => {
  const [showSpecifications, setShowSpecifications] = useState(false);

  const toggleSpecifications = () => {
    setShowSpecifications(!showSpecifications);
  };

  return (
    <div className='container-d' id='murcielago'>
      <div className={`content-box ${showSpecifications ? 'show-specifications' : ''}`}>
        <div className='content'>
          <h1>Lamborghini Murcielago SV</h1>
          <button onClick={toggleSpecifications}>
            {showSpecifications ? 'Hide Specifications' : 'Show Specifications'}
          </button>
          <div className='specifications'>
            <h2>Car Specifications</h2>
            <ul>
              <li>Model: Lamborghini Murcielago SV</li>
              <li>Engine: 6.5L V12</li>
              <li>Horsepower: 670 HP</li>
              <li>Top Speed: 342 kmph</li>
              <li>0-100 kmph: 3.2 seconds</li>
              <li>Price: Rupees 3.6 Cr </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default D;