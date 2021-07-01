import { useEffect, useState } from "react";
import { CUSTOM_COLORS } from "./config";
import { CustomPicker } from "react-color";
import { Input, Popover } from "antd";
import Icon from "../Common/Icon/Icon";
import { Tooltip } from "antd";
import { ChromePicker } from "react-color";

const CardCustomColor = ({ onDetailsClick, onChange, ...rest }) => {
  const [originalValue, setOriginal] = useState("");
  const [currentValue, setCurrent] = useState("");

  useEffect(() => {
    setOriginal(rest.hex);
    setCurrent(rest.hex);
  }, [rest.hex]);

  const handleItemClick = (item) => {
    setOriginal(item);
    setCurrent(item);
  };

  const handleOnChange = (value) => {
    setCurrent(value);
    if (isValid(value)) setOriginal(value);
  };

  const isValid = (value) => {
    const regEx = /^#([\da-f]{3}){1,2}$/i;
    return regEx.test(value);
  };

  const handleOnBlur = () => {
    setCurrent(originalValue);
  };

  const popoverContent = () => {
    return (
      <div>
        <ChromePicker
          color={originalValue}
          onChange={({ hex }) => {
            setOriginal(hex);
            setCurrent(hex);
          }}
        />
      </div>
    );
  };

  const addOnBefore = () => {
    return (
      <>
        <Popover
          content={popoverContent}
          trigger="click"
          overlayClassName="ft-chrome-picker"
        >
          <div
            className="rounded-start cursor-pointer"
            style={{
              width: "40px",
              height: "40px",
              background: `${originalValue}`,
            }}
          />
        </Popover>
      </>
    );
  };
  const addOnAfter = () => {
    return (
      <Tooltip title="Details">
        <div
          className="d-flex align-items-center justify-content-center px-2 cursor-pointer  rounded-end ft-bg-prime93"
          style={{
            height: "40px",
          }}
          onClick={() => onDetailsClick(originalValue)}
        >
          <Icon id="detail-more" iconClass="ft-color-dark2" />
        </div>
      </Tooltip>
    );
  };
  return (
    <div>
      <div className="d-flex flex-wrap">
        {CUSTOM_COLORS.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer mb-3 rounded-3"
            style={{
              width: "30px",
              height: "30px",

              background: `${item}`,
              marginRight: `${
                index !== CUSTOM_COLORS.length - 1 ? "6px" : "0"
              }`,
            }}
            onClick={() => handleItemClick(item)}
          />
        ))}
      </div>

      <div className="mt-2">
        <Input
          value={currentValue}
          addonBefore={addOnBefore()}
          addonAfter={addOnAfter()}
          size="large"
          defaultValue="mysite"
          className="custom-color-input ft-style-1-shadow"
          onChange={(event) => handleOnChange(event.target.value)}
          onBlur={() => handleOnBlur()}
        />
        {!isValid(currentValue) && (
          <div className="mt-2 ft-color-red">{`${currentValue} Invalid hex format`}</div>
        )}
      </div>
    </div>
  );
};

export default CustomPicker(CardCustomColor);
