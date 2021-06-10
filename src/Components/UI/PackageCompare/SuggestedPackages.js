import { Button } from "antd";
import Icon from "./../Common/Icon/Icon";
import PackagePopover from "./PackagePopover";

export const SuggestedPackage = ({ packageDetails, onPackageSelect }) => {
  return (
    <PackagePopover {...packageDetails} key={packageDetails.name}>
      <Button
        type="text"
        size="large"
        className="me-3 mb-2"
        onClick={() => onPackageSelect(packageDetails.name)}
      >
        <div className="d-flex align-items-center justify-content-center">
          <Icon id="add" size="xs" />
          <span className="ms-2">{packageDetails.name}</span>
        </div>
      </Button>
    </PackagePopover>
  );
};

const SuggestedPackages = ({ suggestedPackages = [], onPackageSelect }) => {
  return (
    <div className="d-flex flex-wrap">
      {suggestedPackages.map((packageDetails) => (
        <SuggestedPackage
          key={packageDetails.name}
          packageDetails={packageDetails}
          onPackageSelect={onPackageSelect}
        />
      ))}
    </div>
  );
};

export default SuggestedPackages;
