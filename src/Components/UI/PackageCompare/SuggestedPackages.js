import { Button } from "antd";
import Icon from "./../Common/Icon/Icon";
import PackagePopover from "./PackagePopover";

const SuggestedPackages = ({ suggestedPackages = [] }) => {
  return (
    <div className="d-flex">
      {suggestedPackages.map((packageDetails) => (
        <PackagePopover {...packageDetails} key={packageDetails.name}>
          <Button type="text" size="large" className="ms-2">
            <div className="d-flex align-items-center justify-content-center">
              <Icon id="add" size="xs" />{" "}
              <span className="ms-2">{packageDetails.name}</span>
            </div>
          </Button>
        </PackagePopover>
      ))}
    </div>
  );
};

export default SuggestedPackages;
