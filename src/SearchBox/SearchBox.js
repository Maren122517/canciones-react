import React from 'react';

const SearchBox = ({ onSearchChange }) => {
  const handleChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      className="search-box"
      onChange={handleChange}
    />
  );
};

export default SearchBox;
