import { useEffect, useState } from "react";
import { CustomPicker } from "react-color";
import ColorInputs from "./ColorInputs";
import { fixedDecimal, fixedDecimalNoRoundOff } from "./../../utils";
var {
  Saturation,
  Hue,
  Alpha,
  EditableInput,
} = require("react-color/lib/components/common");

const ColorPickerWrapper = ({ onChange, ...rest }) => {
  const [originalValues, setOriginal] = useState({});
  const [currentValues, setCurrent] = useState({});

  useEffect(() => {
    const { rgb: rgba, hsl: hsla, hex } = rest;

    const calculatedValues = {
      hex: `${hex}`,
      rgb: `rgb(${fixedDecimal(rgba.r)},${fixedDecimal(rgba.g)},${fixedDecimal(
        rgba.b
      )})`,
      rgba: `rgb(${fixedDecimal(rgba.r)},${fixedDecimal(rgba.g)},${fixedDecimal(
        rgba.b
      )},${fixedDecimalNoRoundOff(rgba.a)})`,
      hsl: `rgb(${fixedDecimal(hsla.h)},${fixedDecimal(hsla.s)},${fixedDecimal(
        hsla.l
      )})`,
      hsla: `rgb(${fixedDecimal(hsla.h)},${fixedDecimal(hsla.s)},${fixedDecimal(
        hsla.l
      )},${fixedDecimalNoRoundOff(hsla.a)})`,
    };
    console.log(calculatedValues, rgba, hsla, hex);
    setOriginal(calculatedValues);
    setCurrent(calculatedValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rest.rgb, rest.hex, rest.hsl]);

  const handleChange = (color) => {
    const { hex, rgb, hsl } = color;
    console.log("w", hex, rgb, hsl);
    // color = {
    //   hex: '#333',
    //   rgb: {
    //     r: 51,
    //     g: 51,
    //     b: 51,
    //     a: 1,
    //   },
    //   hsl: {
    //     h: 0,
    //     s: 0,
    //     l: .20,
    //     a: 1,
    //   },
    // }
  };

  const onChangeLocal = (e) => {
    console.log("e: ", e);
    onChange("#DA1137");
  };

  return (
    <div className="">
      <div className="ft-color-picker">
        <div className="ft-color-picker--saturation mb-4">
          <Saturation {...rest} onChange={onChange} />
        </div>
        <div className="ft-color-picker--item mb-4">
          <Hue {...rest} onChange={onChange} />
        </div>
        <div className="ft-color-picker--item">
          <Alpha {...rest} onChange={onChange} />
        </div>
      </div>
      <EditableInput
        style={{
          input: {
            border: "none",
          },
          label: {
            fontSize: "12px",
            color: "#999",
          },
        }}
        label="hex"
        value={rest.hex}
        onChange={onChangeLocal}
      />
      <ColorInputs values={currentValues} />
    </div>
  );
};

export default CustomPicker(ColorPickerWrapper);
