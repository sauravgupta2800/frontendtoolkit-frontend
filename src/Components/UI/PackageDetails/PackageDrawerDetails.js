import React, { useEffect, useState } from "react";
import PackageSearch from "./PackageSearch";
import axios from "axios";
import { PACKAGE } from "../../../shared/endpoints";
import { bytesToSize } from "./../../utils";
const PackageDrawerDetails = ({ drawerExtraDetails = {} }) => {
  const [state, setState] = useState({ sizeDetails: {} });

  const onOptionSelect = (packageName) => {
    getPackageSize(packageName);
  };

  const getPackageSize = async (packageName) => {
    const { data } = await axios.get(PACKAGE.PACKAGE_SIZE, {
      params: { package: packageName },
    });
    setState({ sizeDetails: data.data });
  };

  useEffect(() => {
    if (drawerExtraDetails.package) getPackageSize(drawerExtraDetails.package);
  }, [drawerExtraDetails.package]);

  return (
    <div>
      <div className="w-100 d-flex align-items-center justify-content-center">
        <div className="w-70">
          <PackageSearch
            name={drawerExtraDetails.package || ""}
            onOptionSelect={onOptionSelect}
          />
        </div>
      </div>
      {/* Size row */}
      <div className="d-flex flex-column justify-content-center align-items-center my-5">
        <div className="text-uppercase fs-1 ft-color-dark3 mb-4">
          bundle size
        </div>
        <div className="d-flex">
          <div className="d-flex flex-column justify-content-center align-items-center border px-5 py-3 border-1 rounded-6 me-5">
            <div className="d-flex justify-content-center align-items-end">
              <div className="ft-fs-1 fw-bold">
                {bytesToSize(state.sizeDetails.size).value}
              </div>
              <div className="ft-fs-2 fw-bold ft-color-dark2 ms-2">
                {bytesToSize(state.sizeDetails.size).label}
              </div>
            </div>
            <div className="ft-color-dark2 text-uppercase">minified</div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center border px-5 py-3 border-1 rounded-6 me-5">
            <div className="d-flex justify-content-center align-items-end">
              <div className="ft-fs-1 fw-bold">
                {bytesToSize(state.sizeDetails.gzip).value}
              </div>
              <div className="ft-fs-2 fw-bold ft-color-dark2 ms-2">
                {bytesToSize(state.sizeDetails.gzip).label}
              </div>
            </div>
            <div className="ft-color-dark2 text-uppercase">
              minified + Gzipped
            </div>
          </div>
          <div class="d-flex flex-column justify-content-center align-items-center border px-5 py-3 border-1 rounded-6">
            <div class="d-flex justify-content-center align-items-end">
              <div className="ft-fs-1 fw-bold">{state.sizeDetails.version}</div>
            </div>
            <div className="ft-color-dark2 text-uppercase">version</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDrawerDetails;
