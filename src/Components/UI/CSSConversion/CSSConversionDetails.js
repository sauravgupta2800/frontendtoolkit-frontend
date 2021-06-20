import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { Spin, Radio } from "antd";
import prettier from "prettier/standalone";
import parserTypePostcss from "prettier/parser-postcss";
import axios from "axios";
import { MINIFY } from "../../../shared/endpoints";
import { useClipboard } from "use-clipboard-copy";
import Icon from "../Common/Icon/Icon";
import { TYPES } from "./config";
const options = {
  quickSuggestions: {
    other: false,
    comments: false,
    strings: false,
  },
  parameterHints: {
    enabled: false,
  },
  minimap: {
    enabled: false,
  },
  ordBasedSuggestions: false,
  suggestOnTriggerCharacters: false,
  acceptSuggestionOnEnter: "off",
  tabCompletion: "off",
  wordBasedSuggestions: false,
  codeLens: false,
};

const CSSConversionDetails = ({ drawerExtraDetails = {} }) => {
  const clipboard = useClipboard({ copiedTimeout: 750 });
  const [state, setState] = useState({
    originalText: "",
    selectedType: TYPES[0].key,
    format: "",
    minify: "",
  });

  useEffect(() => {
    const { data = "", key } = drawerExtraDetails;
    setStateWith("originalText", data);
    if (key) {
      console.log(data, key);
      onChange(key);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMinification = async () => {
    if (!state.originalText) {
      setStateWith("minify", "");
      return;
    }
    console.log("handleMinification");
    try {
      const { data } = await axios.post(MINIFY.CODE_MINIFY, {
        code: state.originalText,
        type: "css",
      });
      setStateWith("minify", data.data);
    } catch {
      setStateWith("minify", "'Error : Not able to minify'");
    }
  };

  const handleFormatting = () => {
    if (!state.originalText) {
      setStateWith("format", "");
      return;
    }
    console.log("handleFormatting");
    try {
      const text = prettier.format(state.originalText, {
        parser: "css",
        plugins: [parserTypePostcss],
      });
      setStateWith("format", text);
    } catch {
      setStateWith("format", "'Error : Not able to format'");
    }
  };

  useEffect(() => {
    if (state.originalText) {
      if (state.selectedType === "format") {
        handleFormatting();
      } else if (state.selectedType === "minify") {
        handleMinification();
      }
    } else {
      setStateWith("format", "");
      setStateWith("minify", "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.originalText]);

  const onChange = (key) => {
    setStateWith("selectedType", key);
    console.log("selected key is: ", key);
    if (key === "format") {
      handleFormatting();
    } else if (key === "minify") {
      handleMinification();
    }
  };

  const setStateWith = (key, value) => {
    setState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  return (
    <div className="w-100 h-100">
      <div className="w-100 d-flex">
        <div className="w-50 pe-4">
          <div className="w-100 fs-3 fw-bold mb-4">Original Text</div>
          <div className="border rounded border-1 ft-style-2-shadow">
            <Editor
              height="75vh"
              defaultLanguage="javascript"
              defaultValue={state.originalText}
              loading={<Spin size="large" />}
              onChange={(value) => setStateWith("originalText", value)}
              options={options}
            />
          </div>
        </div>
        <div className="w-50 ps-4">
          <div className="w-100 d-flex justify-content-between">
            <div className="fs-3 fw-bold">Resultant Text</div>
            <div className="d-flex align-items-center">
              <div className="me-3 ft-color-dark2">Choose Filter type : </div>
              <Radio.Group
                value={state.selectedType}
                buttonStyle="solid"
                size="large"
                onChange={(e) => onChange(e.target.value)}
              >
                {TYPES.map((item) => (
                  <Radio.Button key={item.key} value={item.key}>
                    {item.value}
                  </Radio.Button>
                ))}
              </Radio.Group>
            </div>
            <div className="ft-card-action-icon">
              <Icon
                id="copy"
                size="md"
                title={clipboard.copied ? "Copied" : "Copy"}
                onClick={() => clipboard.copy(state[state.selectedType])}
              />
            </div>
          </div>
          <div className="border rounded ft-style-2-shadow">
            <Editor
              className="monaco-editor-container"
              height="75vh"
              language="scss"
              value={state[state.selectedType]}
              loading={<Spin size="large" />}
              onChange={(value) => setStateWith(state.selectedType, value)}
              options={options}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSSConversionDetails;
