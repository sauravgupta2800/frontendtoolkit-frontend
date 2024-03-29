import Icon from "./../Common/Icon/Icon";
import PackagePopover from "./PackagePopover";
export const SelectedPackage = ({
  packageDetails,
  onRemoveClick,
  showCloseIc = true,
  wrapClass = "py-2",
}) => {
  return (
    <PackagePopover {...packageDetails} key={packageDetails.name}>
      <div
        size="large"
        className={`selected-btns me-3 d-flex align-items-center justify-content-center px-4 rounded-3 mb-2 ${wrapClass}`}
        style={{ color: packageDetails.color }}
      >
        <span className="fs-3">{packageDetails.name}</span>
        {showCloseIc && (
          <div className="ms-2 d-flex align-items-center justify-content-center">
            <Icon id="cross" size="xs" onClick={onRemoveClick} />
          </div>
        )}
      </div>
    </PackagePopover>
  );
};

const SelectedPackages = ({ selectedPackages = [], onRemoveClick }) => {
  return (
    <div className="d-flex flex-wrap">
      {selectedPackages.map((packageDetails) => (
        <SelectedPackage
          key={packageDetails.name}
          packageDetails={packageDetails}
          onRemoveClick={() => onRemoveClick(packageDetails.name)}
        />
      ))}
    </div>
  );
};

export default SelectedPackages;
