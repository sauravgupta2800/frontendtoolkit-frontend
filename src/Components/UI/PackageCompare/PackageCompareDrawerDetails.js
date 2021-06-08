import { useState } from "react";
import usePackageInfo from "../../customHooks/usePackageInfo";
import PackageSearch from "./../PackageDetails/PackageSearch";
import DownloadDropdown from "./DownloadDropdown";
import { DEFAULT_OPTION } from "./config";

const PackageCompareDrawerDetails = ({ ...rest }) => {
  const [state, setState] = useState({ selectedFilter: DEFAULT_OPTION });
  const { packages } = usePackageInfo();

  const onOptionSelect = (packageName) => {
    console.log("packageName", packageName);
  };

  const onFilterSelect = (key) => {
    setState((prevState) => {
      return {
        ...prevState,
        selectedFilter: key,
      };
    });
  };

  return (
    <div>
      <div>
        <PackageSearch clearOnSelect={true} onOptionSelect={onOptionSelect} />
      </div>
      <div>
        <DownloadDropdown
          value={state.selectedFilter}
          onSelect={onFilterSelect}
        />
      </div>
    </div>
  );
};

export default PackageCompareDrawerDetails;

/*

import queryString from "query-string";
import axios from "axios";


 const searchQueryParams = queryString.stringify({
    "search_query[]": ["vue", "react", "@angular/core"],
  });


   await axios(
      `https://api.npmtrends.com/s/related_packages?${searchQueryParams}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
*/
