import { useEffect, useState } from "react";
import { Spin, Button, Radio } from "antd";
import OptimizedSettings from "./OptimizedSettings";
import Editor from "@monaco-editor/react";
import prettier from "prettier/standalone";
import parserTypeScript from "prettier/parser-typescript";
import { editorOptions } from "./../../utils";
import { TYPES } from "./config";
import { SVG_OPTIMIZE } from "./../../../shared/endpoints";
import { byteSize, fixedDecimal, bytesToSize } from "./../../utils";
import Icon from "./../Common/Icon/Icon";
import svgr from "@svgr/core";
import axios from "axios";
import { useClipboard } from "use-clipboard-copy";

const base64 = require("base-64");
const utf8 = require("utf8");

const SVGConversionLayout = ({ svg, onUploadNew, isDesktopView = false }) => {
  const clipboard = useClipboard({ copiedTimeout: 750 });
  const [state, setState] = useState({
    optimizedSvg: "",
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

  const setStateWith = (key, value) => {
    setState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  const onFilterApply = (key) => {
    setStateWith("selectedType", key);
    const svgText = state.optimized ? state.optimizedSvg : svg;
    filterHandler(key, svgText);
  };

  const onOptimizationChange = (value) => {
    setStateWith("optimized", value);
    const svgText = value ? state.optimizedSvg : svg;
    filterHandler(state.selectedType, svgText);
  };

  const filterHandler = (key, svgText) => {
    if (key === "html") handleHtmlConversion(svgText);
    else if (key === "jsx") handleJSXConversion(svgText);
    else if (key === "tsx") handleTSXConversion(svgText);
    else if (key === "native") handleNativeConversion(svgText);
    else if (key === "css") handleCSSConversion(svgText);
    else if (key === "base64") handleBase64Conversion(svgText);
  };

  const handleHtmlConversion = (svgText) => {
    try {
      const text = prettier.format(svgText, {
        parser: "typescript",
        plugins: [parserTypeScript],
      });
      setStateWith("html", text);
    } catch {
      //
    }
  };

  const handleJSXConversion = (svgText) => {
    svgr(svgText, { icon: true }, { componentName: "MyComponent" }).then(
      (jsCode) => {
        try {
          const text = prettier.format(jsCode, {
            parser: "typescript",
            plugins: [parserTypeScript],
          });
          setStateWith("jsx", text);
        } catch {
          //
        }
      }
    );
  };

  const handleTSXConversion = (svgText) => {
    svgr(
      svgText,
      { icon: true, typescript: true },
      { componentName: "MyComponent" }
    ).then((jsCode) => {
      try {
        const text = prettier.format(jsCode, {
          parser: "typescript",
          plugins: [parserTypeScript],
        });
        setStateWith("tsx", text);
      } catch {
        //
      }
    });
  };

  const handleNativeConversion = (svgText) => {
    svgr(
      svgText,
      { icon: true, native: true },
      { componentName: "MyComponent" }
    ).then((jsCode) => {
      try {
        const text = prettier.format(jsCode, {
          parser: "typescript",
          plugins: [parserTypeScript],
        });
        setStateWith("native", text);
      } catch {
        //
      }
    });
  };

  const handleCSSConversion = (svgText) => {
    const text = `background-image: url('data:image/svg+xml;utf8,${encodeURIComponent(
      svgText
    )}'); `;

    setStateWith("css", text);
  };

  const handleBase64Conversion = (svgText) => {
    try {
      const base64Text = base64.encode(utf8.encode(svgText));
      setStateWith("base64", base64Text);
    } catch {
      //
    }
  };

  const fetchOptimized = (options) => {
    axios
      .post(SVG_OPTIMIZE.OPTIMIZED, {
        svg,
        config: {
          plugins: options,
        },
      })
      .then(({ data }) => {
        setStateWith("optimizedSvg", data.data);
        filterHandler(state.selectedType, data.data);
      })
      .catch();
  };

  return (
    <div
      className={`w-100 h-100 d-flex ft-svg-layout ${
        !isDesktopView && "flex-column"
      }`}
    >
      <div
        className={`h-100 ft-svg-layout--left ${
          !isDesktopView && "ft-svg-layout--left--full"
        }`}
      >
        <OptimizedSettings
          optimized={state.optimized}
          onOptimizedChange={(value) => onOptimizationChange(value)}
          onOptionChange={(options) => fetchOptimized(options)}
        />
      </div>
      <div
        className={`h-100 ft-svg-layout--right ${
          isDesktopView ? "ps-5" : "ft-svg-layout--right--full"
        }`}
      >
        <div
          className={`w-100  d-flex justify-content-between align-items-center ${
            isDesktopView ? "ft-svg-layout--right--header" : "flex-column py-4"
          }`}
        >
          <Button
            onClick={onUploadNew}
            type="dashed"
            size="large"
            className={`${isDesktopView ? "" : "my-4"}`}
          >
            <div className="d-flex align-items-center">
              <Icon size="sm" id="upload" />
              New Upload
            </div>
          </Button>

          <div className="d-flex align-items-center flex-wrap">
            <Radio.Group
              value={state.selectedType}
              buttonStyle="solid"
              size={isDesktopView ? "large" : "middle"}
              onChange={(e) => onFilterApply(e.target.value)}
            >
              {TYPES.map((item) => (
                <Radio.Button key={item.key} value={item.key}>
                  {item.value}
                </Radio.Button>
              ))}
            </Radio.Group>
            <div className="ft-card-action-icon ms-4">
              <Icon
                id="copy"
                size="md"
                title={clipboard.copied ? "Copied" : "Copy"}
                onClick={() => clipboard.copy(state[state.selectedType])}
              />
            </div>
          </div>
        </div>
        <div
          className={`ft-svg-layout--right--content w-100 d-flex w-100 rounded-3 ${
            isDesktopView ? "" : "flex-column"
          }`}
        >
          <div
            className={`ft-svg-layout--right--content--icon overflow-auto h-100 border d-flex flex-column align-items-center justify-content-center rounded-start ${
              isDesktopView ? "w-50" : "w-100"
            }`}
          >
            <img
              src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`}
              alt={svg}
              style={{
                minwidth: isDesktopView ? "20rem" : "10rem",
                minHeight: isDesktopView ? "20rem" : "10rem",
                maxwidth: isDesktopView ? "40rem" : "20rem",
                maxHeight: isDesktopView ? "40rem" : "20rem",
              }}
            />
            {state.optimized && (
              <div className="mt-5 d-flex ft-bg-light100 ft-style-2-shadow align-items-center justify-content-center border border-2 rounded-3 px-3">
                <div className="fs-4 mt-1">{`${
                  bytesToSize(byteSize(svg)).value
                } ${bytesToSize(byteSize(svg)).label}`}</div>
                <div className="fs-4 mt-1 mx-1">→</div>
                <div className="fs-4 mt-1">{`${
                  bytesToSize(byteSize(state.optimizedSvg)).value
                } ${bytesToSize(byteSize(state.optimizedSvg)).label}`}</div>
                <div className="ms-2 fs-3 ft-color-green">
                  {`${
                    byteSize(state.optimizedSvg)
                      ? fixedDecimal(
                          (byteSize(state.optimizedSvg) / byteSize(svg)) * 100,
                          2
                        )
                      : "0"
                  }%`}
                </div>
              </div>
            )}
          </div>
          <div
            className={`h-100 border rounded-end ${
              isDesktopView ? "w-50" : "w-100"
            }`}
          >
            <Editor
              height="100%"
              language="scss"
              theme="vs-dark"
              value={state[state.selectedType]}
              loading={<Spin size="medium" />}
              options={{
                ...editorOptions,
                readOnly: true,
                ...(!isDesktopView && {
                  lineDecorationsWidth: 0,
                  lineNumbersMinChars: 0,
                }),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SVGConversionLayout;
