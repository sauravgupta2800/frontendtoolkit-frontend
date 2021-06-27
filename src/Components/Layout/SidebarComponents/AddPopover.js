import { Popover, Button, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Icon from "../../UI/Common/Icon/Icon";
import { setRemovedID, removeCustomCard } from "../../../store/widgetsSlice";
export const AddPopover = (props) => {
  const dispatch = useDispatch();

  const removedList = useSelector((state) => {
    const { list, removedIDs } = state.widgets;
    return list.filter((item) => removedIDs.includes(item.key_name));
  });

  const addedCustomCards = useSelector((state) =>
    state.widgets.customList.map((item) => item.key_name)
  );

  const handleRemoveFromDashboard = (e, { key_name, title }) => {
    e.stopPropagation();
    dispatch(removeCustomCard(key_name));
    message.success(`${title} card removed from dashboard.`);
  };

  const text = () => {
    return <div className="fs-3 p-3 fw-bold">Control the Card Items</div>;
  };
  const content = () => {
    return (
      <div>
        <Button type="primary" size="large" className="mx-2" onClick={() => {}}>
          <div className="d-flex align-items-center justify-content-center">
            <Icon id="card-plus" size="sm" />
            <span className="ms-2">Create Custom Card</span>
          </div>
        </Button>
        <>
          {removedList.map((item, index) => (
            <div
              key={index}
              className={`d-flex align-items-center p-2 rounded-3 cursor-pointer add-items-selection ${
                !index ? "mt-4" : ""
              }`}
              onClick={() =>
                dispatch(setRemovedID({ id: item.key_name, remove: false }))
              }
            >
              <Icon {...item.iconProps} size="lg" />
              <div className="ms-2 fs-4">{item.title}</div>
              {addedCustomCards.includes(item.key_name) && (
                <div
                  className="ms-2 ft-table-action-icon-red"
                  onClick={(e) => handleRemoveFromDashboard(e, item)}
                >
                  <Icon id="delete" title="Remove from Dashboard" />
                </div>
              )}
            </div>
          ))}
        </>
      </div>
    );
  };
  return (
    <Popover
      placement="right"
      title={text()}
      content={content()}
      trigger="click"
      onVisibleChange={props.onAddPopoverChange}
    >
      <div>{props.children}</div>
    </Popover>
  );
};
