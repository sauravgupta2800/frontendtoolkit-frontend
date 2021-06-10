import React, { useState } from "react";

import DragCard from "../Common/DragCard/DragCard";
import PackageSearch from "../PackageDetails/PackageSearch";

const PackageCompareCard = ({ ...rest }) => {
  const [visibleDrawer, setVisible] = useState(false);
  const [packageDetails, setPackageDetails] = useState({});

  const onOptionSelect = (data) => {
    setPackageDetails({ package: data });
    setVisible(true);
  };

  const drawerCloseHandler = () => {
    setVisible(false);
    setPackageDetails({});
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
      className="w-100 h-100"
      visible={visibleDrawer}
      onDrawerClose={drawerCloseHandler}
      contentSlot={contentSlot()}
      drawerExtraDetails={packageDetails}
      {...rest}
    />
  );
};

export default PackageCompareCard;
