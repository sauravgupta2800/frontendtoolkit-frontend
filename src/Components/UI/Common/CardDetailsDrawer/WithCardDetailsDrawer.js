import React from "react";
import { Drawer } from "antd";
import Icon from "../Icon/Icon";

const WithCardDetailsDrawer = ({
  id,
  title,
  visible = false,
  onClose,
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
        <div className="fs-2 fw-bold ms-3 ft-color-dark">{title}</div>
      </div>
    );
  };
  return (
    <div className="w-100 h-100">
      {rest.children}
      <Drawer
        visible={visible}
        title={titleNode()}
        placement="right"
        closable={false}
        onClose={onClose}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default WithCardDetailsDrawer;
