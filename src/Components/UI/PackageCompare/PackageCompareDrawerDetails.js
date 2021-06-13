import usePackageInfo from "../../customHooks/usePackageInfo";
import PackageSearch from "./../PackageDetails/PackageSearch";
import DownloadDropdown from "./DownloadDropdown";
import SuggestedPackages from "./SuggestedPackages";
import SelectedPackages from "./SelectedPackages";
import DiscoLoader from "../Common/Loader/DiscoLoader";
import RowSeparator from "../Common/Separator/RowSeparator";
import PackageTable from "./PackageTable";
import CompareChart from "./CompareChart";
import Title from "./Title";
import EmptyState from "../Common/EmptyState/EmptyState";

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
      <div className="d-flex flex-wrap">
        <Title selectedPackages={packages} />
        <div className="ms-3 flex-wrap">
          {(fetchingSuggestedPackages || fetchingPackages) && <DiscoLoader />}
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
              <DownloadDropdown
                value={selectedFilterKey}
                onSelect={onFilterSelect}
              />
            </div>
          </div>

          <div>
            <RowSeparator title="Compare Chart" wrapClass="my-5" />
            <div className="px-5">
              <CompareChart
                packages={packages}
                selectedFilterKey={selectedFilterKey}
              />
            </div>
          </div>

          <div>
            <RowSeparator title="Package Stats" wrapClass="mt-5" />
            <div className="px-5">
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
