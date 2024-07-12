import React, { useState } from 'react';
import Child from './Child';
import './Child.css'
import 'bootstrap/dist/css/bootstrap.min.css';




const Parent = () => {
  const [items, setItems] = useState([]); 

  const addItem = (newItem) => {
    setItems([...items, newItem]); 
  };

  return (
    <div>
  
 <div className='main-container' >
      <Child onAddItem={addItem} /> 

      <ul className='ul-list' >
        <p>Added items  </p>
         
        {items.map((item) => (
          <li className='list-items  form-control' key={item}>{item}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Parent;
