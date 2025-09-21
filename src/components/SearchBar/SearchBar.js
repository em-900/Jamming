import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");
  const submit = (e) => {
    e.preventDefault();
    const q = term.trim();
    if (q) onSearch(q);
  };
  return (
    <form onSubmit={submit}>
      <input
        placeholder="Enter an Song or Artist"
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      />
      <button type="submit" disabled={!term.trim()}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
