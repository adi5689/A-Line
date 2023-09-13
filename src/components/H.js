import React, { useState } from 'react';

const H = () => {
  const [showSpecifications, setShowSpecifications] = useState(false);

  const toggleSpecifications = () => {
    setShowSpecifications(!showSpecifications);
  };

  return (
    <div className='container-h' id='r8'>
      <div className={`content-box ${showSpecifications ? 'show-specifications' : ''}`}>
        <div className='content'>
          <h1>Audi R8</h1>
          <button onClick={toggleSpecifications}>
            {showSpecifications ? 'Hide Specifications' : 'Show Specifications'}
          </button>
          <div className='specifications'>
            <h2>Car Specifications</h2>
            <ul>
              <li>Model: Audi R8</li>
              <li>Engine: 5.2L FSI DOHC V10</li>
              <li>Horsepower: 533 HP</li>
              <li>Top Speed: 316 kmph</li>
              <li>0-100 kmph: 3.9 seconds</li>
              <li>Price: Rupees 2.76 Cr </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default H;
