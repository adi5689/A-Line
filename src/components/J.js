import React, { useState } from 'react';

const J = () => {
  const [showSpecifications, setShowSpecifications] = useState(false);

  const toggleSpecifications = () => {
    setShowSpecifications(!showSpecifications);
  };

  return (
    <div className='container-j' id='r35'>
      <div className={`content-box ${showSpecifications ? 'show-specifications' : ''}`}>
        <div className='content'>
          <h1>Nissan GTR R35</h1>
          <button onClick={toggleSpecifications}>
            {showSpecifications ? 'Hide Specifications' : 'Show Specifications'}
          </button>
          <div className='specifications'>
            <h2>Car Specifications</h2>
            <ul>
              <li>Model: Nissan GTR R35</li>
              <li>Engine: 3.8L twin-turbocharged VR38DETT V6</li>
              <li>Horsepower: 565 HP</li>
              <li>Top Speed: 330 kmph</li>
              <li>0-100 kmph: 2.7 seconds</li>
              <li>Price: Rupees 2.12 Cr </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default J;
