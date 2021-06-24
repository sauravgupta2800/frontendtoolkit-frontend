import Icon from "../UI/Common/Icon/Icon";

const Sidebar = () => {
  return (
    <div className="ft-sidebar border w-100 h-100 d-flex flex-column">
      <div className="flex-grow-1">
        <div className="d-flex h-100 flex-column justify-content-center align-items-center">
          <SideBarIcon />
          <SideBarIcon id="add" />
          <SideBarIcon id="card-list" />
          <SideBarIcon id="download" />
          <SideBarIcon id="upload" />
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center pb-4">
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

const SideBarIcon = ({ id = "home" }) => {
  return (
    <div className="ft-sidebar--icon p-3 rounded-circle my-4 ft-style-2-shadow-hover">
      <Icon id={id} />
    </div>
  );
};

export default Sidebar;
