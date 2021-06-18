import Editor, { DiffEditor } from "@monaco-editor/react";
import { Button, Spin } from "antd";
import { useState } from "react";
import EmptyState from "../Common/EmptyState/EmptyState";

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
const CodeDiffDetails = ({ drawerExtraDetails }) => {
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
              height="300px"
              defaultLanguage="javascript"
              defaultValue={state.originalText}
              //theme={"vs-dark"}
              loading={<Spin size="large" />}
              onChange={(value) => setStateWith("originalText", value)}
              options={options}
            />
          </div>
        </div>
        <div className="w-50">
          <div className="text-center fs-3 fw-bold mb-2">Changed text</div>
          <div className="border rounded border-1 ft-style-2-shadow">
            <Editor
              height="300px"
              defaultLanguage="javascript"
              defaultValue={state.changedText}
              loading={<Spin size="large" />}
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
      <div className="pb-5">
        {state.diffOriginalText || state.diffChangedText ? (
          <div className="border rounded border-1 ft-style-2-shadow">
            <DiffEditor
              height="300px"
              original={state.diffOriginalText}
              modified={state.diffChangedText}
              keepCurrentOriginalModel={true}
              options={options}
              loading={<Spin size="large" />}
            />
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            <EmptyState
              wrapClass="w-50"
              iconId="code-slash"
              title="Please enter Original and Changed text then press Find Difference button to see the code differences."
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeDiffDetails;
