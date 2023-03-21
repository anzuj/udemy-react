import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({ book, onSubmit }) {
  const { editBookById } = useContext(BooksContext);
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //to notify parent that edit mode can be toggled off
    onSubmit();
    editBookById(book.id, title);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="book-edit">
        <label>Edit title</label>
        <input className="input" value={title} onChange={handleChange} />
      </form>
      <button className="button is-primary" onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
}

export default BookEdit;
