import React, { useState } from 'react';

const F = () => {
  const [showSpecifications, setShowSpecifications] = useState(false);

  const toggleSpecifications = () => {
    setShowSpecifications(!showSpecifications);
  };

  return (
    <div className='container-f' id='r34'>
      <div className={`content-box ${showSpecifications ? 'show-specifications' : ''}`}>
        <div className='content'>
          <h1>Nissan GTR R34(Godzilla)</h1>
          <button onClick={toggleSpecifications}>
            {showSpecifications ? 'Hide Specifications' : 'Show Specifications'}
          </button>
          <div className='specifications'>
            <h2>Car Specifications</h2>
            <ul>
              <li>Model: Nissan GTR R34(Godzilla)</li>
              <li>Engine:  twin-turbocharged 2.6L inline-6</li>
              <li>Horsepower: 280 HP</li>
              <li>Top Speed: 250 kmph</li>
              <li>0-100 kmph: 5.2 seconds</li>
              <li>Price: Rupees 26 lakhs(pre-tax) </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default F;