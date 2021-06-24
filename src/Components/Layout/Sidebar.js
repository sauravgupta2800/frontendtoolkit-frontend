import Icon from "../UI/Common/Icon/Icon";
import { Tooltip } from "antd";

const Sidebar = () => {
  return (
    <div className="ft-sidebar border w-100 h-100 d-flex flex-column">
      <div className="flex-grow-1">
        <div className="d-flex h-100 flex-column justify-content-center align-items-center">
          <SideBarIcon id="home" tooltipText="Home" selected={true} />
          <SideBarIcon id="add" tooltipText="Add" />
          <SideBarIcon id="reset" tooltipText="Reset" />
          <SideBarIcon id="card-plus" tooltipText="Create Custom Card" />
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
  tooltipText = "tooltipText",
  selected = false,
}) => {
  return (
    <Tooltip placement="right" title={tooltipText}>
      <div
        className={`ft-sidebar--icon p-3 rounded-circle my-3 ft-style-2-shadow-hover ${
          selected ? "ft-sidebar--icon--selected" : ""
        }`}
      >
        <Icon id={id} />
      </div>
    </Tooltip>
  );
};

export default Sidebar;
