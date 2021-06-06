import React, { useState, useEffect } from "react";
import { AutoComplete, Input } from "antd";
import useDebounce from "../../customHooks/useDebounce";
import axios from "axios";
import { PACKAGE } from "./../../../shared/endpoints";
const PackageSearch = ({
  onOptionSelect,
  clearOnSelect = false,
  name = "",
}) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    setValue(name);
  }, [name]);

  useEffect(() => {
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
        const { data } = await axios.get(PACKAGE.PACKAGE_LIST, { params });
        const list = data.data.map((item) => renderItem(item.package));
        setOptions(list);
      } catch {
        //
      } finally {
        setLoading(false);
      }
    };
    fetchPackages(debouncedValue);
  }, [debouncedValue]);

  const onChange = (data) => {
    setValue(data);
  };
  const onSelect = (data) => {
    clearOnSelect && setValue("");
    onOptionSelect(data);
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

  return (
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
  );
};

export default PackageSearch;
