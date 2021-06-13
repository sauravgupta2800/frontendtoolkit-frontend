const IconCards = ({ list }) => {
  return (
    <div className="d-flex flex-wrap">
      {list.map((item) => (
        <IconCard item={item} key={item.name} />
      ))}
    </div>
  );
};

const IconCard = ({ item }) => {
  return (
    <div className="ft-icon-card w-fit h-fit m-3">
      <div className="icon-wrap ft-bg-prime98 ft-style-1-shadow-hover">
        <div className="w-100 h-100 d-flex align-items-center justify-content-center rounded-3">
          <img
            src={`data:image/svg+xml;utf8,${encodeURIComponent(item.svg)}`}
            alt={item.name}
            style={{ width: "3rem", height: "3rem" }}
          />
        </div>
      </div>
      <div className="ft-color-dark2 text-center">{item.name}</div>
    </div>
  );
};

export default IconCards;
