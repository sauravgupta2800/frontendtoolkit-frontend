import Icon from "../UI/Common/Icon/Icon";
import { Input, Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../../store/widgetsSlice";
import { isDesktopView } from "../utils";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { MAIN_TABS } from "./config";

const { TabPane } = Tabs;

const Header = () => {
  const history = useHistory();

  return (
    <div
      className={`fe-header d-flex justify-content-between align-items-center w-100 h-100 px-5`}
    >
      <div className="d-flex align-items-center h-100">
        <div
          className="d-flex align-items-center"
          onClick={() => history.replace("/")}
        >
          <Icon id="front" size="lg" iconClass="ft-color-prime" />
          <div className="fs-1 fw-bold ms-2 text-nowrap">Frontend Tools</div>
        </div>
        <HeaderTabs />
        <SearchBar />
      </div>
      <HeadeAction />
    </div>
  );
};

const SearchBar = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.widgets.q);
  return (
    <div className="d-flex align-items-center  ms-2 px-4">
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

const HeaderTabs = () => {
  const history = useHistory();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    let key = location.pathname;
    if (location.pathname.indexOf("/", 1) !== -1)
      key = location.pathname.substring(0, location.pathname.indexOf("/", 1));

    setActiveTab(key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onTabChange = (activeKey) => {
    setActiveTab(activeKey);
    history.replace(`${activeKey}`);
  };

  return (
    <div className="ft-header-tabs h-100 mx-4">
      <Tabs
        type="card"
        activeKey={activeTab}
        size="large"
        onChange={(key) => onTabChange(key)}
      >
        {MAIN_TABS.map((tab) => (
          <TabPane
            forceRender={true}
            tab={
              <div className="d-flex align-items-center">
                <Icon id={tab.id} size={"sm"} />
                <div className="ms-2 fs-3">{tab.name}</div>
              </div>
            }
            key={tab.routeKey}
          />
        ))}
      </Tabs>
    </div>
  );
};

const HeadeAction = () => {
  return (
    <div className="d-flex align-items-center">
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
          <div className="fs-4 ms-2 fw-bold">Request a feature</div>
        </div>
      </a>
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
  );
};

export default Header;
