import React, { useState } from "react";
import DragCard from "../Common/DragCard/DragCard";
import { useDispatch } from "react-redux";
import { setDrawerData } from "../../../store/cardSlice";
import { useHistory } from "react-router-dom";
import { Radio } from "antd";
import { TYPES, DATA } from "./config";
import Icon from "../Common/Icon/Icon";

const Base64Card = ({ ...rest }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [value, setValue] = useState("encode");

  const onButtonClick = (key) => {
    setValue(key);
    dispatch(setDrawerData({ type: key }));
    history.replace(`/tools/${rest.key_name}`);
  };

  const contentSlot = () => {
    return (
      <div className="w-100 d-flex justify-content-center">
        <div className="d-flex justify-content-center w-100">
          <Radio.Group value={value} size="medium" buttonStyle="solid">
            {TYPES.map((item) => (
              <Radio.Button
                key={item.key}
                value={item.key}
                onClick={() => onButtonClick(item.key)}
              >
                <div className="d-flex align-items-center">
                  <Icon id={DATA[item.key].iconId} size="xs" />
                  <div className="ms-2">{item.title}</div>
                </div>
              </Radio.Button>
            ))}
          </Radio.Group>
        </div>
      </div>
    );
  };

  return (
    <DragCard className="w-100 h-100" contentSlot={contentSlot()} {...rest} />
  );
};

export default Base64Card;
