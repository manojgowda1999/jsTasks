import React, { useState } from 'react';
import './Counter.css'
// import './Dashboard.css'


function Counter() {
  
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <div className='counter-container'>
      <h1>Counter: {count}</h1>
      <button className='counter-btn' onClick={handleIncrement}>Increment</button>
      <button className='counter-btn' onClick={handleDecrement}>Decrement</button>
      <button className='counter-btn' onClick={handleReset}>Reset</button>
    </div>
    </div>
  );
}

export default Counter;