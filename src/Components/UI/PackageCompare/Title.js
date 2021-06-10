const Title = ({ selectedPackages = [] }) => {
  return (
    <div className="d-flex align-items-center flex-wrap">
      {selectedPackages.map((packageDetail, index) => (
        <div
          className="d-flex align-items-center justify-content-center"
          key={index}
        >
          <div className="fs-1 fw-bold">{packageDetail.name}</div>
          {selectedPackages.length && index !== selectedPackages.length - 1 && (
            <div className="fs-1 mx-3 ft-color-dark2">vs</div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Title;
