import usePackageInfo from "../../customHooks/usePackageInfo";
import PackageSearch from "./../PackageDetails/PackageSearch";
import DownloadDropdown from "./DownloadDropdown";
import SuggestedPackages from "./SuggestedPackages";

const PackageCompareDrawerDetails = ({ ...rest }) => {
  const {
    packages,
    suggestedPackages,
    selectedFilter,
    onFilterSelect,
    onPackageSelect,
  } = usePackageInfo();

  return (
    <div>
      <div>
        <div>
          <PackageSearch
            clearOnSelect={true}
            onOptionSelect={onPackageSelect}
          />
        </div>
        <div>
          <SuggestedPackages suggestedPackages={suggestedPackages} />
        </div>
      </div>
      <div>
        <DownloadDropdown value={selectedFilter} onSelect={onFilterSelect} />
      </div>
    </div>
  );
};

export default PackageCompareDrawerDetails;
