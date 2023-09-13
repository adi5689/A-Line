import React, { useState } from 'react';

const L = () => {
  const [showSpecifications, setShowSpecifications] = useState(false);

  const toggleSpecifications = () => {
    setShowSpecifications(!showSpecifications);
  };

  return (
    <div className='container-l' id='carrera'>
      <div className={`content-box ${showSpecifications ? 'show-specifications' : ''}`}>
        <div className='content'>
          <h1>Porsche 911 Carrera</h1>
          <button onClick={toggleSpecifications}>
            {showSpecifications ? 'Hide Specifications' : 'Show Specifications'}
          </button>
          <div className='specifications'>
            <h2>Car Specifications</h2>
            <ul>
              <li>Model: Porsche 911 Carrera</li>
              <li>Engine: twin-turbo 3L flat-6 </li>
              <li>Horsepower: 443 HP</li>
              <li>Top Speed: 323 kmph</li>
              <li>0-100 kmph: 4.2 seconds</li>
              <li>Price: Rupees 1.99 Cr </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default L;
