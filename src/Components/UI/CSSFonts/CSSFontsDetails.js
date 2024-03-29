import { Slider, Spin } from "antd";
import { Fragment, useEffect, useState } from "react";
import FeDropdown from "../Common/Dropdown/FeDropdown";
import RowSeparator from "../Common/Separator/RowSeparator";
import { FIELDS } from "./config";
import isEmpty from "lodash/isEmpty";
import Editor from "@monaco-editor/react";
import prettier from "prettier/standalone";
import parserTypePostcss from "prettier/parser-postcss";
import { editorOptions } from "./../../utils";
import { useClipboard } from "use-clipboard-copy";
import Icon from "../Common/Icon/Icon";
import ColorChromePicker from "./ColorChromePicker";

const CSSFontsDetails = ({ drawerExtraDetails = {}, isDesktopView }) => {
  const [state, setState] = useState({});
  const [cssCode, setCSSCode] = useState("");
  const [styleCode, setStyleCode] = useState({});
  const clipboard = useClipboard({ copiedTimeout: 750 });

  useEffect(() => {
    const stateMap = FIELDS.reduce((acc, { key, styleKey, defaultValue }) => {
      acc[key] = {
        styleKey,
        value:
          drawerExtraDetails?.fontKey && key === "font-family"
            ? drawerExtraDetails?.fontKey
            : defaultValue,
      };
      return acc;
    }, {});
    setState(stateMap);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isEmpty(state)) {
      // CSS Editor code
      let fields = FIELDS.reduce((acc, { key }) => {
        acc[key] = state[key].value;
        return acc;
      }, {});
      fields = `{${Object.entries(fields)
        .map(([k, v]) => `${k}:${v}`)
        .join(";")}}`;
      try {
        fields = prettier.format(fields, {
          parser: "css",
          plugins: [parserTypePostcss],
        });

        setCSSCode(fields);
      } catch {
        //
      }

      // Style code
      const styleCode = FIELDS.reduce((acc, { key, styleKey }) => {
        acc[styleKey] = state[key].value;
        return acc;
      }, {});
      setStyleCode(styleCode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const onSliderChange = (key, value) => {
    setState((prevState) => {
      return {
        ...prevState,
        [key]: {
          ...prevState[key],
          value: `${value}px`,
        },
      };
    });
  };

  const setValue = (key, value) => {
    setState((prevState) => {
      return {
        ...prevState,
        [key]: {
          ...prevState[key],
          value: value,
        },
      };
    });
  };

  return (
    <Fragment>
      {!isEmpty(state) && (
        <div className="w-100 h-100">
          <RowSeparator title="Font Settings" />
          <div className={`w-100 ${isDesktopView ? "px-5" : "px-2"}`}>
            <div className="w-100 d-flex flex-wrap justify-content-between">
              {FIELDS.map((item, index) => (
                <div
                  className={`w-45 ${
                    isDesktopView ? "w-45  my-3" : "w-100 my-2"
                  }`}
                  key={index}
                >
                  <div className="d-flex">
                    <div className="fw-bold fs-4">{item.label} </div>
                    {!!item.slider && (
                      <div className="ms-3">{`(${state[item.key].value})`}</div>
                    )}
                  </div>
                  {!!item.slider ? (
                    <Slider
                      max={50}
                      defaultValue={+state[item.key].value.slice(0, -2)}
                      onChange={(value) => onSliderChange(item.key, value)}
                    />
                  ) : (
                    <>
                      {item.key === "color" ? (
                        <ColorChromePicker
                          color={state[item.key].value}
                          onColorChange={(hex) => setValue(item.key, hex)}
                        />
                      ) : (
                        <FeDropdown
                          value={state[item.key].value}
                          onSelect={(value) => setValue(item.key, value)}
                          options={item.options}
                        />
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <RowSeparator title="Font Preview" />
          <div className={`w-100 ${isDesktopView ? "px-5" : "px-2"}`}>
            <div
              className="w-100 p-4 border ft-style-1-shadow rounded-3"
              style={styleCode}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              dapibus mi tristique ante imperdiet gravida. Fusce nulla lorem,
              accumsan vel lobortis vitae, rutrum et leo. Aliquam sapien leo,
              aliquet eu eleifend quis, elementum id turpis. Nunc purus massa,
              convallis ut faucibus id, varius vitae libero. Cras tempor lacinia
              massa, sit amet commodo ligula suscipit ut. Proin sagittis
              vulputate pharetra. Mauris felis lorem, dictum non sollicitudin
              vitae, dictum sit amet risus. In hac habitasse platea dictumst.
              Curabitur ac varius elit. Quisque vulputate, augue vel mollis
              porta, risus orci molestie orci, ac porttitor lorem leo quis elit.
              Donec eget metus vitae purus imperdiet fermentum. Quisque velit
              dolor, scelerisque et porta sit amet, mattis aliquet odio.
            </div>
          </div>

          <RowSeparator title="CSS Code" />
          <div className={`w-100 pb-5 ${isDesktopView ? "px-5" : "px-2"}`}>
            <div className="ft-card-action-icon d-flex justify-content-end mb-3">
              <Icon
                id="copy"
                size="md"
                title={clipboard.copied ? "Copied" : "Copy"}
                onClick={() => clipboard.copy(cssCode)}
              />
            </div>
            <div className="border rounded border-1 ft-style-2-shadow">
              <Editor
                height="230px"
                language="scss"
                theme="vs-dark"
                value={cssCode}
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
              {/* <pre>
                <code class="html">{cssCode}</code>
              </pre> */}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CSSFontsDetails;
