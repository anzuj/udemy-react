import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropDownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
  ];

  return (
    <div>
      Main selection: {selection ? selection.label : "none"}
      <Dropdown options={options} value={selection} onChange={handleSelect}></Dropdown>
    </div>
  );
}

export default DropDownPage;
