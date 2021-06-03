import React from "react";
import DraggableGrid from "../UI/DraggableGrid/DraggabbleGrid";

const MainLayout = () => {
  return (
    <div className="ft-main-layout">
      <div className="ft-main-layout__header border">header</div>
      <div className="ft-main-layout__sidebar border">Sidebar</div>
      <div className="ft-main-layout__container border">
        <DraggableGrid />
      </div>
    </div>
  );
};

export default MainLayout;
