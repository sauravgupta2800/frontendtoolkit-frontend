import { useEffect, useState } from "react";
import axios from "axios";
import { SVG_OPTIMIZE } from "./../../../shared/endpoints";
import { Switch, Button } from "antd";

const OptimizedSettings = ({
  optimized = false,
  onOptimizedChange,
  onOptionChange,
}) => {
  const [state, setState] = useState({
    optimized: true,
    options: [],
    savedOptions: [],
  });
  useEffect(() => {
    axios
      .get(`${SVG_OPTIMIZE.SETTING_OPTIONS}`)
      .then(({ data }) => {
        setStatewith("options", data.data);
        setStatewith("savedOptions", data.data);
      })
      .catch();
  }, []);

  useEffect(() => {
    if (state?.options.length) {
      const options = state.options
        .filter((option) => option.value)
        .map((option) => option.key);

      onOptionChange(options);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.options]);

  const setStatewith = (key, value) => {
    setState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  const onResetClick = () => {
    setStatewith("options", state.savedOptions);
  };

  const onOptionKeyChange = (key, value) => {
    const updatedOptions = state.options.map((option) => {
      if (option.key === key) {
        return {
          ...option,
          value,
        };
      }
      return option;
    });
    setStatewith("options", updatedOptions);
  };

  return (
    <div className="w-100 h-100 ft-optimized-settings w-100 border ft-style-1-shadow rounded-3">
      <div className="ft-optimized-settings--header w-100 border-bottom d-flex align-items-center justify-content-between px-4">
        <div className="fs-3 fw-bold">Optimized SVG</div>
        <Switch checked={optimized} onChange={onOptimizedChange} />
      </div>
      <div className="ft-optimized-settings--options w-100 overflow-auto px-4">
        {state.options.map((option) => (
          <div key={option.key} className="d-flex my-3">
            <Switch
              checked={option.value}
              disabled={!optimized}
              size="small"
              className="mt-1"
              onChange={(value) => onOptionKeyChange(option.key, value)}
            />
            <div className="ms-3">{option.label}</div>
          </div>
        ))}
      </div>
      <div className="ft-optimized-settings--footer w-100 border-top d-flex align-items-center justify-content-end px-4">
        <Button onClick={onResetClick} type="primary" disabled={!optimized}>
          Reset All
        </Button>
      </div>
    </div>
  );
};

export default OptimizedSettings;
