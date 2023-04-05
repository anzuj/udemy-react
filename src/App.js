import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Route from "./components/Route";

import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropDownPage from "./pages/DropDownPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar></Sidebar>
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage></AccordionPage>
        </Route>
        <Route path="/">
          <DropDownPage></DropDownPage>
        </Route>
        <Route path="/button">
          <ButtonPage></ButtonPage>
        </Route>
        <Route path="/modal">
          <ModalPage></ModalPage>
        </Route>
        <Route path="/table">
          <TablePage></TablePage>
        </Route>
      </div>
    </div>
  );
}

export default App;
