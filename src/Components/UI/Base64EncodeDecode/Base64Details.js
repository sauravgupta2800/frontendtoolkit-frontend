import { Button, Radio, Input } from "antd";
import { useState } from "react";
import { TYPES, DATA } from "./config";
import Icon from "../Common/Icon/Icon";
import { useClipboard } from "use-clipboard-copy";

const base64 = require("base-64");
const utf8 = require("utf8");

var text = "foo © bar 𝌆 baz";
var bytes = utf8.encode(text);
var encoded = base64.encode(bytes);
console.log(encoded);

const Base64Details = ({ drawerExtraDetails }) => {
  const clipboard = useClipboard({ copiedTimeout: 750 });
  const [state, setState] = useState({
    selectedType: TYPES[0].key,
    inputValue: "",
    resultValue: "",
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

  const onInputChange = (value) => {
    setStateWith("inputValue", value);
  };

  const onResultChange = (value) => {
    setStateWith("resultValue", value);
  };

  return (
    <div className="w-100">
      <div className="d-flex justify-content-center">
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

      <div className="mt-5">
        <div className="fs-3 fw-bold my-2">
          {DATA[state.selectedType].inputTitle}
        </div>
        <Input.TextArea
          showCount
          value={state.inputValue}
          onChange={(evt) => onInputChange(evt.target.value)}
          autoSize={{ minRows: 7 }}
          placeholder={DATA[state.selectedType].inputPlaceholder}
        />
      </div>
      <div className="my-5 d-flex justify-content-center">
        <Button onClick={() => {}} type="primary" size="large">
          {DATA[state.selectedType].btnTitle}
        </Button>
      </div>
      <div className="mb-5">
        <div className="d-flex justify-content-between my-2">
          <div className="fs-3 fw-bold my-2">
            {DATA[state.selectedType].resultTitle}
          </div>

          <div className="ft-card-action-icon">
            <Icon
              id="copy"
              size="md"
              title={clipboard.copied ? "Copied" : "Copy"}
              onClick={() => clipboard.copy(state.resultValue)}
            />
          </div>
        </div>
        <Input.TextArea
          showCount
          value={state.resultValue}
          onChange={(evt) => onResultChange(evt.target.value)}
          autoSize={{ minRows: 7 }}
          placeholder={DATA[state.selectedType].resultPlaceholder}
        />
      </div>
    </div>
  );
};

export default Base64Details;
