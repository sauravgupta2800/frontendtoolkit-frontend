import React, { useState, useEffect } from "react";

const MainLayout = () => {
  return (
    <div className="ft-main-layout">
      <div className="ft-main-layout__header border">header</div>
      <div className="ft-main-layout__sidebar border">Sidebar</div>
      <div className="ft-main-layout__container border">Container</div>
    </div>
  );
};

export default MainLayout;
