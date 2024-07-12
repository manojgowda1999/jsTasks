import React, { useState } from 'react';
// import './Child.css'

const Child = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddItem(newItem); 
    setNewItem(''); 
  };

  return (
    <form onSubmit={handleSubmit}>

<label htmlFor="newItem" className='test-case' >New Item:</label>
     
     <button type="submit">Add Item</button>

<input
        type="text"
        id="newItem"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
     
    </form>
  );
};

export default Child;
