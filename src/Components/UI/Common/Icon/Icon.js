import React from "react";
import { Tooltip } from "antd";

import useDynamicSVGImport from "../../../customHooks/useDynamicSVGImport";

const Icon = ({
  withWrapper = true,
  size = "md",
  id,
  iconClass = "",
  wrapperClass = "",
  showCursor = true,
  ...rest
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
      <Tooltip placement="top" {...rest}>
        <div
          className={[
            "d-inline-flex justify-content-center align-items-center rounded",
            showCursor && "cursor-pointer",
            withWrapper && `ft-icon-wrapper ft-icon-wrapper-${size}`,
            wrapperClass,
          ].join(" ")}
        >
          <SvgIcon className={`ft-icon ft-icon-${size} ${iconClass}`} />
        </div>
      </Tooltip>
    );
  }
  return null;
};

export default Icon;
