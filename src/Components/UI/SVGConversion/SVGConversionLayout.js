import { useEffect, useState } from "react";
import { Spin, Button, Radio } from "antd";
import OptimizedSettings from "./OptimizedSettings";
import Editor from "@monaco-editor/react";
import prettier from "prettier/standalone";
import parserTypeScript from "prettier/parser-typescript";
import { editorOptions } from "./../../utils";
import { TYPES } from "./config";
import Icon from "./../Common/Icon/Icon";
import svgr from "@svgr/core";
const base64 = require("base-64");
const utf8 = require("utf8");

const SVGConversionLayout = ({ svg }) => {
  const [state, setState] = useState({
    optimized: true,
    selectedType: TYPES[0].key,
    html: "",
    jsx: "",
    tsx: "",
    native: "",
    css: "",
    base64: "",
  });

  useEffect(() => {}, []);

  const setStatewith = (key, value) => {
    setState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  const onFilterApply = (key) => {
    const svgText = svg;
    setStatewith("selectedType", key);
    if (key === "html") handleHtmlConversion(svgText);
    else if (key === "jsx") handleJSXConversion(svgText);
    else if (key === "tsx") handleTSXConversion(svgText);
    else if (key === "native") handleNativeConversion(svgText);
    else if (key === "css") handleCSSConversion(svgText);
    else if (key === "base64") handleBase64Conversion(svgText);
  };

  const handleHtmlConversion = (svgText) => {
    const text = prettier.format(svgText, {
      parser: "typescript",
      plugins: [parserTypeScript],
    });
    setStatewith("html", text);
  };

  const handleJSXConversion = (svgText) => {
    svgr(
      svgText,
      { icon: true, typescript: true },
      { componentName: "MyComponent" }
    ).then((jsCode) => {
      console.log(jsCode);
      const text = prettier.format(jsCode, {
        parser: "typescript",
        plugins: [parserTypeScript],
      });
      setStatewith("tsx", text);
    });
  };

  const handleTSXConversion = (svgText) => {
    svgr(svgText, { icon: true }, { componentName: "MyComponent" }).then(
      (jsCode) => {
        console.log(jsCode);
        const text = prettier.format(jsCode, {
          parser: "typescript",
          plugins: [parserTypeScript],
        });
        setStatewith("jsx", text);
      }
    );
  };

  const handleNativeConversion = (svgText) => {
    svgr(
      svgText,
      { icon: true, native: true },
      { componentName: "MyComponent" }
    ).then((jsCode) => {
      console.log(jsCode);
      const text = prettier.format(jsCode, {
        parser: "typescript",
        plugins: [parserTypeScript],
      });
      setStatewith("native", text);
    });
  };

  const handleBase64Conversion = (svgText) => {
    setStatewith("base64", base64.encode(utf8.encode(svgText)));
  };

  const handleCSSConversion = (svgText) => {
    const text = `background-image: url('data:image/svg+xml;utf8,${encodeURIComponent(
      svgText
    )}'); `;

    setStatewith("css", text);
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
              value={state[state.selectedType]}
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
