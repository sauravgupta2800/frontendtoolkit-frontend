import { Menu, Dropdown } from "antd";
import Icon from "../Icon/Icon";

const FeDropdown = ({
  value,
  onSelect,
  options,
  wrapClass = "",
  valueKey = "key",
  labelKey = "label",
}) => {
  const handleClick = (item) => {
    onSelect(item[valueKey]);
  };

  const menu = (
    <Menu onClick={handleClick} selectedKeys={[value]}>
      {options.map((option) => (
        <Menu.Item key={option[valueKey]}>{option[labelKey]}</Menu.Item>
      ))}
    </Menu>
  );

  const getTitle = () => {
    const item = options.find((option) => option[valueKey] === value) || {};
    return item[labelKey] || "";
  };

  return (
    <div className={`ft-style-1-shadow  ${wrapClass}`}>
      <Dropdown
        overlayClassName="ft-dropdown w-fit"
        overlay={menu}
        trigger={["click"]}
        placement="bottomCenter"
      >
        <div className="ft-dropdown-content border py-3 px-4 cursor-pointer fs-4 fw-bold rounded">
          <div className="d-flex justify-content-between align-items-center">
            <div className="fw-normal">{getTitle()}</div>
            <div className="ms-2 d-flex justify-content-center align-items-center">
              <Icon id="arrow-down" size="xs" />
            </div>
          </div>
        </div>
      </Dropdown>
    </div>
  );
};

export default FeDropdown;
