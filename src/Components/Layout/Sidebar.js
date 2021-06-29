import Icon from "../UI/Common/Icon/Icon";
import { Tooltip, Badge } from "antd";
import { AddPopover } from "./SidebarComponents/AddPopover";
import { useState } from "react";
import { useSelector } from "react-redux";
import CustomWidgets from "./SidebarComponents/CustomWidgets";
import CreateCustomCard from "./SidebarComponents/CreateCustomCard";
import { isDesktopView } from "../utils";

const Sidebar = () => {
  const [state, setState] = useState({
    addPopverVisible: false,
    customWidgetVisible: false,
    createCustomVisible: false,
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
    <div
      className={`ft-sidebar  w-100 d-flex flex-column ${
        isDesktopView ? "border" : "ft-sidebar--mobile ft-bg-prime88"
      }`}
    >
      <div className="flex-grow-1">
        <div
          className={`d-flex h-100 ${
            isDesktopView ? "flex-column" : ""
          } justify-content-center align-items-center `}
        >
          <SideBarIcon id="home" tooltipText="Home" selected={true} />

          <AddPopover
            visible={state.addPopverVisible}
            onAddPopoverChange={(value) =>
              setStateWith("addPopverVisible", value)
            }
            handleOpenCreate={() => {
              setStateWith("addPopverVisible", false);
              setStateWith("createCustomVisible", true);
            }}
          >
            <SideBarIcon
              selected={state.addPopverVisible || state.createCustomVisible}
              id="add"
              count={removedItemCount}
            />
          </AddPopover>
          <div onClick={() => setStateWith("customWidgetVisible", true)}>
            <SideBarIcon
              id="card-list"
              tooltipText="Custom Cards"
              selected={state.customWidgetVisible}
            />
          </div>
          {/* <SideBarIcon id="download" tooltipText="Download Cards" />
          <SideBarIcon id="upload" tooltipText="Upload Cards" /> */}
        </div>
        <CustomWidgets
          visible={state.customWidgetVisible}
          handleClose={() => setStateWith("customWidgetVisible", false)}
        />
        <CreateCustomCard
          visible={state.createCustomVisible}
          handleClose={() => setStateWith("createCustomVisible", false)}
        />
      </div>
      {isDesktopView && (
        <div className="d-flex flex-column justify-content-center align-items-center pb-4">
          <a
            href={"https://www.buymeacoffee.com/sauravgupta"}
            target="_blank"
            rel="noreferrer"
          >
            <Icon id="buy-me-coffee" size={isDesktopView ? "xl" : "md"} />
          </a>
        </div>
      )}
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
    <Tooltip placement="right" title={tooltipText}>
      <div
        className={`position-relative ft-sidebar--icon rounded-circle my-3 ft-style-2-shadow-hover ${
          selected ? "ft-sidebar--icon--selected" : ""
        } ${isDesktopView ? "p-3" : "p-2 mx-3"}`}
      >
        <Icon id={id} size={isDesktopView ? "md" : "xs"} />
        <Badge
          count={count}
          className="position-absolute top-0 end-0 translate-middle-y"
        />
      </div>
    </Tooltip>
  );
};

export default Sidebar;
