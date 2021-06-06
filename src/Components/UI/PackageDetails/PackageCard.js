import React, { useState, useEffect } from "react";

import DragCard from "../Common/DragCard/DragCard";
import PackageSearch from "./PackageSearch";

const PackageCard = ({ ...rest }) => {
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
        <PackageSearch clearOnSelect={true} onOptionSelect={onOptionSelect} />
      </div>
    );
  };

  return (
    <DragCard
      class="w-100 h-100"
      {...rest}
      onInfoClick={infoHandler}
      onDeleteClick={deleteHandler}
      contentSlot={contentSlot()}
    />
  );
};

export default PackageCard;
