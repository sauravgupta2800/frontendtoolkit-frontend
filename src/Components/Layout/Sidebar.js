import Icon from "../UI/Common/Icon/Icon";
import { Tooltip, Badge } from "antd";
import { AddPopover } from "./SidebarComponents/AddPopover";
import { useState } from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [state, setState] = useState({ addPopverVisible: false });
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
            onAddPopoverChange={(value) =>
              setStateWith("addPopverVisible", value)
            }
          >
            <SideBarIcon
              selected={state.addPopverVisible}
              id="add"
              count={removedItemCount}
            />
          </AddPopover>
          {/* <SideBarIcon id="reset" tooltipText="Reset" /> */}
          <SideBarIcon id="card-list" tooltipText="Custom Fields List" />
          <SideBarIcon id="download" tooltipText="Download Cards" />
          <SideBarIcon id="upload" tooltipText="Upload Cards" />
        </div>
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
