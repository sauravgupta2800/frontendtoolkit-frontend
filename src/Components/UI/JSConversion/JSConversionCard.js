import React, { useState } from "react";
import DragCard from "../Common/DragCard/DragCard";
import { useDispatch } from "react-redux";
import { setDrawerData } from "../../../store/cardSlice";
import { useHistory } from "react-router-dom";
import { Input, Button, Radio } from "antd";
import { TYPES } from "./config";

const JSConversionCard = ({ ...rest }) => {
  const [value, setValue] = useState("");
  const [option, setOption] = useState(TYPES[0].key);
  const dispatch = useDispatch();
  const history = useHistory();

  const openDetails = (key) => {
    dispatch(setDrawerData({ data: value, key }));
    history.replace(`/cards/${rest.key_name}`);
  };

  const onResultChange = (value) => {
    setValue(value);
  };

  const contentSlot = () => {
    return (
      <div className="w-100 d-flex justify-content-center">
        <Input.TextArea
          className="w-100 rounded ft-style-1-shadow"
          value={value}
          onChange={(evt) => onResultChange(evt.target.value)}
          autoSize={{ minRows: 4, maxRows: 4 }}
          placeholder={"Paste your code here"}
        />
      </div>
    );
  };

  const onButtonClick = (key) => {
    setOption(key);
    openDetails(key);
  };

  const actionSlot = () => {
    return (
      <div className="w-100 d-flex justify-content-end">
        <Radio.Group
          value={option}
          className="mt-4"
          size="medium"
          buttonStyle="solid"
        >
          {TYPES.map((item) => (
            <Radio.Button
              key={item.key}
              value={item.key}
              onClick={() => onButtonClick(item.key)}
            >
              {item.value}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>
    );
  };

  return (
    <DragCard
      className="w-100 h-100"
      contentSlot={contentSlot()}
      actionSlot={actionSlot()}
      {...rest}
    />
  );
};

export default JSConversionCard;
