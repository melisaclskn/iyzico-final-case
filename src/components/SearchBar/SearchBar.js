import React from "react";
import './style.css'
// eslint-disable-next-line react/prop-types
function SearchBar({setSearchInput,searchInput,allStarships,setFilteredResults,starships}) {
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      // eslint-disable-next-line react/prop-types
      const filteredData = allStarships.filter((item) => {
        return Object.values(item)
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
      <i className="fa-solid fa-magnifying-glass"></i>
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
