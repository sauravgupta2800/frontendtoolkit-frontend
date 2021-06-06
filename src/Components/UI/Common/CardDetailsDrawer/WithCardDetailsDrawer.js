import React from "react";
import { Drawer } from "antd";
import Icon from "../Icon/Icon";

const WithCardDetailsDrawer = ({
  id,
  title,
  visible = false,
  onClose,
  detailComponent,
  ...rest
}) => {
  const titleNode = () => {
    return (
      <div className="d-flex  align-items-center">
        <Icon
          id={id}
          size={"xl"}
          withWrapper={false}
          showCursor={false}
          iconClass={"ft-color-prime"}
        />
        <div className="fs-1 fw-bold ms-3 ft-color-dark">{title}</div>
      </div>
    );
  };
  return (
    <div className="w-100 h-100">
      {rest.children}
      <Drawer
        width={800}
        visible={visible}
        title={titleNode()}
        placement="right"
        closable={true}
        onClose={onClose}
        destroyOnClose={true}
        closeIcon={
          <div className="ft-card-action-icon">
            <Icon id={"cross"} size="lg" title={"Close"} />
          </div>
        }
      >
        {React.createElement(detailComponent, {
          ...rest,
        })}
      </Drawer>
    </div>
  );
};

export default WithCardDetailsDrawer;
