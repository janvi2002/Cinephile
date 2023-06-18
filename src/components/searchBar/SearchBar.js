import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import "./SearchBar.css"

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Perform search action with query
    console.log(`Searching for ${query}`);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="taskbar">
      <div className="search-box">
        <input type="text" placeholder="Search..." value={query} onChange={handleInputChange} onKeyDown={handleKeyDown} />
        <button type="button" onClick={handleSearch}><FaSearch /></button>
      </div>
    </div>
  );
}

export default SearchBar;