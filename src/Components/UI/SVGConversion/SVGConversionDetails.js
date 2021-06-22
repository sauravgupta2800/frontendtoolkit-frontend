import { useState } from "react";
import SVGUploadOrPaste from "./SVGUploadOrPaste";
import SVGConversionLayout from "./SVGConversionLayout";

// import svgr from "@svgr/core";

/*

    const svgCode = `
<svg xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect x="10" y="10" height="100" width="100"
    style="stroke:#ff0000; fill: #0000ff"/>
</svg>
`;
    svgr(svgCode, { icon: true }, { componentName: "MyComponent" }).then(
      (jsCode) => {
        console.log(jsCode);
      }
    );

    svgr(
      svgCode,
      { icon: true, native: true },
      { componentName: "MyComponent" }
    ).then((jsCode) => {
      console.log(jsCode);
    })

*/

const SVGConversionDetails = () => {
  const [state, setstate] = useState({ showUpload: true });

  return (
    <div className="w-100 h-100">
      {state.showUpload ? (
        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
          <div className="w-50" style={{ height: "400px" }}>
            <SVGUploadOrPaste />
          </div>
        </div>
      ) : (
        <SVGConversionLayout />
      )}
    </div>
  );
};

export default SVGConversionDetails;
