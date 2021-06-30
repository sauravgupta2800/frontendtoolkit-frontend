import { Button, Radio, Input, Switch } from "antd";
import { useEffect, useState } from "react";
import { TYPES, DATA } from "./config";
import Icon from "../Common/Icon/Icon";
import { useClipboard } from "use-clipboard-copy";

const base64 = require("base-64");
const utf8 = require("utf8");

const Base64Details = ({ drawerExtraDetails, isDesktopView }) => {
  const clipboard = useClipboard({ copiedTimeout: 750 });
  const [state, setState] = useState({
    selectedType: TYPES[0].key,
    inputValue: "",
    resultValue: "",
    liveConversion: false,
  });

  useEffect(() => {
    if (drawerExtraDetails?.type ?? false) {
      setStateWith("selectedType", drawerExtraDetails.type);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (state.inputValue && state.liveConversion) {
      if (state.selectedType === "encode") {
        setStateWith(
          "resultValue",
          base64.encode(utf8.encode(state.inputValue))
        );
      } else {
        try {
          setStateWith(
            "resultValue",
            utf8.decode(base64.decode(state.inputValue))
          );
        } catch {
          //
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.inputValue]);

  const onChange = (value) => {
    setStateWith("selectedType", value);
    setStateWith("inputValue", "");
    setStateWith("resultValue", "");
    setStateWith("liveConversion", false);
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
  const handleManualConversion = () => {
    if (state.selectedType === "encode") {
      setStateWith("resultValue", base64.encode(utf8.encode(state.inputValue)));
    } else {
      try {
        setStateWith(
          "resultValue",
          utf8.decode(base64.decode(state.inputValue))
        );
      } catch {
        //
      }
    }
  };

  const handleLiveConversionChange = (value) => {
    value && handleManualConversion();
    setStateWith("liveConversion", value);
  };

  return (
    <div className="w-100 h-100">
      <div className="d-flex justify-content-center w-100">
        <Radio.Group
          value={state.selectedType}
          size={isDesktopView ? "large" : "medium"}
          buttonStyle="solid"
          onChange={(e) => onChange(e.target.value)}
        >
          {TYPES.map((item) => (
            <Radio.Button key={item.key} value={item.key}>
              <div className="d-flex align-items-center">
                <Icon id={DATA[item.key].iconId} size="sm" />
                <div className="ms-2">{item.title}</div>
              </div>
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>

      <div className="mt-5 w-100">
        <div className="fs-3 fw-bold my-2">
          {DATA[state.selectedType].inputTitle}
        </div>
        <Input.TextArea
          className="rounded ft-style-2-shadow"
          showCount
          value={state.inputValue}
          onChange={(evt) => onInputChange(evt.target.value)}
          autoSize={{ minRows: 7 }}
          placeholder={DATA[state.selectedType].inputPlaceholder}
        />
      </div>
      <div className="my-4 w-50 d-flex flex-column justify-content-center align-items-center w-100">
        <div className="d-flex mb-4">
          <Switch
            checkedChildren={`${DATA[state.selectedType].switchText} on`}
            unCheckedChildren={`${DATA[state.selectedType].switchText} off`}
            checked={state.liveConversion}
            onChange={handleLiveConversionChange}
          />
        </div>
        <Button
          onClick={handleManualConversion}
          type="primary"
          size="large"
          disabled={state.liveConversion}
        >
          {DATA[state.selectedType].btnTitle}
        </Button>
      </div>
      <div className="mb-5 w-100">
        <div className="d-flex justify-content-between my-2 w-100">
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
          className="rounded ft-style-2-shadow"
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
