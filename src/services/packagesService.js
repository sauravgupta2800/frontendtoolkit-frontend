import axios from "axios";
import { PACKAGE } from "../shared/endpoints";
import queryString from "query-string";
import { DROPDOWN_OPTIONS } from "./../Components/UI/PackageCompare/config";
/*


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

export const getSimilarPackage = (packages = []) => {
  const searchQueryParams = queryString.stringify({
    "search_query[]": packages,
  });

  return axios.get(PACKAGE.SIMILAR_PACKAGE, {
    params: {
      packages: searchQueryParams,
    },
  });
};

export const getDetails = (packageName) => {
  return axios.get(PACKAGE.PACKAGE_SIZE, {
    params: { package: packageName },
  });
};

export const getWeeklyDownload = (packageName) => {
  return axios.get(PACKAGE.PACKAGE_DOWNLOADS, {
    params: { period: "last-week", package: packageName, type: "point" },
  });
};

export const getRangeDownload = (packageName, key) => {
  const getDate = () => {
    const { start, end } =
      DROPDOWN_OPTIONS.find((option) => option.key === key) || {};
    return `${start}:${end}`;
  };
  return axios.get(PACKAGE.PACKAGE_DOWNLOADS, {
    params: { period: getDate(), package: packageName },
  });
};

export const getRepoDetails = (repositoryUrl) => {
  const repositoryPath = repositoryUrl.split(".com/")[1].replace(".git", "");
  return axios.get(PACKAGE.PACKAGE_GIT_REPO, {
    params: { path: repositoryPath },
  });
};
