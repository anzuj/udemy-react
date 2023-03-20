import "./App.css";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import { useState } from "react";

function App() {
  const handleSubmit = async (term) => {
    console.log("Do a search with " + term);
    const result = await searchImages(term);
    setImages(result);
  };

  const [images, setImages] = useState([]);

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
