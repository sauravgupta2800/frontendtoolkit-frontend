import React from "react";
import useDynamicSVGImport from "../../../customHooks/useDynamicSVGImport";

const Icon = ({
  withWrapper = true,
  size = "md",
  id = "npm",
  iconClass = "",
  wrapperClass = "",
}) => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(id);
  if (error) {
    return "error.message";
  }
  if (loading) {
    return "Loading...";
  }
  if (SvgIcon) {
    return (
      <div
        className={[
          "d-inline-flex justify-content-center align-items-center ",
          withWrapper && `ft-icon-wrapper ft-icon-wrapper-${size}`,
          wrapperClass,
        ].join(" ")}
      >
        <SvgIcon className={`ft-icon ft-icon-${size} ${iconClass}`} />
      </div>
    );
  }
  return null;
};

export default Icon;
