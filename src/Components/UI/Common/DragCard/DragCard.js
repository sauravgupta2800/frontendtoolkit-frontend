import Icon from "../Icon/Icon";

const DragCard = ({ id = "npm", title = "Package Details" }) => {
  return (
    <div className="w-100 h-100 border rounded-3 d-flex flex-column ft-bg-light100 p-4">
      <div className="d-flex justify-content-between">
        <div className="d-flex  align-items-center">
          <Icon
            id={id}
            size={"xl"}
            withWrapper={false}
            showCursor={false}
            iconClass={"ft-color-prime"}
          />
          <div className="fs-2 fw-bold ms-3 ft-color-dark">{title}</div>
        </div>
        <div className="d-flex justify-content-between align-items-center ft-card-action-icon">
          <Icon id="info" size={"md"} />
          <Icon id="delete" size={"md"} />
          <div className="ms-2">
            <Icon
              id="drag"
              size={"sm"}
              withWrapper={false}
              iconClass="ft-color-light1"
            />
          </div>
        </div>
      </div>
      <div>B</div>
      <div>C</div>
    </div>
  );
};

export default DragCard;
