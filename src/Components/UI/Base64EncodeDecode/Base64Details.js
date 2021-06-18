import { Button, Radio } from "antd";
import { useState } from "react";
import { TYPES } from "./config";

const Base64Details = ({ drawerExtraDetails }) => {
  const [state, setState] = useState({
    selectedType: TYPES[0].key,
  });

  const onChange = (value) => {
    console.log(value);
    setStateWith("selectedType", value);
  };

  const setStateWith = (key, value) => {
    setState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  return (
    <div className="w-100">
      <Radio.Group
        defaultValue={state.selectedType}
        size="large"
        buttonStyle="solid"
        onChange={(e) => onChange(e.target.value)}
      >
        {TYPES.map((item) => (
          <Radio.Button key={item.key} value={item.key}>
            {item.title}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  );
};

export default Base64Details;
