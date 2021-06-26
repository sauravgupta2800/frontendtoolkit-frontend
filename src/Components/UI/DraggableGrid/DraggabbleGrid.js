import { Responsive, WidthProvider } from "react-grid-layout";
import React, { useEffect, useState } from "react";
import { getFromLS, saveToLS } from "../../utils";
import { useSelector, useDispatch } from "react-redux";
import { COMPONENTS } from "./config";
import { setList } from "../../../store/widgetsSlice";

const ResponsiveGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};

const DraggableGrid = () => {
  const dispatch = useDispatch();

  const selectedList = useSelector((state) => {
    const { list, removedIDs } = state.widgets;
    return list.filter((item) => !removedIDs.includes(item.key_name));
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

  const cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };

  return (
    <div className="d-flex w-100 h-100 overflow-auto">
      {show && (
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
      )}
    </div>
  );
};

export default DraggableGrid;
