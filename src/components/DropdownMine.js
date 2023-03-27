import { useState } from "react";

export default function DropdownMine({ options }) {
  const [currentOption, setCurrentOption] = useState("");

  const handleSelectOption = (event) => {
    setCurrentOption(event.target.value);
  };

  const renderedOptions = options.map((option) => {
    return (
      <option value={option.value} key={option.value}>
        {option.label}
      </option>
    );
  });

  return (
    <div className="">
      <div className="text-xl mb-5">Accordion (my version)</div>
      <div className="ml-1">Current option: {currentOption} </div>

      <select onChange={handleSelectOption}>
        <option value="">Please select option</option>
        {renderedOptions}
      </select>
    </div>
  );
}
