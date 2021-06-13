import { useClipboard } from "use-clipboard-copy";

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
  const clipboardSvg = useClipboard({ copiedTimeout: 750 });
  const clipboardCSS = useClipboard({ copiedTimeout: 750 });

  return (
    <div className="ft-icon-card w-fit h-fit m-3">
      <div className="icon-wrap ft-bg-prime98 ft-style-1-shadow-hover position-relative">
        <div className="icon-img-wrap w-100 h-100 d-flex align-items-center justify-content-center   ">
          <img
            src={`data:image/svg+xml;utf8,${encodeURIComponent(item.svg)}`}
            alt={item.name}
            style={{ width: "3rem", height: "3rem" }}
          />
        </div>
        <div className="btns-wrap position-absolute w-100 h-100 top-0 start-0">
          <div
            className="fs-6 btn btn1 h-50 w-100 d-flex align-items-center justify-content-center"
            onClick={() => clipboardSvg.copy(item.svg)}
          >
            {`${clipboardSvg.copied ? "Copied" : "Copy"} SVG`}
          </div>
          <div
            className="fs-6 btn btn2 h-50 w-100 d-flex align-items-center justify-content-center"
            onClick={() => clipboardCSS.copy(item.css)}
          >
            {`${clipboardCSS.copied ? "Copied" : "Copy"} CSS`}
          </div>
        </div>
      </div>
      <div className="ft-color-dark2 text-center">{item.name}</div>
    </div>
  );
};

export default IconCards;
