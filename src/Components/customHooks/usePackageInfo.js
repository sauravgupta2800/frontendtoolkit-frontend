import React, { useState } from "react";

const usePackageInfo = () => {
  const [state, setState] = useState([]);
  const onPackageSelect = (packageName) => {
    // 1. get info (description, repository)
    // 2. get download count
    // 3. get github repo data
  };
  return {
    packages: state,
  };
};

export default usePackageInfo;
