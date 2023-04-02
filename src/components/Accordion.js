import { useState } from "react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import classnames from "classnames";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = (nextIndex) => {
    setExpandedIndex(nextIndex === expandedIndex ? null : nextIndex);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = <span className="">{isExpanded ? <GoChevronUp /> : <GoChevronDown />}</span>;

    return (
      <div key={item.id}>
        <div
          className={classnames(
            "flex justify-between p-3 bg-gray-50  items-center cursor-pointer",
            {
              "rounded-t": index === 0,
              "rounded-b": index === items.length - 1 && index !== expandedIndex,
              "border-b": index !== expandedIndex && index !== items.length - 1,
            }
          )}
          onClick={() => handleClick(index)}
        >
          {item.label} {icon}
        </div>
        {isExpanded && (
          <div
            className={classnames("p-5", {
              "border-b": index === expandedIndex && index !== items.length - 1,
            })}
          >
            {item.content}
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="">
      <div className="text-xl">Accordion</div>
      <div className="border rounded"> {renderedItems} </div>
    </div>
  );
}

export default Accordion;
