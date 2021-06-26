import WithCardDetailsDrawer from "../../UI/Common/CardDetailsDrawer/WithCardDetailsDrawer";
import { CUSTOM_CARDS } from "./config";
import { Button } from "antd";
import { useState } from "react";
import Icon from "../../UI/Common/Icon/Icon";

const CustomWidgets = ({ visible = false, handleClose }) => {
  return (
    <WithCardDetailsDrawer
      visible={visible}
      onClose={handleClose}
      id="card-list"
      title="Custom Cards that you may like"
      drawerWidth="90%"
      detailComponent={Detail}
    />
  );
};

const Detail = () => {
  const [item, setItem] = useState(null);
  return (
    <>
      {item ? (
        <div className="w-100 h-100">
          <div className="d-flex justify-content-between">
            <div onClick={() => setItem(null)}>
              <Icon id="arrow-left" title="back to custom list" />
            </div>
            <Button className="ms-3">Add to dashboard</Button>
          </div>
          <iframe
            src={item.url}
            allow="clipboard-write"
            className="w-100 ft-iframe-height"
            title={item.title}
          />
        </div>
      ) : (
        <div>
          <div className="d-flex flex-wrap">
            {CUSTOM_CARDS.map((item, index) => (
              <div
                key={index}
                className="border p-3 rounded-3 w-20 d-flex flex-column justify-content-between m-3"
              >
                <div>
                  <div className="fs-2 fw-bold ft-color-dark">{item.title}</div>
                  <div className="mb-3 ft-color-dark2 fs-4">
                    {item.subTitle}
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <Button type="primary" onClick={() => setItem(item)}>
                    View
                  </Button>
                  <Button className="ms-3">Add to dashboard</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CustomWidgets;
