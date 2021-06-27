import Icon from "../UI/Common/Icon/Icon";
import { Tooltip, Badge } from "antd";
import { AddPopover } from "./SidebarComponents/AddPopover";
import { useState } from "react";
import { useSelector } from "react-redux";
import CustomWidgets from "./SidebarComponents/CustomWidgets";
import CreateCustomCard from "./SidebarComponents/CreateCustomCard";

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
    <div className="ft-sidebar border w-100 h-100 d-flex flex-column">
      <div className="flex-grow-1">
        <div className="d-flex h-100 flex-column justify-content-center align-items-center">
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
      <div className="d-flex flex-column justify-content-center align-items-center pb-4">
        <a
          href={"https://www.buymeacoffee.com/sauravgupta"}
          target="_blank"
          rel="noreferrer"
        >
          <Icon id="buy-me-coffee" size="xl" />
        </a>
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
    <Tooltip placement="right" title={tooltipText}>
      <div
        className={`position-relative ft-sidebar--icon p-3 rounded-circle my-3 ft-style-2-shadow-hover ${
          selected ? "ft-sidebar--icon--selected" : ""
        }`}
      >
        <Icon id={id} />
        <Badge
          count={count}
          className="position-absolute top-0 end-0 translate-middle-y"
        />
      </div>
    </Tooltip>
  );
};

export default Sidebar;
