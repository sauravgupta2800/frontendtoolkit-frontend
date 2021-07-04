import { Tabs, Tooltip, Badge, Button } from "antd";
import { useState } from "react";
import Icon from "../Common/Icon/Icon";
import { WIDGETS_TABS } from "./config";
import { isDesktopView } from "../../utils";
import { useSelector } from "react-redux";
import AddPopover from "./AddPopover";
import CustomWidgets from "./CustomWidgets";
import CreateCustomCard from "./CreateCustomCard";
import LayoutPopover from "./LayoutPopover";
const { TabPane } = Tabs;
const WidgetsHeader = ({ activeKey, setActiveKey }) => {
  const [state, setState] = useState({
    addPopverVisible: false,
    createCustomVisible: false,
    customWidgetVisible: false,
    layoutPopverVisible: false,
  });

  const removedItemCount = useSelector(
    (state) => state.widgets.removedIDs.length
  );

  const setStateWith = (key, value) => {
    setState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };
  return (
    <div className="widget-layouts-header px-5 d-flex justify-content-between align-items-center">
      <div className="ft-widget-header">
        <Tabs
          activeKey={activeKey}
          onChange={(key) => setActiveKey(key)}
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

      <div className="d-flex">
        <AddPopover
          visible={state.addPopverVisible}
          onAddPopoverChange={(value) =>
            setStateWith("addPopverVisible", value)
          }
        >
          <SideBarIcon
            selected={state.addPopverVisible}
            id="trash"
            tooltipText="Removed Tools"
            count={removedItemCount}
          />
        </AddPopover>

        <div
          className="ms-4"
          onClick={() => setStateWith("customWidgetVisible", true)}
        >
          <SideBarIcon
            id="card-list"
            tooltipText="Custom Tools"
            selected={state.customWidgetVisible}
          />
        </div>
        <div className="ms-4">
          <LayoutPopover
            visible={state.layoutPopverVisible}
            onVisibleChange={(value) =>
              setStateWith("layoutPopverVisible", value)
            }
          >
            <SideBarIcon
              id="layout-change"
              tooltipText="Change Layout"
              selected={state.layoutPopverVisible}
            />
          </LayoutPopover>
        </div>

        <Button
          type="primary"
          size="middle"
          className="ms-4 px-3 ft-normal-hover"
          onClick={() => {
            setStateWith("createCustomVisible", true);
          }}
        >
          <div className="d-flex align-items-center justify-content-center">
            <Icon id="add" size="xs" />
            <span className="ms-2">Create</span>
          </div>
        </Button>
        <CustomWidgets
          visible={state.customWidgetVisible}
          handleClose={() => setStateWith("customWidgetVisible", false)}
        />

        <CreateCustomCard
          visible={state.createCustomVisible}
          handleClose={() => setStateWith("createCustomVisible", false)}
        />
      </div>
    </div>
  );
};

const SideBarIcon = ({
  id = "home",
  tooltipText = "",
  selected = false,
  count = 0,
}) => {
  return (
    <Tooltip placement="bottom" title={isDesktopView ? tooltipText : ""}>
      <div
        className={`position-relative widget-layouts-header--icon rounded-3 p-1 ft-normal-hover ${
          selected ? "widget-layouts-header--icon--selected" : ""
        } `}
      >
        <Icon id={id} size={"sm"} />
        <Badge
          count={count}
          className={`position-absolute ${
            false
              ? "top-0 end-0 translate-middle-y"
              : "top-0 start-100 translate-middle-x"
          }`}
        />
      </div>
    </Tooltip>
  );
};

export default WidgetsHeader;

/*
 <div
        className={`d-flex flex-column justify-content-center align-items-center ${
          isDesktopView ? "pb-4" : " me-4"
        }`}
      >
        <a
          href={"https://www.buymeacoffee.com/sauravgupta"}
          target="_blank"
          rel="noreferrer"
        >
          <Icon id="buy-me-coffee" size={isDesktopView ? "xl" : "md"} />
        </a>
      </div>
*/
