import { useEffect } from "react";
import { CustomPicker } from "react-color";
import ColorInputs from "./ColorInputs";
const { Saturation, Hue, Alpha } = require("react-color/lib/components/common");

const ColorPickerWrapper = ({ onChange, ...rest }) => {
  useEffect(() => {
    if (rest.defaultColor) onChange(rest.defaultColor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="">
      <div className="ft-color-picker">
        <div className="ft-color-picker--saturation border ft-style-2-shadow mb-4">
          <Saturation className="" {...rest} onChange={onChange} />
        </div>
        <div className="ft-color-picker--item border ft-style-2-shadow mb-4">
          <Hue {...rest} onChange={onChange} />
        </div>
        <div className="ft-color-picker--item border ft-style-2-shadow">
          <Alpha {...rest} onChange={onChange} />
        </div>
      </div>
      <ColorInputs {...rest} onValueChange={onChange} />
    </div>
  );
};

export default CustomPicker(ColorPickerWrapper);
