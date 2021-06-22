import { useState } from "react";
import OptimizedSettings from "./OptimizedSettings";

const SVGConversionLayout = () => {
  const [state, setState] = useState({
    optimized: true,
  });

  const setStatewith = (key, value) => {
    setState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
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
      <div className="h-100 ft-svg-layout--right">bbbbb</div>
    </div>
  );
};

export default SVGConversionLayout;
