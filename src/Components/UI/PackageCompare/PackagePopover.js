import Icon from "./../Common/Icon/Icon";
import { Popover } from "antd";
import { intToString } from "../../utils";
const PackagePopover = ({ name, description, stars, downloads, ...rest }) => {
  const content = (
    <div>
      <p>{description}</p>
      <p className="d-flex">
        <div className="d-flex align-items-center">
          <Icon id="star" size="tiny" />
          <div className="ft-color-dark2">{intToString(stars)}</div>
        </div>
        <div className="ms-4 d-flex align-items-center">
          <Icon id="download" size="tiny" />
          <div className="ft-color-dark2">{`${intToString(
            downloads
          )} / week`}</div>
        </div>
      </p>
    </div>
  );

  const title = <div className="fw-bold">{name}</div>;

  return (
    <div>
      <Popover content={content} title={title}>
        {rest.children}
      </Popover>
    </div>
  );
};

export default PackagePopover;
