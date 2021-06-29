import usePackageInfo from "../../customHooks/usePackageInfo";
import PackageSearch from "./../PackageDetails/PackageSearch";
import FeDropdown from "../Common/Dropdown/FeDropdown";
import SuggestedPackages from "./SuggestedPackages";
import SelectedPackages from "./SelectedPackages";
import RowSeparator from "../Common/Separator/RowSeparator";
import PackageTable from "./PackageTable";
import CompareChart from "./CompareChart";
import Title from "./Title";
import { Spin } from "antd";
import EmptyState from "../Common/EmptyState/EmptyState";
import { DROPDOWN_OPTIONS } from "./config";
import { isDesktopView } from "../../utils";

const PackageCompareDrawerDetails = ({ drawerExtraDetails }) => {
  const {
    packages,
    suggestedPackages,
    fetchingPackages,
    fetchingSuggestedPackages,
    selectedFilterKey,
    onFilterSelect,
    onPackageSelect,
    onPackageRemove,
  } = usePackageInfo(drawerExtraDetails.package);

  return (
    <div>
      <div className="d-flex flex-wrap align-items-center">
        <Title selectedPackages={packages} />
        <div className="ms-3 mt-3 flex-wrap">
          {(fetchingSuggestedPackages || fetchingPackages) && (
            <Spin size="default" />
          )}
        </div>
      </div>
      <div>
        <PackageSearch
          clearOnSelect={true}
          onOptionSelect={(name) => onPackageSelect(name)}
        />
      </div>

      <div className="d-flex align-items-center flex-wrap my-3">
        <SelectedPackages
          selectedPackages={packages}
          onRemoveClick={onPackageRemove}
        />
        {!fetchingSuggestedPackages && (
          <SuggestedPackages
            suggestedPackages={suggestedPackages}
            onPackageSelect={(name) => onPackageSelect(name)}
          />
        )}
      </div>
      {packages.length ? (
        <div>
          <div>
            <RowSeparator title="Select past download filter in" />
            <div className="px-5">
              <FeDropdown
                wrapClass={`w-${isDesktopView ? 30 : 100}`}
                value={selectedFilterKey}
                onSelect={onFilterSelect}
                valueKey="key"
                labelKey="title"
                options={DROPDOWN_OPTIONS}
              />
            </div>
          </div>

          <div>
            <RowSeparator title="Compare Chart" wrapClass="my-5" />
            <div className={`px-${isDesktopView ? 5 : 0}`}>
              <CompareChart
                packages={packages}
                selectedFilterKey={selectedFilterKey}
              />
            </div>
          </div>

          <div>
            <RowSeparator title="Package Stats" wrapClass="mt-5" />
            <div className={`px-${isDesktopView ? 5 : 0} pb-5 w-100`}>
              <PackageTable packages={packages} />
            </div>
          </div>
        </div>
      ) : (
        <EmptyState
          iconId="clipboard"
          title="Please type and/or select some of the packages to view the details"
        />
      )}
    </div>
  );
};

export default PackageCompareDrawerDetails;
