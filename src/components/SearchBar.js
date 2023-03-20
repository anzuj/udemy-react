import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div>
      <div>Enter search term</div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} autoFocus />
      </form>
    </div>
  );
}

export default SearchBar;
