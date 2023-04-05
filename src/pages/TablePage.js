import { useState } from "react";
import classnames from "classnames";
import SortableTable from "../components/SortableTable";
import React from "react";

function TablePage() {
  const config = [
    { label: "Name", render: (item) => item.name ,   sortValue: (item) => item.name},
    { label: "Color", render: (item) => <div className={`p-3 m-2 ${item.color}`}></div> },
    { label: "Weight", render: (item) => item.weight },
    {
      label: "Score",
      render: (item) => item.score,
      sortValue: (item) => item.score
    },
  ];


  const data = [
    { name: "Strawberry", color: "bg-red-500", score: 10, id: 1, weight: 5, cost: 10 },
    { name: "Apple", color: "bg-green-500", score: 7, id: 2, weight: 15, cost: 4 },
    { name: "Orange", color: "bg-orange-300", score: 5, id: 3, weight: 23, cost: 9 },
    { name: "Banana", color: "bg-yellow-300", score: 9, id: 4, weight: 50, cost: 29 },
    { name: "Grape", color: "bg-purple-500", score: 3, id: 5, weight: 12, cost: 20 },
  ];

  function getSortValue(item) {
    return item.weight;
  }

  const sortOrder = "asc";

  data.sort((a, b) => {
    const valueA = getSortValue(a);
    const valueB = getSortValue(b);

    const reverseOrder = sortOrder === "asc" ? 1 : -1;
    if (typeof valueA === "string") {
      //alphabetical sort
      return valueA.localeCompare(valueB) * reverseOrder;
    } else {
      //ascending low -> high numeric order
      return (valueA - valueB) * reverseOrder;
    }
  });

  const config2 = [
    { label: "Name", render: (item) => item.name },
    { label: "Price", render: (item) => item.price },
    { label: "Discount price", render: (item) => item.price * ((100 - item.discount) / 100) },
    { label: "Image", render: (item) => <img width="100" alt="product" src={item.img} /> },
    { label: "Origin", render: (item) => item.origin },
  ];
  const data2 = [
    {
      name: "Boat",
      price: 32000,
      discount: 10,
      img: "https://sailfish-boat.s3.us-east-2.amazonaws.com/mean_sailfishboats/245_DC_new_1655921003407.png",
      origin: "Italy",
      id: 6,
    },
    {
      name: "Car",
      price: 76500,
      discount: 25,
      img: "https://cdn.oem-production.subaru.com.au/media/9317/my22-wrx-awd-wrbluepearl-side.png",
      origin: "Germany",
      id: 7,
    },
    {
      name: "Motorcycle",
      price: 4500,
      discount: 7,
      img: "https://d2bywgumb0o70j.cloudfront.net/2022/03/06/0f876dc4b4f56eb014e972f2d5fb604d_c13236a14fa28743.png",
      origin: "Ireland",
      id: 8,
    },
    {
      name: "Private plane",
      price: 3545000,
      discount: 27,
      img: "https://images.prismic.io/privatefly/a8a929b8-1d8a-4edb-a377-8b05ee68c562_Midsize+Jets%402x.jpg?auto=compress,format",
      origin: "USA",
      id: 9,
    },
  ];

  return (
    <div>
      <div className="text-xl font-bold">Table</div>
      <SortableTable data={data} config={config} />
      <div className="mt-20"></div>

      <SortableTable data={data2} config={config2} />
    </div>
  );
}

export default TablePage;
