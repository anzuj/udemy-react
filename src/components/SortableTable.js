import Table from "./Table";

import useSort from "../hooks/use-sort";

import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(data, config);

  // sortable header logic
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {" "}
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return (
    <div>
      {/* ...props has config and data, but it will be overwritten by the next props of the same value */}
      <Table {...props} config={updatedConfig} data={sortedData} />
    </div>
  );
}

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return <GoArrowSmallUp />;
  } else if (sortOrder === "desc") {
    return <GoArrowSmallDown />;
  }
};
export default SortableTable;
