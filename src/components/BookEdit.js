import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
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
