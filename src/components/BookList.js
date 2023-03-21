import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

function BookList({ books, onDelete , onEdit}) {
  const {count, incrementCount} = useContext(BooksContext)

  const renderedBooks = books.map((book) => {
    return <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit}/>;
  });
  return <div className="book-list">
    <div>{count} <br/> <button onClick={incrementCount}>Click</button> </div>
    {renderedBooks}</div>;
}

export default BookList;
