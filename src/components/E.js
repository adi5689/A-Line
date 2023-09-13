import React, { useState } from 'react';

const E = () => {
  const [showSpecifications, setShowSpecifications] = useState(false);

  const toggleSpecifications = () => {
    setShowSpecifications(!showSpecifications);
  };

  return (
    <div className='container-e' id='cgt'>
      <div className={`content-box ${showSpecifications ? 'show-specifications' : ''}`}>
        <div className='content'>
          <h1>Porsche Carrera GT</h1>
          <button onClick={toggleSpecifications}>
            {showSpecifications ? 'Hide Specifications' : 'Show Specifications'}
          </button>
          <div className='specifications'>
            <h2>Car Specifications</h2>
            <ul>
              <li>Model: Porsche Carrera GT</li>
              <li>Engine: 5.7L V10</li>
              <li>Horsepower: 603 HP</li>
              <li>Top Speed: 330 kmph</li>
              <li>0-100 kmph: 3.57 seconds</li>
              <li>Price: Rupees 90 Lakhs </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default E;