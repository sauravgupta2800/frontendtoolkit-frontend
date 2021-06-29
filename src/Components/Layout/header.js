import Icon from "./../UI/Common/Icon/Icon";
import { Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../../store/widgetsSlice";
import { isDesktopView } from "../utils";

const Header = () => {
  return (
    <div className="fe-header d-flex justify-content-between align-items-center w-100 h-100 px-5">
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <Icon id="front" size="lg" iconClass="ft-color-prime" />
          <div className="fs-1 fw-bold ms-2 text-nowrap">Frontend Devtools</div>
        </div>
        {/* <div>
          <Icon id="logo" size="" />
        </div> */}
        {isDesktopView && <SearchBar />}
      </div>
      <div>
        <a
          href={"https://github.com/sauravgupta2800/frontendtools"}
          target="_blank"
          className="text-decoration-none"
          rel="noreferrer"
        >
          <div className="border rounded-3 cursor-pointer d-flex align-items-center ft-color-dark1 ft-bg-prime98 ft-style-1-shadow ft-border-color-prime88 ft-style-2-shadow-hover  px-3 py-1">
            <div className="me-2">
              <Icon id="github" size="md" />
            </div>

            {isDesktopView && (
              <div className="fs-4 fw-bold">Request a feature</div>
            )}
          </div>
        </a>
      </div>
    </div>
  );
};

const SearchBar = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.widgets.q);
  return (
    <div className="d-flex align-items-center border-start ms-4 px-4">
      <div className="ft-icon-dark2">
        <Icon id="search" size="xs" />
      </div>
      <Input
        placeholder="Search tools ..... "
        size="large"
        value={value}
        bordered={false}
        onInput={(event) => dispatch(setQuery(event.target.value))}
      />
    </div>
  );
};

export default Header;
