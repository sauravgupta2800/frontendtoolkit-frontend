import React from "react";
import Icon from "../../Common/Icon/Icon";
import { Tag } from "antd";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { isDesktopView } from "../../../utils";

const MailBoxView = ({
  selectedList = [],
  activeIndex = 0,
  setActiveIndex,
}) => {
  useEffect(() => {
    console.log("render");
  }, []);

  return (
    <div className="w-100 h-100 p-4">
      <div className="ft-mailboxview d-flex w-100 h-100">
        <div className="ft-mailboxview--list ft-style-1-shadow h-100 rounded-6 border overflow-auto p-3">
          {selectedList.map((item, index) => (
            <div
              key={index}
              className={`ft-mailboxview-item cursor-pointer py-4 px-2 ${
                index === activeIndex
                  ? "ft-mailboxview-item--selected rounded-6 ft-bg-prime97"
                  : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="d-flex align-items-center">
                <Icon
                  withWrapper={false}
                  showCursor={false}
                  iconClass={"ft-color-prime"}
                  {...(item.iconProps || {})}
                  size={"lg"}
                />
                <div>
                  <div className="fs-4 fw-bold ms-3 ft-color-dark">
                    {item.title}
                  </div>
                  <div className="ms-3">
                    {item.tags.map((tag) => (
                      <Tag key={tag.key} color={tag.color}>
                        {tag.title}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="ft-mailboxview--details h-100 ps-4">
          {activeIndex < selectedList.length && (
            <div className="w-100 h-100 overflow-auto ft-style-1-shadow ft-bg-light100 p-4 ft-style-1-shadow rounded-6 border">
              <div className="w-100 h-100 ">
                <Helmet>
                  <title>{`${selectedList[activeIndex].title} - Frontend tools`}</title>
                  <meta
                    name="description"
                    content={selectedList[activeIndex].subTitle}
                  />
                  <link
                    rel="canonical"
                    href={`http://frontendtools.dev/tools/${selectedList[activeIndex].key_name}`}
                  />
                </Helmet>
                <div className="d-flex border-bottom pb-4 mb-4">
                  <Icon
                    withWrapper={false}
                    showCursor={false}
                    iconClass={"ft-color-prime"}
                    {...(selectedList[activeIndex].iconProps || {})}
                  />
                  <div>
                    <div className="fs-4 fw-bold ms-3 ft-color-dark">
                      {selectedList[activeIndex].title}
                    </div>
                    <div className="ms-3">
                      {selectedList[activeIndex].tags.map((tag) => (
                        <Tag key={tag.key} color={tag.color}>
                          {tag.title}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </div>
                {React.createElement(
                  selectedList[activeIndex].detailComponent,
                  {
                    ...selectedList[activeIndex],
                    isDesktopView: isDesktopView,
                    drawerExtraDetails: {},
                  }
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MailBoxView;
