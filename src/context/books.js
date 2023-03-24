import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();
function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  const stableFetchBooks =  useCallback(fetchBooks, [])

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, { title: newTitle });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...books, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const valueToShare = { books, deleteBookById, editBookById, createBook, stableFetchBooks };

  return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>;
}

export { Provider };
export default BooksContext;

//import BooksContext, { Provider } from ...
