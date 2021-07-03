import { Tabs } from "antd";
import { useState } from "react";
import Icon from "../Common/Icon/Icon";
import { WIDGETS_TABS } from "./config";
const { TabPane } = Tabs;
const WidgetsHeader = () => {
  const [state, setState] = useState({ activeKey: "all" });
  const setStateWith = (key, value) => {
    setState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };
  return (
    <div className="px-5 d-flex justify-content-between align-items-center">
      <div className="ft-widget-header">
        <Tabs
          activeKey={state.activeKey}
          onChange={(key) => setStateWith("activeKey", key)}
          tabBarGutter={20}
        >
          {WIDGETS_TABS.map((tab) => (
            <TabPane
              tab={
                <div className="d-flex align-items-center">
                  <Icon id={tab.id} size="xs" />
                  <div className="ms-2">{tab.title}</div>
                </div>
              }
              key={tab.key}
            />
          ))}
        </Tabs>
      </div>

      <div>Action</div>
    </div>
  );
};

export default WidgetsHeader;
