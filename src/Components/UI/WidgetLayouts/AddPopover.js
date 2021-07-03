import { Popover, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Icon from "../Common/Icon/Icon";
import { setRemovedID, removeCustomCard } from "../../../store/widgetsSlice";
import { isDesktopView } from "../../utils";

const AddPopover = (props) => {
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
    message.success(`${title} card deleted from list.`);
  };

  const text = () => {
    return <div className="fs-3 p-3 fw-bold">Restore the tools</div>;
  };
  const content = () => {
    return (
      <div>
        {removedList.length ? (
          <>
            <div className="mt-4 mb-2 fs-5 ft-color-dark2">REMOVED CARDS </div>
            {removedList.map((item, index) => (
              <div
                key={index}
                className={`d-flex align-items-center p-2 rounded-3 cursor-pointer add-items-selection`}
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
                    <Icon id="delete" title="Delete from list" />
                  </div>
                )}
              </div>
            ))}
          </>
        ) : (
          <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center">
            <Icon
              showCursor={false}
              id="empty-delete-illustration"
              size={isDesktopView ? "xxxl" : "xxxl"}
            />
            <div className="fs-5">Deleted tools will appear here</div>
          </div>
        )}
      </div>
    );
  };
  return (
    <Popover
      placement="bottom"
      title={text()}
      content={content()}
      trigger="click"
      visible={props.visible}
      onVisibleChange={props.onAddPopoverChange}
    >
      <div>{props.children}</div>
    </Popover>
  );
};

export default AddPopover;
