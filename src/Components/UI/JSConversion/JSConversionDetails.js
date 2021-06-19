import Editor from "@monaco-editor/react";
import { useState } from "react";
import { Spin } from "antd";

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

const JSConversionDetails = ({ drawerExtraDetails }) => {
  const [state, setState] = useState({
    originalText: "",
  });

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
      <div className="w-100">Header</div>
      <div className="w-100 d-flex">
        <div className="w-50">
          <div className="border rounded border-1 ft-style-2-shadow me-4">
            <Editor
              height="80vh"
              defaultLanguage="javascript"
              defaultValue={state.originalText}
              theme={"light"}
              loading={<Spin size="large" />}
              onChange={(value) => setStateWith("originalText", value)}
              options={options}
            />
          </div>
        </div>
        <div className="w-50">
          <div className="border rounded border-1 ft-style-2-shadow ms-4">
            <Editor
              height="80vh"
              defaultLanguage="javascript"
              defaultValue={state.originalText}
              theme={"vs-dark"}
              loading={<Spin size="large" />}
              onChange={(value) => setStateWith("originalText", value)}
              options={options}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JSConversionDetails;
