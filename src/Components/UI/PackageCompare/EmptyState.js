import Icon from "../Common/Icon/Icon";

const EmptyState = ({ iconId = "clipboard", title = "" }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-5">
      <div className="mt-5 ft-empty-icon">
        <Icon id={iconId} size="xxxl" showCursor={false} />
      </div>
      <div className="fs-2 mt-5 ft-color-dark3">{title}</div>
    </div>
  );
};

export default EmptyState;
