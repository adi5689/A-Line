import React, { useState } from 'react';

const K = () => {
  const [showSpecifications, setShowSpecifications] = useState(false);

  const toggleSpecifications = () => {
    setShowSpecifications(!showSpecifications);
  };

  return (
    <div className='container-k' id='ae86'>
      <div className={`content-box ${showSpecifications ? 'show-specifications' : ''}`}>
        <div className='content'>
          <h1>Toyota AE86 Trueno</h1>
          <button onClick={toggleSpecifications}>
            {showSpecifications ? 'Hide Specifications' : 'Show Specifications'}
          </button>
          <div className='specifications'>
            <h2>Car Specifications</h2>
            <ul>
              <li>Model: Toyota AE86 Trueno</li>
              <li>Engine: 1.6L inline 4 16V DOHC</li>
              <li>Horsepower: 122 HP</li>
              <li>Top Speed: 200 kmph</li>
              <li>0-100 kmph: 8.5 seconds</li>
              <li>Price: Rupees 20 Lakhs </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default K;
