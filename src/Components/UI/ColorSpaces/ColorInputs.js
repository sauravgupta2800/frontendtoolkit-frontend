import { useEffect, useState } from "react";
import { Input } from "antd";
import { INPUT_VALUES } from "./config";
import Icon from "../Common/Icon/Icon";
import { fixedDecimal, fixedDecimalNoRoundOff } from "./../../utils";
import { useClipboard } from "use-clipboard-copy";

const ColorInputs = ({ onValueChange, isDesktopView, ...rest }) => {
  const [originalValues, setOriginal] = useState({});
  const [currentValues, setCurrent] = useState({});
  const clipboard = useClipboard({ copiedTimeout: 750 });

  useEffect(() => {
    const { rgb: rgba, hsl: hsla, hex } = rest;

    const calculatedValues = {
      hex: `${hex}`,
      rgb: `rgb(${fixedDecimalNoRoundOff(rgba.r)},${fixedDecimalNoRoundOff(
        rgba.g
      )},${fixedDecimalNoRoundOff(rgba.b)})`,
      rgba: `rgba(${fixedDecimalNoRoundOff(rgba.r)},${fixedDecimalNoRoundOff(
        rgba.g
      )},${fixedDecimalNoRoundOff(rgba.b)},${fixedDecimalNoRoundOff(rgba.a)})`,
      hsl: `hsl(${fixedDecimal(hsla.h)}deg,${fixedDecimal(
        hsla.s * 100
      )}%,${fixedDecimal(hsla.l * 100)}%)`,
      hsla: `hsla(${fixedDecimal(hsla.h)}deg,${fixedDecimal(
        hsla.s * 100
      )}%,${fixedDecimal(hsla.l * 100)}%,${fixedDecimalNoRoundOff(hsla.a)})`,
    };

    setOriginal(calculatedValues);
    setCurrent(calculatedValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rest.rgb, rest.hex, rest.hsl]);

  const addOnAfter = (key) => {
    const value = `${currentValues[key]}`;
    return (
      <div>
        <div className="ft-table-action-icon-prime ">
          <Icon
            id="copy"
            size="md"
            title={
              clipboard.copied ? "Copied to Clipboard" : "Copy to Clipboard"
            }
            onClick={() => clipboard.copy(value)}
          />
        </div>
      </div>
    );
  };

  const handleOnBlur = ({ key, value }) => {
    setCurrent({ ...currentValues, [key]: originalValues[key] });
  };

  const isValid = (regEx, value) => {
    return value && regEx.test(value);
  };

  const handleOnChange = ({ key, value, regEx, prepareValue }) => {
    setCurrent({ ...currentValues, [key]: value });
    if (regEx.test(value)) {
      onValueChange(prepareValue ? prepareValue(value) : value);
    }
  };

  return (
    <div className="d-flex flex-wrap justify-content-between px-5 pb-5">
      {INPUT_VALUES.map((item, index) => (
        <div className={`my-3 ${isDesktopView ? "w-45" : "w-100"}`} key={index}>
          {isValid(item.regEx, currentValues[item.valueKey]) ? (
            <div className="fw-bold fs-4">{item.title}</div>
          ) : (
            <div className="fs-4 ft-color-red">{`Invalid ${item.title}`}</div>
          )}
          <div>
            <Input
              placeholder={item.placeholder}
              size="large"
              className="ft-style-1-shadow"
              addonAfter={addOnAfter(item.valueKey)}
              onBlur={(event) =>
                handleOnBlur({
                  key: item.valueKey,
                  value: event.target.value,
                })
              }
              value={currentValues[item.valueKey]}
              onChange={(event) =>
                handleOnChange({
                  key: item.valueKey,
                  value: event.target.value,
                  regEx: item.regEx,
                  prepareValue: item.prepareValue,
                })
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorInputs;
