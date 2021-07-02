import DraggableGrid from "./DraggableGrid/DraggabbleGrid";

const WidgetLayouts = () => {
  return (
    <div className="widget-layouts w-100 h-100">
      <div className="widget-layouts--header ft-bg-prime88">header</div>
      <div className="widget-layouts--content">
        <DraggableGrid />
      </div>
    </div>
  );
};

export default WidgetLayouts;
