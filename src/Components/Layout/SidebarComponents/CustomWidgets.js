import WithCardDetailsDrawer from "../../UI/Common/CardDetailsDrawer/WithCardDetailsDrawer";
import { CUSTOM_CARDS } from "./config";
import { Button } from "antd";

const CustomWidgets = ({ visible = false, handleClose }) => {
  return (
    <WithCardDetailsDrawer
      visible={visible}
      onClose={handleClose}
      id="card-list"
      title="Custom Cards that you may like"
      drawerWidth="90%"
      detailComponent={Detail}
    />
  );
};

const Detail = () => {
  const contentSlot = () => {
    return (
      <div className="w-100 d-flex justify-content-center">
        <Button onClick={() => {}} className="my-4" type="primary">
          Find Difference
        </Button>
      </div>
    );
  };
  return (
    <div>
      <div>all</div>
      <div className="d-flex flex-wrap">
        {CUSTOM_CARDS.map((item, index) => (
          <div
            key={index}
            className="border p-3 rounded-3 w-20 d-flex flex-column justify-content-between m-3"
          >
            <div>
              <div className="fs-2 fw-bold ft-color-dark">{item.title}</div>
              <div className="mb-3 ft-color-dark2 fs-4">{item.subTitle}</div>
            </div>
            <div className="d-flex justify-content-center">
              <Button type="primary">View</Button>
              <Button className="ms-3">Add to dashboard</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomWidgets;
