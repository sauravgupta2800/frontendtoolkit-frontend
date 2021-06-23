import { Responsive, WidthProvider } from "react-grid-layout";
import React, { useState } from "react";
import { COMPONENTS } from "./config";
import { getFromLS, saveToLS } from "../../utils";

//https://github.com/react-grid-layout/react-grid-layout/issues/1373
const ResponsiveGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};

const DraggableGrid = () => {
  const [layouts, setLayouts] = useState(
    JSON.parse(JSON.stringify(originalLayouts))
  );

  const cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };

  return (
    <div className="d-flex w-100 h-100 overflow-auto ft-bg-prime97">
      <ResponsiveGridLayout
        layouts={layouts}
        cols={cols}
        onLayoutChange={(layout, layouts) => {
          saveToLS("layouts", layouts);
          setLayouts(layouts);
        }}
        rowHeight={30}
        containerPadding={[30, 30]}
        margin={[20, 20]}
        style={{ minWidth: "100%", paddingBottom: "5rem" }}
        isBounded={true}
      >
        {/* <div key="a" data-grid={{ x: 0, y: 0, w: 2, h: 5, minW: 1, minH: 5 }}>
          Some content
        </div>
        <div key="b" data-grid={{ x: 2, y: 0, w: 2, h: 5, minW: 1, minH: 5 }}>
          Some content
        </div>
        <div key="c" data-grid={{ x: 4, y: 0, w: 2, h: 5, minW: 1, minH: 5 }}>
          Some content
        </div> */}
        {COMPONENTS.map((item) => (
          <div key={item.key_name} data-grid={item.dataGrid}>
            {React.createElement(item.component, {
              key: item.key_name,
              ...item,
            })}
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default DraggableGrid;
