import { Button } from "antd";
import Icon from "./../Common/Icon/Icon";
import PackagePopover from "./PackagePopover";

const SelectedPackages = ({ selectedPackages = [], onRemoveClick }) => {
  return (
    <div className="d-flex">
      {selectedPackages.map((packageDetails) => (
        <PackagePopover {...packageDetails} key={packageDetails.name}>
          <div
            size="large"
            className="selected-btns me-3 d-flex align-items-center justify-content-center py-2 px-4 rounded-3"
            style={{ color: packageDetails.color }}
          >
            <span className="fs-3">{packageDetails.name}</span>
            <div className="ms-2 d-flex align-items-center justify-content-center">
              <Icon id="cross" size="xs" onClick={onRemoveClick} />
            </div>
          </div>
        </PackagePopover>
      ))}
    </div>
  );
};

export default SelectedPackages;
