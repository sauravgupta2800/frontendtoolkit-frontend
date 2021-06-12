import { CustomPicker } from "react-color";
import ColorInputs from "./ColorInputs";
var { Saturation, Hue, Alpha } = require("react-color/lib/components/common");

const ColorPickerWrapper = ({ onChange, ...rest }) => {
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
      <ColorInputs {...rest} onValueChange={onChange} />
    </div>
  );
};

export default CustomPicker(ColorPickerWrapper);
