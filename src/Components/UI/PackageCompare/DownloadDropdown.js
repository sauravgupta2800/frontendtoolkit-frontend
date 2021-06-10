import { Menu, Dropdown } from "antd";
import { DROPDOWN_OPTIONS } from "./config";
import Icon from "./../Common/Icon/Icon";
import { useState } from "react";

const DownloadDropdown = ({ value, onSelect }) => {
  const [visible, setVisible] = useState(false);

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
        onVisibleChange={(value) => setVisible(value)}
      >
        <div className="ft-dropdown-content border py-3 px-4 cursor-pointer fs-4 fw-bold rounded">
          <div className="d-flex justify-content-center align-items-center">
            {getTitle()}
            <div className="ms-2 d-flex justify-content-center align-items-center">
              <Icon id={visible ? "arrow-up" : "arrow-down"} size="xs" />
            </div>
          </div>
        </div>
      </Dropdown>
    </div>
  );
};

export default DownloadDropdown;
