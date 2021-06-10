import usePackageInfo from "../../customHooks/usePackageInfo";
import PackageSearch from "./../PackageDetails/PackageSearch";
import DownloadDropdown from "./DownloadDropdown";
import SuggestedPackages from "./SuggestedPackages";
import SelectedPackages from "./SelectedPackages";
import DiscoLoader from "../Common/Loader/DiscoLoader";
import RowSeparator from "../Common/Separator/RowSeparator";
import PackageTable from "./PackageTable";

const PackageCompareDrawerDetails = ({ drawerExtraDetails }) => {
  const {
    packages,
    suggestedPackages,
    fetchingPackages,
    fetchingSuggestedPackages,
    selectedFilterKey,
    onFilterSelect,
    onPackageSelect,
  } = usePackageInfo(drawerExtraDetails.package);

  return (
    <div>
      {(fetchingSuggestedPackages || fetchingPackages) && <DiscoLoader />}
      <div>
        <div>
          <PackageSearch
            clearOnSelect={true}
            onOptionSelect={(name) => onPackageSelect(name)}
          />
        </div>
      </div>
      <div className="d-flex align-items-center my-5">
        <SelectedPackages
          selectedPackages={packages}
          onRemoveClick={() => {}}
        />
        <SuggestedPackages
          suggestedPackages={suggestedPackages}
          onPackageSelect={(name) => onPackageSelect(name)}
        />
      </div>
      <div>
        <RowSeparator title="Select past download filter in" />
        <DownloadDropdown value={selectedFilterKey} onSelect={onFilterSelect} />
      </div>
      <div>
        <RowSeparator title="Package Stats" />
        <PackageTable packages={packages} />
      </div>
    </div>
  );
};

export default PackageCompareDrawerDetails;
