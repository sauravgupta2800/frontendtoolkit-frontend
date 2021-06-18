import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { Button } from "antd";
import { useState } from "react";
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
// const options = {
//   quickSuggestions: {
//     other: false,
//     comments: false,
//     strings: false,
//   },
//   parameterHints: {
//     enabled: false,
//   },
//   ordBasedSuggestions: false,
//   suggestOnTriggerCharacters: false,
//   acceptSuggestionOnEnter: "off",
//   tabCompletion: "off",
//   wordBasedSuggestions: false,
//   codeLens: false,
//   lineNumbers: "off",
//   glyphMargin: false,
//   folding: false,
//   // Undocumented see https://github.com/Microsoft/vscode/issues/30795#issuecomment-410998882
//   lineDecorationsWidth: 0,
//   lineNumbersMinChars: 0,
//   },
// };
const BaseExtraDetails = ({ drawerExtraDetails }) => {
  const [state, setState] = useState({
    originalText: "",
    changedText: "",
    diffOriginalText: "",
    diffChangedText: "",
  });

  const setStateWith = (key, value) => {
    setState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  const handleFindDiff = () => {
    setState((prevState) => {
      return {
        ...prevState,
        diffOriginalText: prevState.originalText,
        diffChangedText: prevState.changedText,
      };
    });
  };

  return (
    <div className="w-100">
      <div className="w-100 d-flex">
        <div className="w-50 pe-5">
          <div className=" text-center fs-3 fw-bold mb-2">Original text</div>
          <div className="border rounded border-1 ft-style-2-shadow">
            <Editor
              height="330px"
              defaultLanguage="javascript"
              defaultValue={state.originalText}
              //theme={"vs-dark"}
              onChange={(value) => setStateWith("originalText", value)}
              options={options}
            />
          </div>
        </div>
        <div className="w-50">
          <div className="text-center fs-3 fw-bold mb-2">Changed text</div>
          <div className="border rounded border-1 ft-style-2-shadow">
            <Editor
              height="330px"
              defaultLanguage="javascript"
              defaultValue={state.changedText}
              //theme={"vs-dark"}
              onChange={(value) => setStateWith("changedText", value)}
              options={options}
            />
          </div>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-center">
        <Button
          size="large"
          onClick={handleFindDiff}
          className="my-4"
          type="primary"
        >
          Find Difference
        </Button>
      </div>

      <DiffEditor
        height="40vh"
        original={state.diffOriginalText}
        modified={state.diffChangedText}
        keepCurrentOriginalModel={true}
      />
    </div>
  );
};

export default BaseExtraDetails;
