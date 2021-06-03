import React from "react";
import DraggableGrid from "../UI/DraggableGrid/DraggabbleGrid";
import Sidebar from "./Sidebar";
import Header from "./header";

const MainLayout = () => {
  return (
    <div className="ft-main-layout">
      <div className="ft-main-layout__header">
        <Header />
      </div>
      <div className="ft-main-layout__sidebar">
        <Sidebar />
      </div>
      <div className="ft-main-layout__container">
        <DraggableGrid />
      </div>
    </div>
  );
};

export default MainLayout;
