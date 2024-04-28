import React from 'react';

const SearchBar = ({ handleSearch }) => {
  return (
    <input
    className='search'
      type="text"
      placeholder="Search transactions..."
      onChange={e => handleSearch(e.target.value)}
    />
  );
};

export default SearchBar;