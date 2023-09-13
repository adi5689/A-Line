import React, { useState } from 'react';

const I = () => {
  const [showSpecifications, setShowSpecifications] = useState(false);

  const toggleSpecifications = () => {
    setShowSpecifications(!showSpecifications);
  };

  return (
    <div className='container-i' id='supra'>
      <div className={`content-box ${showSpecifications ? 'show-specifications' : ''}`}>
        <div className='content'>
          <h1>Toyota Supra MK4</h1>
          <button onClick={toggleSpecifications}>
            {showSpecifications ? 'Hide Specifications' : 'Show Specifications'}
          </button>
          <div className='specifications'>
            <h2>Car Specifications</h2>
            <ul>
              <li>Model: Toyota Supra MK4</li>
              <li>Engine: 2JZ-GTE 3.0-litre twin-turbocharged straight 6 </li>
              <li>Horsepower: 280 HP</li>
              <li>Top Speed: 277 kmph</li>
              <li>0-100 kmph: 4.9 seconds</li>
              <li>Price: Rupees 59 Lakhs </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default I;
