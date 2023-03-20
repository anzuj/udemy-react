import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  const handleSubmit = (term) => {
    console.log("Do a search with " + term);
  };

  return (
    <div>
      <h1>App</h1>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
