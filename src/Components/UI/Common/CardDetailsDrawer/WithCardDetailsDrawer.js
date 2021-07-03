import React from "react";
import { Drawer } from "antd";
import Icon from "../Icon/Icon";
import { isDesktopView } from "../../../utils";
import { Helmet } from "react-helmet";

const WithCardDetailsDrawer = ({
  id,
  title,
  subTitle,
  visible = false,
  onClose,
  showLink = true,
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
          {...(rest.iconProps || {})}
        />
        <div className="fs-1 fw-bold ms-3 ft-color-dark">{title}</div>
      </div>
    );
  };
  return (
    <div className="w-100 h-100">
      {rest.children}
      <Drawer
        width={isDesktopView ? rest.drawerWidth || 800 : "100%"}
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
        {visible && detailComponent && (
          <div className="w-100 h-100">
            <Helmet>
              <title>{`${title} - Frontend Devtools`}</title>
              <meta name="description" content={subTitle} />
              {showLink && (
                <link
                  rel="canonical"
                  href={`http://frontendtools.dev/tools/${id}`}
                />
              )}
            </Helmet>
            {React.createElement(detailComponent, {
              ...rest,
              onClose: onClose,
              isDesktopView: isDesktopView,
            })}
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default WithCardDetailsDrawer;
