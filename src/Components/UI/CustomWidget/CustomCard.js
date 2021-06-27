import DragCard from "../Common/DragCard/DragCard";
import { useDispatch } from "react-redux";
import { setDrawerData } from "../../../store/cardSlice";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

const CustomCard = ({ ...rest }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const openDetails = () => {
    dispatch(setDrawerData({}));
    history.replace(`/cards/${rest.key_name}`);
  };

  const actionSlot = () => {
    return (
      <div className="w-100 d-flex justify-content-center">
        <Button onClick={openDetails} className="mt-4" type="primary">
          View
        </Button>
      </div>
    );
  };

  return (
    <DragCard className="w-100 h-100" actionSlot={actionSlot()} {...rest} />
  );
};

export default CustomCard;
