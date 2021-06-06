import React, { useState } from "react";

import DragCard from "../Common/DragCard/DragCard";
import PackageSearch from "./PackageSearch";

const PackageCard = ({ ...rest }) => {
  const [visibleDrawer, setVisible] = useState(false);

  const infoHandler = () => {
    console.log("info handler");
  };
  const deleteHandler = () => {
    console.log("delete handler");
  };

  const onOptionSelect = (data) => {
    console.log("onOptionSelect", data);
    setVisible(true);
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
      visible={visibleDrawer}
      onClose={() => setVisible(false)}
      onInfoClick={infoHandler}
      onDeleteClick={deleteHandler}
      contentSlot={contentSlot()}
      {...rest}
    />
  );
};

export default PackageCard;
