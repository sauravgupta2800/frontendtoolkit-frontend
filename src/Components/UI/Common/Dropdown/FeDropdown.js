import { Menu, Dropdown } from "antd";
import Icon from "../Icon/Icon";

const FeDropdown = ({ value, onSelect, options, wrapClass = "" }) => {
  const handleClick = ({ key }) => {
    onSelect(key);
  };

  const menu = (
    <Menu onClick={handleClick} selectedKeys={[value]}>
      {options.map((option) => (
        <Menu.Item key={option.key}>{option.title}</Menu.Item>
      ))}
    </Menu>
  );

  const getTitle = () => {
    const { title } = options.find((option) => option.key === value) || {};
    return title || "";
  };

  return (
    <div className={wrapClass}>
      <Dropdown
        overlayClassName="ft-dropdown w-fit"
        overlay={menu}
        trigger={["click"]}
        placement="bottomCenter"
      >
        <div className="ft-dropdown-content border py-3 px-4 cursor-pointer fs-4 fw-bold rounded">
          <div className="d-flex justify-content-between align-items-center">
            <div>{getTitle()}</div>
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
