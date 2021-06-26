import Icon from "../Icon/Icon";
import React from "react";
import { useDispatch } from "react-redux";
import { setRemovedID } from "../../../../store/widgetsSlice";

const DragCard = ({ title = "title", subTitle = "sub title", ...rest }) => {
  const dispatch = useDispatch();

  // const onInfoClick = async () => {
  //   console.log("info handler");
  // };
  const onDeleteClick = () => {
    if (rest.key_name)
      dispatch(setRemovedID({ id: rest.key_name, remove: true }));
  };

  return (
    <div className="w-100 h-100 border ft-border-color-prime88 rounded-6 d-flex flex-column ft-bg-light100 p-4 overflow-auto">
      <div className="d-flex justify-content-between">
        <div className="d-flex  align-items-center">
          <Icon
            size={"xl"}
            withWrapper={false}
            showCursor={false}
            iconClass={"ft-color-prime"}
            {...(rest.iconProps || {})}
          />
          <div className="fs-2 fw-bold ms-3 ft-color-dark">{title}</div>
        </div>
        <div className="d-flex justify-content-between align-items-center ft-card-action-icon">
          {/* <Icon
            id="info"
            size={"md"}
            title={"View Info"}
            onClick={onInfoClick}
          /> */}
          <Icon
            id="delete"
            size={"md"}
            title={"Remove Card"}
            onClick={onDeleteClick}
          />
          <div className="ms-2">
            <Icon
              id="drag"
              size={"sm"}
              withWrapper={false}
              showCursor={false}
              wrapperClass={"cursor-grab"}
              iconClass="ft-color-light1"
            />
          </div>
        </div>
      </div>
      <div className="w-100 d-flex flex-column justify-content-center">
        <div className="mt-4 mb-3 ft-color-dark2 fs-4">{subTitle}</div>
        {rest.contentSlot}
      </div>
      <div className="w-100 d-flex justify-content-center">
        {rest.actionSlot}
      </div>
    </div>
  );
};

export default DragCard;
