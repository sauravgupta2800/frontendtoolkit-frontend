import Icon from "./../UI/Common/Icon/Icon";
import { Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../../store/widgetsSlice";
import { isDesktopView } from "../utils";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <div
      className={`fe-header d-flex justify-content-between align-items-center w-100 h-100 ${
        isDesktopView ? "px-5" : "px-3"
      }`}
    >
      <div className="d-flex align-items-center">
        <div
          className="d-flex align-items-center"
          onClick={() => history.replace("/")}
        >
          <Icon id="front" size="lg" iconClass="ft-color-prime" />
          <div className="fs-1 fw-bold ms-2 text-nowrap">Frontend Devtools</div>
        </div>
        {/* <div>
          <Icon id="logo" size="" />
        </div> */}
        {isDesktopView && <SearchBar />}
      </div>
      <div className="d-flex align-items-center">
        {isDesktopView && (
          <a
            href={"https://github.com/sauravgupta2800/frontendtools"}
            target="_blank"
            className="text-decoration-none"
            rel="noreferrer"
          >
            <div className="border rounded-3 cursor-pointer d-flex align-items-center ft-color-dark1 ft-bg-prime98 ft-style-1-shadow ft-border-color-prime88 ft-style-2-shadow-hover  px-3 py-1">
              <div>
                <Icon id="github" size="md" />
              </div>

              {isDesktopView && (
                <div className="fs-4 ms-2 fw-bold">Request a feature</div>
              )}
            </div>
          </a>
        )}
        <a
          href="https://www.producthunt.com/posts/frontend-devtools?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-frontend-devtools"
          target="_blank"
          rel="noreferrer"
          className="ms-3"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=302650&theme=light"
            alt="Frontend Devtools - Customized platform for Frontend Developer's repeated tasks | Product Hunt"
            width={isDesktopView ? "170" : "120"}
            height="42"
          />
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
