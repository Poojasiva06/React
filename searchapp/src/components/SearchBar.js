import React, { useState, useEffect } from "react";
import "./SearchBar.css"; 

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
      console.log("Searching for:", query);
    }, 500); // 

    return () => clearTimeout(handler); 
  }, [query]);

  return (
    <div className="search-container">
      <h2>🔍 Debounced Search</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search..."
        className="search-input"
      />
      <p className="search-results">
        Showing results for: <strong>{debouncedQuery}</strong>
      </p>
    </div>
  );
};

export default SearchBar;
