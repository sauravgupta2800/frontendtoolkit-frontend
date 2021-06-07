import React, { useState } from "react";

import DragCard from "../Common/DragCard/DragCard";
import PackageSearch from "./PackageSearch";

import queryString from "query-string";
import axios from "axios";

const PackageCard = ({ ...rest }) => {
  const [visibleDrawer, setVisible] = useState(false);
  const [packageDetails, setPackageDetails] = useState({});

  const searchQueryParams = queryString.stringify({
    "search_query[]": ["vue", "react", "@angular/core"],
  });

  const infoHandler = async () => {
    console.log("info handler");
    await axios(
      `https://api.npmtrends.com/s/related_packages?${searchQueryParams}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  };
  const deleteHandler = () => {
    console.log("delete handler");
  };

  const onOptionSelect = (data) => {
    console.log("onOptionSelect", data);
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
      class="w-100 h-100"
      visible={visibleDrawer}
      onDrawerClose={drawerCloseHandler}
      onInfoClick={infoHandler}
      onDeleteClick={deleteHandler}
      contentSlot={contentSlot()}
      drawerExtraDetails={packageDetails}
      {...rest}
    />
  );
};

export default PackageCard;
