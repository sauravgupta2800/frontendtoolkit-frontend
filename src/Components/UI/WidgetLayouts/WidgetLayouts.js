import DraggableGrid from "./DraggableGrid/DraggabbleGrid";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Icon from "../Common/Icon/Icon";
import WidgetsHeader from "./WidgetsHeader";
import ListView from "./ListView/ListView";
import MailBoxView from "./MailBoxView/MailBoxView";
import { setList } from "../../../store/widgetsSlice";
import { COMPONENTS } from "./config";

const WidgetLayouts = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [activeKey, setActiveKey] = useState("all");
  const [activeIndex, setActiveIndex] = useState(0);

  const selectedList = useSelector((state) => {
    const { list, removedIDs, q } = state.widgets;
    let filteredList = list.filter(
      (item) => !removedIDs.includes(item.key_name)
    );
    filteredList = filteredList.filter((item) => {
      return activeKey === "all"
        ? true
        : activeKey &&
            item.tags &&
            item.tags.map((tag) => tag.key).includes(activeKey);
    });
    return q.length
      ? filteredList.filter((item) =>
          item.title.trim().toLowerCase().includes(q.trim().toLowerCase())
        )
      : filteredList;
  });

  useEffect(() => {
    dispatch(setList(COMPONENTS));
    setShow(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="widget-layouts w-100 h-100">
      <div className="widget-layouts--header ft-style-1-shadow">
        <WidgetsHeader
          activeKey={activeKey}
          setActiveKey={(key) => {
            setActiveKey(key);
            setActiveIndex(0);
          }}
        />
      </div>
      <div className="widget-layouts--content ft-bg-prime97">
        {show && (
          <>
            {selectedList.length ? (
              // <DraggableGrid selectedList={selectedList} />
              // <ListView selectedList={selectedList} />
              <MailBoxView
                selectedList={selectedList}
                activeIndex={activeIndex}
                setActiveIndex={(index) => setActiveIndex(index)}
              />
            ) : (
              <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                <Icon showCursor={false} id="empty" size="xxxl" />
                <div className="fs-1 mt-4">No card available</div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default WidgetLayouts;
