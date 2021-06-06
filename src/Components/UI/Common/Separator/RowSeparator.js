const RowSeparator = ({ title = "", wrapClass = "" }) => {
  return (
    <div className={`d-flex align-items-center my-4 ${wrapClass}`}>
      <div className="text-uppercase fs-5 ft-color-dark2">{title}</div>
      <div className="ms-2 border-bottom flex-grow-1 ft-border-color-dark3"></div>
    </div>
  );
};

export default RowSeparator;
