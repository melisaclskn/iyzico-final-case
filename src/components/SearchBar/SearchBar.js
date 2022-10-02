import React from "react";
import './SearchBar.css'
// eslint-disable-next-line react/prop-types
function SearchBar({setSearchInput,searchInput,allStarships,setFilteredResults,starships}) {
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      // eslint-disable-next-line react/prop-types
      const filteredData = allStarships.filter((item) => {
        return Object.values(item.name)
        .join("")
        .toLowerCase()
        // eslint-disable-next-line react/prop-types
        .includes(searchInput.toLowerCase()) || 
        Object.values(item.hyperdrive_rating)
        .join("")
        .toLowerCase()
        // eslint-disable-next-line react/prop-types
        .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(starships);
    }
  };
  return (
    <div className="search">
      <div className="search-box">
      <input
        type="text"
        placeholder="Search Starship..."
        onChange={(e) => searchItems(e.target.value)}
      >
      </input>
      </div>
     
    </div>
  );
}

export default SearchBar;
