import { Responsive, WidthProvider } from "react-grid-layout";
import React, { useEffect, useState } from "react";
// import { getFromLS, isDesktopView, saveToLS } from "../../utils";
import { getFromLS, isDesktopView, saveToLS } from "../../../utils";
import { useSelector, useDispatch } from "react-redux";
import { COMPONENTS } from "../config";
import { setList } from "../../../../store/widgetsSlice";
import Icon from "../../Common/Icon/Icon";

const ResponsiveGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};

const DraggableGrid = () => {
  const dispatch = useDispatch();

  const selectedList = useSelector((state) => {
    const { list, removedIDs, q } = state.widgets;
    const filteredList = list.filter(
      (item) => !removedIDs.includes(item.key_name)
    );
    return q.length
      ? filteredList.filter((item) =>
          item.title.trim().toLowerCase().includes(q.trim().toLowerCase())
        )
      : filteredList;
  });

  const [layouts, setLayouts] = useState(
    JSON.parse(JSON.stringify(originalLayouts))
  );

  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(setList(COMPONENTS));
    setShow(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cols = { lg: 12, md: 8, sm: 6, xs: 4, xxs: 2 };

  return (
    <div
      className={`ft-draggable-grid d-flex w-100 h-100 overflow-auto ${
        isDesktopView ? "" : "ft-draggable-grid--mobile"
      }`}
    >
      {show && (
        <>
          {selectedList.length ? (
            <ResponsiveGridLayout
              layouts={layouts}
              cols={cols}
              onLayoutChange={(layout, layouts) => {
                saveToLS("layouts", layouts);
                setLayouts(layouts);
              }}
              rowHeight={30}
              containerPadding={[20, 20]}
              margin={[15, 15]}
              style={{ minWidth: "100%", paddingBottom: "5rem" }}
              isBounded={true}
              draggableHandle=".draggableClassName"
            >
              {selectedList.map((item) => (
                <div
                  key={item.key_name}
                  data-grid={item.dataGrid}
                  className="ft-style-1-shadow ft-style-2-shadow-hover"
                >
                  {React.createElement(item.component, {
                    key: item.key_name,
                    ...item,
                  })}
                </div>
              ))}
            </ResponsiveGridLayout>
          ) : (
            <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center">
              <Icon
                showCursor={false}
                id="empty"
                size={isDesktopView ? "" : "xxxl"}
              />
              <div className="fs-1 mt-4">No card available</div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DraggableGrid;
