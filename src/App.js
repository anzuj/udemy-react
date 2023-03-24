import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {
  const { stableFetchBooks } = useContext(BooksContext);

  //fetch on component first load only []
  useEffect(() => {
    stableFetchBooks();
  }, [stableFetchBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
