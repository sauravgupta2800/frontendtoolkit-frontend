import Icon from "./../Common/Icon/Icon";
import { Popover } from "antd";
import { intToString } from "../../utils";
const PackagePopover = ({
  name,
  description,
  stars,
  downloadsInWeek,
  ...rest
}) => {
  const content = (
    <div>
      <p>{description}</p>
      <div className="d-flex">
        {stars && (
          <div className="d-flex align-items-center">
            <Icon id="star" size="tiny" />
            <div className="ft-color-dark2">{intToString(stars)}</div>
          </div>
        )}
        {downloadsInWeek && (
          <div className="ms-4 d-flex align-items-center">
            <Icon id="download" size="tiny" />
            <div className="ft-color-dark2">{`${intToString(
              downloadsInWeek
            )} / week`}</div>
          </div>
        )}
      </div>
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
