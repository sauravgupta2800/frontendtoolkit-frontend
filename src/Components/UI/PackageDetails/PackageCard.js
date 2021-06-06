import React, { useState, useEffect } from "react";

import DragCard from "../Common/DragCard/DragCard";
import PackageSearch from "./PackageSearch";

const PackageCard = () => {
  const infoHandler = () => {
    console.log("info handler");
  };
  const deleteHandler = () => {
    console.log("delete handler");
  };

  const onOptionSelect = (data) => {
    console.log("onOptionSelect", data);
  };

  const contentSlot = () => {
    return (
      <div className="w-100">
        <div className="mt-3 ft-color-dark2 fs-4">
          find the cost of adding a npm package to your bundle
        </div>
        <PackageSearch clearOnSelect={true} onOptionSelect={onOptionSelect} />
      </div>
    );
  };

  return (
    <DragCard
      class="w-100 h-100"
      title={"Package Details"}
      onInfoClick={infoHandler}
      onDeleteClick={deleteHandler}
      contentSlot={contentSlot()}
    />
  );
};

export default PackageCard;
