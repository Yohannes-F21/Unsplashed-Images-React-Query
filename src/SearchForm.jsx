import React from "react";
import { useState } from "react";

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(searchInput);
    setSearchInput("");
    // const searchValue = e.target.elements.search.value; // we can use uncontrolled input for easy form handling
    // console.log(searchValue);
  };
  return (
    <section>
      <h1 className="title my-2">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="cat"
          name="search"
          className="form-input search-input "
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button
          type="submit"
          className="search-button p-2 bg-[#645CFF] rounded  "
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
