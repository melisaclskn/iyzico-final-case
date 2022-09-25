import React from "react";
import { useState } from "react";
function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <div>{query}</div>
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </div>
  );
}

export default SearchBar;
