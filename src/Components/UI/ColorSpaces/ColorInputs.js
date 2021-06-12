import { Input } from "antd";
import { INPUT_VALUES } from "./config";
import Icon from "../Common/Icon/Icon";

const ColorInputs = ({ values }) => {
  const addOnAfter = () => {
    return (
      <div>
        <div className="ft-table-action-icon-prime ">
          <Icon id="copy-clipboard" size="sm" title="Copy to Clipboard" />
        </div>
      </div>
    );
  };

  const handleOnBlur = (e) => {
    console.log(e);
  };

  const handleOnChange = (e) => {};

  return (
    <div className="d-flex flex-wrap justify-content-between px-5">
      {INPUT_VALUES.map((item, index) => (
        <div className="w-45 my-3" key={index}>
          <div>{item.title}</div>
          <div>
            <Input
              placeholder="Basic usage"
              size="large"
              addonAfter={addOnAfter()}
              onBlur={handleOnBlur}
              value={values[item.valueKey]}
              onChange={handleOnChange}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorInputs;
