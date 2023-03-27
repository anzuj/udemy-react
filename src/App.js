import Dropdown from "./components/Dropdown";
import { useState } from "react";
function App() {
    const [selection, setSelection] = useState(null);

    const handleSelect= (option) => {
        setSelection(option);
      };

  const options = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
  ];

  return (
    <div>
      <Dropdown options={options} selection={selection} onSelect={handleSelect}></Dropdown>
    </div>
  );
}

export default App;
