import { useState } from "react";
import DropdownMine from "./DropdownMine";
import classnames from "classnames";

export default function Dropdown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onSelect(option)
  };
  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option.value)} key={option.value}>
        {option.label}
      </div>
    );
  });

  // My implementation with <select>
  return (
    <div className="p-8">
      <div className="text-xl mb-5">Accordion (udemy version)</div>
      {selection &&   <div className={classnames("mb-2", { [`text-${selection}-500`]: true })}>
        Current option: {selection}
      </div>}
    
      <div onClick={handleClick}>Select...</div>
      {isOpen && <div>{renderedOptions}</div>}
      <hr className="my-8"></hr>
      <DropdownMine options={options} />
    </div>
  );
}
