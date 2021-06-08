import { useState } from "react";
import { DEFAULT_OPTION } from "../UI/PackageCompare/config";
import {
  getSimilarPackage,
  getDetails,
  getWeeklyDownload,
  getRepoDetails,
} from "./../../services/packagesService";

const usePackageInfo = () => {
  const [state, setState] = useState({
    packages: [],
    suggestedPackages: [],
    selectedFilter: DEFAULT_OPTION,
  });

  const onPackageSelect = (packageName) => {
    fetchSmilarPackagesData(packageName);
    console.log("packageName", packageName);
    // 1. get info (description, repository)
    // 2. get download count
    // 3. get github repo data
  };
  const onFilterSelect = (key) => {
    setStateWith("selectedFilter", key);
  };

  const fetchSmilarPackagesData = async (packageName) => {
    try {
      let suggestedPackages = [];
      let { data } = await getSimilarPackage([packageName]);
      const packages = data.data;
      // Fetch only details
      let promiseArr = packages.map((name) => getDetails(name));
      try {
        const detailResponse = await Promise.all(promiseArr);
        suggestedPackages = detailResponse.map(({ data }) => {
          const { name, description, repository } = data.data;
          return { name, description, repository };
        });
      } catch {
        //
      }

      // Fetch only download counts
      promiseArr = packages.map((name) => getWeeklyDownload(name));
      try {
        const countResponse = await Promise.all(promiseArr);
        suggestedPackages = suggestedPackages.map((item, index) => {
          const { downloads } = countResponse[index].data.data;
          return {
            ...item,
            downloads,
          };
        });
      } catch {
        //
      }

      // Fetch repo data
      promiseArr = suggestedPackages.map(({ repository }) =>
        getRepoDetails(repository)
      );
      try {
        const repoResponse = await Promise.all(promiseArr);
        suggestedPackages = suggestedPackages.map((item, index) => {
          const {
            size,
            updated_at,
            created_at,
            open_issues_count: issues,
            watchers_count: stars,
          } = repoResponse[index].data.data;
          return {
            ...item,
            size,
            updated_at,
            created_at,
            issues,
            stars,
          };
        });
      } catch {
        //
      }
      console.log("suggestedPackages: ", suggestedPackages);
      setStateWith("suggestedPackages", suggestedPackages);
    } catch {
      //
    }
  };

  const setStateWith = (key, value) => {
    setState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  return {
    ...state,
    onFilterSelect,
    onPackageSelect,
  };
};

export default usePackageInfo;
