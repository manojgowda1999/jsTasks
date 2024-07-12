import React, { useState } from 'react';
import './Products.css'

const SearchInput = ({ onSearchChange }) => {
  const [term, setTerm] = useState('');

  const handleChange = (event) => {
    setTerm(event.target.value);
    onSearchChange(event.target.value); 
  };

  return (
    <div> 
        <div className='main-container'>

        
      <label htmlFor="search">Search for the Products:</label>
      <input
        type="text"
        className='input-search form-control'
        id="search"
        value={term}
        onChange={handleChange}
      />
    </div>
    </div>
  );
};

export default SearchInput;
