import { useState } from "react";
import useBooksContext from "../hooks/use-hooks-context";

function BookCreate() {
  const { createBook } = useBooksContext()

  const [title, setTitle] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
      </form>
      <button className="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default BookCreate;
