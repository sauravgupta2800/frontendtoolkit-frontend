import WithCardDetailsDrawer from "../../UI/Common/CardDetailsDrawer/WithCardDetailsDrawer";
import { CUSTOM_CARDS } from "./config";
import { Button, message } from "antd";
import { useState } from "react";
import Icon from "../../UI/Common/Icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import { addCustomCard, removeCustomCard } from "../../../store/widgetsSlice";

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
  const dispatch = useDispatch();

  const [item, setItem] = useState(null);

  const addedCards = useSelector((state) =>
    state.widgets.customList.map((item) => item.key_name)
  );

  const handleAddToDashboard = (item) => {
    dispatch(addCustomCard(item));
    message.success(`${item.title} card added to dashboard.`);
  };

  const handleRemoveFromDashboard = ({ key_name, title }) => {
    dispatch(removeCustomCard(key_name));
    message.success(`${title} card removed from dashboard.`);
  };
  return (
    <>
      {item ? (
        <div className="w-100 h-100">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <div onClick={() => setItem(null)}>
                <Icon id="arrow-left" title="back to custom list" />
              </div>
              <div className="ms-3 fw-bold fs-3">{item.title}</div>
            </div>

            {addedCards.includes(item.key_name) ? (
              <div
                className="ms-2"
                onClick={() => handleRemoveFromDashboard(item)}
              >
                <Icon
                  id="delete"
                  size="md"
                  title="Remove from Dashboard"
                  iconClass="ft-color-red"
                />
              </div>
            ) : (
              <Button
                className="ms-3"
                onClick={() => handleAddToDashboard(item)}
              >
                Add to dashboard
              </Button>
            )}
          </div>
          <iframe
            src={item.url}
            allow="clipboard-write"
            className="w-100 ft-iframe-height border mt-2 rounded-3 ft-style-2-shadow"
            title={item.title}
          />
        </div>
      ) : (
        <div>
          <div className="d-flex flex-wrap">
            {CUSTOM_CARDS.map((item, index) => (
              <div
                key={index}
                className="border p-4 rounded-3 w-20 d-flex flex-column justify-content-between m-3 ft-style-1-shadow ft-style-2-shadow-hover"
              >
                <div>
                  <div className="fs-2 fw-bold ft-color-dark">{item.title}</div>
                  <div className="mb-3 ft-color-dark2 fs-4">
                    {item.subTitle}
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <Button type="primary" onClick={() => setItem(item)}>
                    View
                  </Button>
                  <Button
                    onClick={() => handleAddToDashboard(item)}
                    className="ms-3"
                    disabled={addedCards.includes(item.key_name)}
                  >
                    {addedCards.includes(item.key_name)
                      ? "Added"
                      : "Add to dashboard"}
                  </Button>
                  {addedCards.includes(item.key_name) && (
                    <div
                      className="ms-2"
                      onClick={() => handleRemoveFromDashboard(item)}
                    >
                      <Icon
                        id="delete"
                        size="md"
                        title="Remove from Dashboard"
                        iconClass="ft-color-red"
                      />
                    </div>
                  )}
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
