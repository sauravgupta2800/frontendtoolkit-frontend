import DraggableGrid from "./DraggableGrid/DraggabbleGrid";

const WidgetLayouts = () => {
  return (
    <div className="widget-layouts w-100 h-100">
      <div className="widget-layouts--header">header</div>
      <div className="widget-layouts--content ft-bg-prime97">
        <DraggableGrid />
      </div>
    </div>
  );
};

export default WidgetLayouts;
