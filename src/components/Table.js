import { Fragment } from "react";
import classnames from "classnames";


function Table({ data, config }) {
  const renderedHeaders = config.map((column) => {
    if(column.header){
        // Fragment is like <template> just to assign a key without creating additional html elements
        return <Fragment key={column.label}>{column.header()}</Fragment> 
    }else{
        return <th key={column.label}>{column.label}</th>;
    }
  
  });

  const renderedRows = data.map((item) => {
    const renderedCells = config.map((column) => {
      return (
        <td key={`cell-${column.label}`} className="p-2">
          {column.render(item)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={`row-${item.id}`}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <div>
      <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b-2">{renderedHeaders}</tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
}

export default Table;
