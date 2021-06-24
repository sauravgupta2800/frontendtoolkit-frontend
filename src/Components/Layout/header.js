import Icon from "./../UI/Common/Icon/Icon";
import { Input } from "antd";

const Header = () => {
  return (
    <div className="fe-header d-flex justify-content-between align-items-center w-100 h-100 px-5">
      <div className="d-flex align-items-center">
        <div>
          <Icon id="logo" size="" />
        </div>
        <SearchBar />
      </div>
      <div>
        <div className="border rounded-3 cursor-pointer d-flex align-items-center ft-bg-prime98 ft-style-1-shadow ft-border-color-prime88 ft-style-2-shadow-hover  px-3 py-1">
          <div className="me-2">
            <Icon id="github" size="md" />
          </div>
          <div className="fs-4 fw-bold">Request a feature</div>
        </div>
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="d-flex align-items-center border-start ms-4 px-4">
      <div className="ft-icon-dark2">
        <Icon id="search" size="xs" />
      </div>
      <Input placeholder="Search tools ..... " size="large" bordered={false} />
    </div>
  );
};

export default Header;
