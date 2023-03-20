import "./App.css";
import AnimalShow from "./AnimalShow";
import { useState } from "react";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    //creates a new array from existing one, plus a new random animal
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    //render AnimalShow component with prop "type" passed into it
    return <AnimalShow type={animal} key={index}/>
  })

  return (
    <div className="app">
      <button onClick={handleClick}>Add animal</button>
      <div>{renderedAnimals}</div>
    </div>
  );
}

export default App;
