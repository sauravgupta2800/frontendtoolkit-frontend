import React, { useState, useEffect } from "react";
import { AutoComplete, Input } from "antd";
import DragCard from "../Common/DragCard/DragCard";
import axios from "axios";
import useDebounce from "../../customHooks/useDebounce";

const PackageCard = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    fetchPackages(debouncedValue);
  }, [debouncedValue]);

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

  const fetchPackages = async (q = "") => {
    if (!q) {
      setOptions([]);
      return;
    }
    const params = {
      q,
    };
    setLoading(true);
    try {
      const { data } = await axios.get("/api/packages", { params });
      const list = data.data.map((item) => renderItem(item.package));
      setOptions(list);
    } catch {
      //
    } finally {
      setLoading(false);
    }
  };
  const onChange = (data) => {
    setValue(data);
  };
  const onSelect = (data) => {
    console.log("onSelect", data);
  };

  const contentSlot = () => {
    return (
      <div className="w-100">
        <div className="mt-3 ft-color-dark2 fs-4">
          find the cost of adding a npm package to your bundle
        </div>
        <AutoComplete
          value={value}
          options={options}
          className="w-100 mt-4"
          defaultActiveFirstOption={true}
          dropdownClassName="packages-autocomplete-dropdown"
          onSelect={onSelect}
          onChange={onChange}
        >
          <Input.Search
            className="packages-autocomplete-input w-100"
            size="large"
            allowClear={true}
            placeholder="find package"
            loading={loading}
          />
        </AutoComplete>
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
