import { useEffect, useState } from "react";
import { Drawer, Table } from "antd";
import { isDesktopView } from "../../utils";
import { Helmet } from "react-helmet";
import Icon from "../Common/Icon/Icon";
import { ROADMAP_MENU } from "./config";
import { useHistory } from "react-router-dom";

const RoadmapDetailsDrawer = ({ id }) => {
  const history = useHistory();

  const [visible, setVisible] = useState(false);
  const [componentConfig, setComponentConfig] = useState({});

  useEffect(() => {
    const componentConfig = ROADMAP_MENU.find(
      (component) => component.key === id
    );
    setComponentConfig(componentConfig);
    setVisible(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClose = () => {
    setVisible(false);
    history.replace("/roadmap");
  };

  const titleNode = () => {
    return (
      <div className="d-flex  align-items-center">
        <Icon
          id={id}
          size={componentConfig.iconSize || "lg"}
          withWrapper={false}
          showCursor={false}
          iconClass={"ft-color-prime"}
        />
        <div className="fs-1 fw-bold ms-3 ft-color-dark">
          {componentConfig.title}
        </div>
      </div>
    );
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      width: "40%",
      render: (text, record) => (
        <div className="d-flex align-items-center">
          <div className="fs-4 fw-bold ft-color-dark">{text}</div>
        </div>
      ),
    },
    {
      title: "Source",
      dataIndex: "source",
      width: "40%",
      render: (text) => (
        <div className="d-flex align-items-center">
          <div className="fs-4 ft-color-dark">{text}</div>
        </div>
      ),
    },
    {
      title: "URL",
      dataIndex: "url",
      width: "20%",
      render: (url, record) => {
        return (
          <div className="ft-card-action-icon">
            <a href={url} target="_blank" rel="noreferrer">
              <Icon id="new-url" title="Open link" />
            </a>
          </div>
        );
      },
    },
  ];

  return (
    <div className="w-100 h-100">
      <Drawer
        width={isDesktopView ? "70%" || 800 : "100%"}
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
        {visible && (
          <div className="w-100">
            <Helmet>
              <title>{`${componentConfig.title} - Frontend tools`}</title>
              <meta name="description" content={componentConfig.description} />
              <link
                rel="canonical"
                href={`http://frontendtools.dev/roadmap/${id}`}
              />
            </Helmet>
            {(componentConfig.detailList || []).map(
              ({ type, data, title = "" }) =>
                type === "table" ? (
                  <>
                    <div
                      className="fw-bold fs-3 mb-3"
                      style={{ color: componentConfig.darkColor }}
                    >
                      {title ||
                        `Here are some external resources to learn ${componentConfig.title}`}
                    </div>
                    <div className="w-100 h-fit overflow-auto rounded-3 border ft-style-1-shadow ft-bg-light100 mb-5">
                      <Table
                        pagination={false}
                        dataSource={data}
                        columns={columns}
                        rowKey="key_name"
                      />
                    </div>
                  </>
                ) : type === "description" ? (
                  <>
                    <div
                      className="fw-bold fs-3 mb-3"
                      style={{ color: componentConfig.darkColor }}
                    >
                      Description
                    </div>
                    <div className="fs-4 p-3 rounded-3 border ft-style-1-shadow ft-bg-prime98 mb-4">
                      {data}
                    </div>
                  </>
                ) : (
                  <div>hmmm</div>
                )
            )}
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default RoadmapDetailsDrawer;
