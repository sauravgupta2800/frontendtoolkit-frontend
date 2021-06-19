import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { Spin, Radio } from "antd";
import prettier from "prettier/standalone";
import parserTypeScript from "prettier/parser-typescript";
import axios from "axios";
import { MINIFY } from "../../../shared/endpoints";

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
    selectedType: "format",
    format: "",
    minify: "",
  });

  const handleMinification = async () => {
    if (!state.originalText) {
      setStateWith("minify", "");
      return;
    }
    console.log("handleMinification");
    try {
      const { data } = await axios.post(MINIFY.CODE_MINIFY, {
        code: state.originalText,
      });
      setStateWith("minify", data.data);
    } catch {
      //
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
        parser: "typescript",
        plugins: [parserTypeScript],
      });
      setStateWith("format", text);
    } catch {
      //
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

  const onChange = (value) => {
    setStateWith("selectedType", value);
    if (value === "format") {
      handleFormatting();
    } else if (value === "minify") {
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
              height="80vh"
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
                <Radio.Button value="format">Format</Radio.Button>
                <Radio.Button value="minify">Minify</Radio.Button>
              </Radio.Group>
            </div>
          </div>
          <div className="border rounded ft-style-2-shadow">
            <Editor
              className="monaco-editor-container"
              height="80vh"
              defaultLanguage="javascript"
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

export default JSConversionDetails;

// prettier.format(state.originalText, {
//     semi: false,
//     parser: "typescript",
//     plugins: [parserTypeScript],
//   })
