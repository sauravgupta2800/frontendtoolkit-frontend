import usePackageInfo from "../../customHooks/usePackageInfo";
import PackageSearch from "./../PackageDetails/PackageSearch";
import DownloadDropdown from "./DownloadDropdown";
import SuggestedPackages from "./SuggestedPackages";
import SelectedPackages from "./SelectedPackages";
import DiscoLoader from "../Common/Loader/DiscoLoader";

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
        <div className="d-flex align-items-center">
          <SelectedPackages
            selectedPackages={packages}
            onRemoveClick={() => {}}
          />
          <SuggestedPackages
            suggestedPackages={suggestedPackages}
            onPackageSelect={(name) => onPackageSelect(name)}
          />
        </div>
      </div>
      <div>
        <DownloadDropdown value={selectedFilterKey} onSelect={onFilterSelect} />
      </div>
    </div>
  );
};

export default PackageCompareDrawerDetails;
