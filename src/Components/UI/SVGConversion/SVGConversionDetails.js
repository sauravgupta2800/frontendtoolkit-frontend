import { useEffect, useState } from "react";
import SVGUploadOrPaste from "./SVGUploadOrPaste";
import SVGConversionLayout from "./SVGConversionLayout";

const SVGConversionDetails = ({ drawerExtraDetails = {} }) => {
  const [state, setState] = useState({ showUpload: true, svg: "" });

  const setStateWith = (key, value) => {
    setState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };
  useEffect(() => {
    if (!!drawerExtraDetails.svg) {
      setStateWith("svg", drawerExtraDetails.svg);
      setStateWith("showUpload", false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-100 h-100">
      {state.showUpload ? (
        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
          <div className="w-50 h-50">
            <SVGUploadOrPaste
              onUploaded={({ svg }) => {
                setStateWith("svg", svg);
                setStateWith("showUpload", false);
              }}
            />
          </div>
        </div>
      ) : (
        state.svg && (
          <SVGConversionLayout
            svg={state.svg}
            onUploadNew={() => setStateWith("showUpload", true)}
          />
        )
      )}
    </div>
  );
};

export default SVGConversionDetails;
