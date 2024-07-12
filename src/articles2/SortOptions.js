import React from 'react';

const SortOptions = ({ onSortChange }) => {
  const handleSelectChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" onChange={handleSelectChange}>
        <option value="title">Title</option>
        <option value="date">Date</option>
      </select>
    </div>
  );
};

export default SortOptions;
