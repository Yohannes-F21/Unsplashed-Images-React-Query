import React from "react";
import { useState } from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  // const [searchInput, setSearchInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
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
          // onChange={(event) => setSearchInput(event.target.value)}
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
