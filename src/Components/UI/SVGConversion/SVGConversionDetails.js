import { useState } from "react";
import SVGUploadOrPaste from "./SVGUploadOrPaste";
import SVGConversionLayout from "./SVGConversionLayout";

const SVGConversionDetails = () => {
  const [state, setstate] = useState({ showUpload: false });

  const onUploadNew = () => {
    setstate((prevState) => {
      return {
        ...prevState,
        showUpload: true,
      };
    });
  };

  return (
    <div className="w-100 h-100">
      {state.showUpload ? (
        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
          <div className="w-50 h-50">
            <SVGUploadOrPaste />
          </div>
        </div>
      ) : (
        <SVGConversionLayout
          svg='<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"/><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"/><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"/></svg>'
          onUploadNew={() => onUploadNew()}
        />
      )}
    </div>
  );
};

export default SVGConversionDetails;
