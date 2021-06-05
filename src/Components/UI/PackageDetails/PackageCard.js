import React, { useState } from "react";
import { AutoComplete } from "antd";
import DragCard from "../Common/DragCard/DragCard";
import axios from "axios";

const PackageCard = () => {
  // const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);

  const infoHandler = () => {
    console.log("info handler");
  };
  const deleteHandler = () => {
    console.log("delete handler");
  };
  const renderItem = ({ name, description }) => {
    return {
      value: name,
      label: (
        <div className="d-flex flex-column">
          <div className="fw-bold ft-color-dark1">{name}</div>
          <div className={"ft-color-$dark2"}>{description}</div>
        </div>
      ),
    };
  };
  const onSearch = async (q = "") => {
    console.log("q: ", q);
    if (!q) {
      setOptions([]);
      return;
    }
    const params = {
      q,
    };
    try {
      const { data } = await axios.get("/api/packages", { params });
      const list = data.data.map((item) => renderItem(item.package));
      setOptions(list);
    } catch {
      //
    }
  };
  const onSelect = (data) => {
    console.log("onSelect", data);
  };

  const contentSlot = () => {
    return (
      <div className="w-100">
        <div class="mt-3 ft-color-dark2 fs-4">
          find the cost of adding a npm package to your bundle
        </div>
        <AutoComplete
          options={options}
          className="w-100 mt-4"
          allowClear={true}
          defaultActiveFirstOption={true}
          placeholder="find package"
          dropdownClassName="packages-autocomplete-dropdown"
          onSelect={onSelect}
          onSearch={onSearch}
        />
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
