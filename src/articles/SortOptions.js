import React, { useState } from 'react';

const SortOptions = ({ onSortChange }) => {
  const [selectedOption, setSelectedOption] = useState('date');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    onSortChange(event.target.value); // Call parent's function with new criteria
  };

  return (
    <div>
      <label htmlFor="sort">Sort By:</label>
      <select id="sort" value={selectedOption} onChange={handleChange}>
        <option value="date">Date (Newest First)</option>
        <option value="title">Title (A-Z)</option>
      </select>
    </div>
  );
};

export default SortOptions;
