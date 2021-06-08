import { Button } from "antd";
import Icon from "./../Common/Icon/Icon";

const SuggestedPackages = ({ suggestedPackages = [] }) => {
  return (
    <div>
      {suggestedPackages.map((packageDetails) => (
        <Button
          type="text"
          size="large"
          className="ms-2"
          key={packageDetails.name}
        >
          <div className="d-flex align-items-center justify-content-center">
            <Icon id="add" size="xs" />{" "}
            <span className="ms-2">{packageDetails.name}</span>
          </div>
        </Button>
      ))}
    </div>
  );
};

export default SuggestedPackages;
