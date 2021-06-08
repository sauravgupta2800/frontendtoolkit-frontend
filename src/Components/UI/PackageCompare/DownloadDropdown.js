import { Menu, Dropdown } from "antd";
import { DROPDOWN_OPTIONS } from "./config";

const DownloadDropdown = ({ value, onSelect }) => {
  const handleClick = ({ key }) => {
    onSelect(key);
  };

  const menu = (
    <Menu onClick={handleClick} selectedKeys={[value]}>
      {DROPDOWN_OPTIONS.map((option) => (
        <Menu.Item key={option.key}>{option.title}</Menu.Item>
      ))}
    </Menu>
  );

  const getTitle = () => {
    return DROPDOWN_OPTIONS.find((option) => option.key === value).title;
  };

  return (
    <div>
      <Dropdown
        overlayClassName="ft-dropdown"
        overlay={menu}
        trigger={["click"]}
        placement="bottomCenter"
      >
        <div className="ft-dropdown-content border py-3 px-4 cursor-pointer fs-4 fw-bold rounded">
          {getTitle()}
        </div>
      </Dropdown>
    </div>
  );
};

export default DownloadDropdown;
