import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import "./SearchBar.css"
import { Link } from "react-router-dom"

function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([])

  const fetchdata = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue); // Moved this up to update the query immediately

    if (inputValue.trim() === '') {
      setResults([]); // Clear results when input is empty
      return;
    }

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${inputValue}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        };
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setResults([]); // Handle fetch errors by clearing results
      });
  }

  return (
    <div className="taskbar">
      <div className="search-box">
        <input type="text" placeholder="Search..." value={query} onChange={fetchdata} />
        <button type="button"><FaSearch /></button>
      </div>
      <div className='searchcontainer'>
        {results.length > 0 && (
          <ul className='ul'>
            {results.map((movie) => (
              <Link key={movie.id} to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
                <li>{movie.title}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
