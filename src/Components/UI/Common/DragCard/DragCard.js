import Icon from "../Icon/Icon";

const DragCard = () => {
  return (
    <div className="w-100 h-100 border rounded-3 d-flex flex-column ft-bg-light100 p-5">
      <div className="d-flex justify-content-between">
        <div>
          <Icon size={"xl"} withWrapper={true} iconClass={"ft-color-prime"} />
        </div>
        <div>2</div>
      </div>
      <div>B</div>
      <div>C</div>
    </div>
  );
};

export default DragCard;
