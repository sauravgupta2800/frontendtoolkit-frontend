import { Responsive, WidthProvider } from "react-grid-layout";
import React, { useState } from "react";
//https://github.com/react-grid-layout/react-grid-layout/issues/1373
const ResponsiveGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};

const DraggableGrid = () => {
  const [layouts, setLayouts] = useState(
    JSON.parse(JSON.stringify(originalLayouts))
  );

  const cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };

  return (
    <div className="d-flex w-100 h-100">
      <ResponsiveGridLayout
        layouts={layouts}
        cols={cols}
        onLayoutChange={(layout, layouts) => {
          saveToLS("layouts", layouts);
          setLayouts(layouts);
        }}
        rowHeight={30}
        style={{ minWidth: "100%" }}
      >
        <div key="a" data-grid={{ x: 0, y: 0, w: 2, h: 5, minW: 1, minH: 5 }}>
          Some content
        </div>
        <div key="b" data-grid={{ x: 2, y: 0, w: 2, h: 5, minW: 1, minH: 5 }}>
          Some content
        </div>
        <div key="c" data-grid={{ x: 4, y: 0, w: 2, h: 5, minW: 1, minH: 5 }}>
          Some content
        </div>
      </ResponsiveGridLayout>
    </div>
  );
};

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value,
      })
    );
  }
}

export default DraggableGrid;
