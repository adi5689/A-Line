import React, { useState } from 'react';

const A = () => {
  const [showSpecifications, setShowSpecifications] = useState(false);

  const toggleSpecifications = () => {
    setShowSpecifications(!showSpecifications);
  };

  return (
    <div className='container-a' id='mustang'>
      <div className={`content-box ${showSpecifications ? 'show-specifications' : ''}`}>
        <div className='content'>
          <h1>Ford Mustang GT500</h1>
          <button onClick={toggleSpecifications}>
            {showSpecifications ? 'Hide Specifications' : 'Show Specifications'}
          </button>
          <div className='specifications'>
            <h2>Car Specifications</h2>
            <ul>
              <li>Model: Ford Mustang GT500</li>
              <li>Engine: 5.2L V8</li>
              <li>Horsepower: 760 HP</li>
              <li>Top Speed: 325 kmph</li>
              <li>0-100 kmph: 3.5 seconds</li>
              <li>Price: Rupees 84 Lakhs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default A;