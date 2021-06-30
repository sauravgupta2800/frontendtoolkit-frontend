import { useEffect, useState } from "react";
import SVGUploadOrPaste from "./SVGUploadOrPaste";
import SVGConversionLayout from "./SVGConversionLayout";

const SVGConversionDetails = ({ drawerExtraDetails = {}, isDesktopView }) => {
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
          <div className={`h-50 ${isDesktopView ? "w-50" : "w-90"}`}>
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
            isDesktopView={isDesktopView}
          />
        )
      )}
    </div>
  );
};

export default SVGConversionDetails;
