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

const CSSFontsDetails = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    console.log("use effect", FIELDS);
    const stateMap = FIELDS.reduce((acc, { key, styleKey, defaultValue }) => {
      acc[key] = { styleKey, value: defaultValue };
      return acc;
    }, {});
    console.log("state: ", stateMap);
    setState(stateMap);
  }, []);

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
    console.log("onSliderChange: ", key, value);
  };

  const onDropdownSelect = (key, value) => {
    setState((prevState) => {
      return {
        ...prevState,
        [key]: {
          ...prevState[key],
          value: value,
        },
      };
    });
    console.log("onDropdownSelect: ", key, value);
  };

  const getStyle = () => {
    console.log("get style");
    return FIELDS.reduce((acc, { key, styleKey }) => {
      acc[styleKey] = state[key].value;
      return acc;
    }, {});
  };

  const getStyleToEditor = () => {
    console.log("get style");
    let fields = FIELDS.reduce((acc, { key }) => {
      acc[key] = state[key].value;
      return acc;
    }, {});

    const styleString = `{${Object.entries(fields)
      .map(([k, v]) => `${k}:${v}`)
      .join(";")}}`;

    console.log("getStyleToEditor: ", styleString);

    return prettier.format(styleString, {
      parser: "css",
      plugins: [parserTypePostcss],
    });
  };

  return (
    <Fragment>
      {!isEmpty(state) && (
        <div className="w-100 h-100">
          <RowSeparator title="Font Preview" />
          <div className="w-100 px-5">
            <div className="w-100 p-4 border" style={getStyle()}>
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

          <RowSeparator title="Font Settings" />
          <div className="w-100 px-5">
            <div className="w-100 d-flex flex-wrap justify-content-between">
              {FIELDS.map((item, index) => (
                <div className="w-45 my-3" key={index}>
                  <div className="d-flex">
                    <div className="fw-bold fs-4">{item.label} </div>
                    {!!item.slider && (
                      <div className="ms-3">{`(${state[item.key].value})`}</div>
                    )}
                  </div>
                  {!!item.slider ? (
                    <div>
                      <Slider
                        defaultValue={+state[item.key].value.slice(0, -2)}
                        onChange={(value) => onSliderChange(item.key, value)}
                      />
                    </div>
                  ) : (
                    <>
                      {item.key === "color" ? (
                        <div>color</div>
                      ) : (
                        <FeDropdown
                          value={state[item.key].value}
                          onSelect={(value) =>
                            onDropdownSelect(item.key, value)
                          }
                          options={item.options}
                        />
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <RowSeparator title="Font Settings" />
          <div className="w-100 px-5 pb-5">
            <div className="border rounded border-1 ft-style-2-shadow">
              <Editor
                height="230px"
                language="scss"
                theme="vs-dark"
                value={getStyleToEditor()}
                loading={<Spin size="medium" />}
                options={{ ...editorOptions, readOnly: true }}
              />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CSSFontsDetails;
