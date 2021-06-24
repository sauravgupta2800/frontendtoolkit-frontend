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
        containerPadding={[20, 20]}
        margin={[15, 15]}
        style={{ minWidth: "100%", paddingBottom: "5rem" }}
        isBounded={true}
      >
        {COMPONENTS.map((item) => (
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
    </div>
  );
};

export default DraggableGrid;
