/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import { DEFAULT_OPTION, getColor } from "../UI/PackageCompare/config";
import {
  getSimilarPackage,
  getDetails,
  getWeeklyDownload,
  getRepoDetails,
  getRangeDownload,
} from "./../../services/packagesService";
import cloneDeep from "lodash/cloneDeep";

const usePackageInfo = (name) => {
  const [state, setState] = useState({
    currentPackage: "",
    packages: [],
    suggestedPackages: [],
    fetchingPackages: false,
    fetchingSuggestedPackages: false,
    selectedFilterKey: DEFAULT_OPTION,
  });

  const notInitialRender = useRef(false);

  useEffect(() => {
    setStateWith("currentPackage", "");
  }, []);

  useEffect(() => {
    setStateWith("currentPackage", name);
  }, [name]);

  useEffect(() => {
    const fetchPackageDetails = async (packageName) => {
      setStateWith("fetchingPackages", true);
      try {
        const details = await getDetails(packageName);
        const { name, description, repository } = details.data.data;
        try {
          const response = await Promise.all([
            getRangeDownload(packageName, state.selectedFilterKey),
            getRepoDetails(repository),
            getWeeklyDownload(name),
          ]);

          const { downloads } = response[0].data.data;
          const {
            size,
            updated_at,
            created_at,
            open_issues_count: issues,
            watchers_count: stars,
            homepage,
          } = response[1].data.data;

          const { downloads: downloadsInWeek } = response[2].data.data;

          const currentPackage = {
            name,
            description,
            repository,
            downloads,
            downloadsInWeek,
            size,
            updated_at,
            stars,
            created_at,
            issues,
            homepage,
          };

          setStateWith(
            "packages",
            state.packages.concat({
              ...currentPackage,
              color: getColor(state.packages.length),
            })
          );
        } catch {
          //
        }
      } catch {
        //
      } finally {
        setStateWith("fetchingPackages", false);
      }
    };
    const packages = cloneDeep(state.packages).map((p) => p.name);
    if (state.currentPackage && !packages.includes(state.currentPackage))
      fetchPackageDetails(state.currentPackage);
  }, [state.currentPackage]);

  useEffect(() => {
    const fetchSmilarPackagesData = async (packageNames) => {
      setStateWith("fetchingSuggestedPackages", true);
      try {
        let suggestedPackages = [];
        let { data } = await getSimilarPackage(packageNames);
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
            const { downloads: downloadsInWeek } =
              countResponse[index].data.data;
            return {
              ...item,
              downloadsInWeek,
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
              homepage,
            } = repoResponse[index].data.data;
            return {
              ...item,
              size,
              updated_at,
              created_at,
              issues,
              stars,
              homepage,
            };
          });
        } catch {
          //
        }

        setStateWith("suggestedPackages", suggestedPackages);
      } catch {
        //
      } finally {
        setStateWith("fetchingSuggestedPackages", false);
      }
    };
    const packages = cloneDeep(state.packages).map((p) => p.name);
    if (state.currentPackage && !packages.includes(state.currentPackage))
      fetchSmilarPackagesData(packages.concat(state.currentPackage));
  }, [state.currentPackage]);

  useEffect(() => {
    if (notInitialRender.current) {
      const fetchDownloads = async () => {
        const packages = state.packages.map((p) => p.name);
        try {
          const downloadDetails = await Promise.all(
            packages.map((name) =>
              getRangeDownload(name, state.selectedFilterKey)
            )
          );

          const updatedPackages = state.packages.map((oldDetails, index) => {
            const { downloads } = downloadDetails[index].data.data;
            return {
              ...oldDetails,
              downloads,
            };
          });
          setStateWith("packages", updatedPackages);
        } catch {}
      };
      fetchDownloads();
    } else {
      notInitialRender.current = true;
    }
  }, [state.selectedFilterKey]);

  const onPackageSelect = async (packageName) => {
    setStateWith("currentPackage", packageName);
  };

  const onPackageRemove = (name) => {
    const updatedPackages = state.packages.filter((item) => item.name !== name);
    setStateWith("packages", updatedPackages);
  };

  const onFilterSelect = (key) => {
    setStateWith("selectedFilterKey", key);
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
    onPackageRemove,
  };
};

export default usePackageInfo;
