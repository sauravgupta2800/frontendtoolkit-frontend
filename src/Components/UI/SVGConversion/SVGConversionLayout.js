import { useState } from "react";
import { Spin, Button, Radio } from "antd";
import OptimizedSettings from "./OptimizedSettings";
import Editor from "@monaco-editor/react";
import prettier from "prettier/standalone";
import parserTypeScript from "prettier/parser-typescript";
import { editorOptions } from "./../../utils";
import { TYPES } from "./config";
import Icon from "./../Common/Icon/Icon";

const SVGConversionLayout = ({ svg }) => {
  const [state, setState] = useState({
    optimized: true,
    selectedType: TYPES[0].key,
  });

  const setStatewith = (key, value) => {
    setState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  const onFilterApply = (key) => {
    //
  };

  return (
    <div className="w-100 h-100 d-flex ft-svg-layout">
      <div className="h-100 ft-svg-layout--left">
        <OptimizedSettings
          optimized={state.optimized}
          onOptimizedChange={(value) => setStatewith("optimized", value)}
          onOptionChange={(options) => {
            console.log("onOptionChange", options);
          }}
        />
      </div>
      <div className="h-100 ft-svg-layout--right ps-5">
        <div className="ft-svg-layout--right--header w-100  d-flex justify-content-between align-items-center">
          <Button onClick={() => {}} type="dashed" size="large">
            <div className="d-flex align-items-center">
              <Icon size="sm" id="upload" />
              Upload New SVG
            </div>
          </Button>
          <div>
            <Radio.Group
              value={state.selectedType}
              buttonStyle="solid"
              size="large"
              onChange={(e) => onFilterApply(e.target.value)}
            >
              {TYPES.map((item) => (
                <Radio.Button key={item.key} value={item.key}>
                  {item.value}
                </Radio.Button>
              ))}
            </Radio.Group>
          </div>
        </div>
        <div className="ft-svg-layout--right--content d-flex w-100 rounded-3">
          <div className="ft-svg-layout--right--content--icon w-50 h-100 border d-flex align-items-center justify-content-center rounded-start">
            <img
              src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`}
              alt={svg}
              style={{
                minwidth: "20rem",
                minHeight: "20rem",
                maxwidth: "40rem",
                maxHeight: "40rem",
              }}
            />
          </div>
          <div className="w-50 h-100 border rounded-end">
            <Editor
              height="100%"
              language="scss"
              theme="vs-dark"
              value={prettier.format(svg, {
                parser: "typescript",
                plugins: [parserTypeScript],
              })}
              loading={<Spin size="medium" />}
              options={{ ...editorOptions, readOnly: true }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SVGConversionLayout;
