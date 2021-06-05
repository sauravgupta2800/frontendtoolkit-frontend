import React, { useEffect, useState } from "react";

const Icon = ({
  withWrapper = true,
  size = "md",
  id = "npm",
  iconClass = "",
  wrapperClass = "",
}) => {
  let [icon, setIcon] = useState("");

  useEffect(() => {
    async function importIcon() {
      let importedIcon = await import(`../../../../assets/Icons/${id}.svg`);
      setIcon(importedIcon.default);
    }
    importIcon();
  }, []);

  return (
    <div
      className={[
        "d-inline-flex justify-content-center align-items-center ",
        withWrapper && `ft-icon-wrapper ft-icon-wrapper-${size}`,
        wrapperClass,
      ].join(" ")}
    >
      <img
        className={`ft-icon ft-icon-${size} ${iconClass}`}
        alt={id}
        src={icon}
      />
    </div>
  );
};

export default Icon;
