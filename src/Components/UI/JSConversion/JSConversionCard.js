import React from "react";
import DragCard from "../Common/DragCard/DragCard";
import { useDispatch } from "react-redux";
import { setDrawerData } from "../../../store/cardSlice";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

const JSConversionCard = ({ ...rest }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onDetailsSelect = () => {
    dispatch(setDrawerData({}));
    history.replace(`/cards/${rest.key_name}`);
  };

  const contentSlot = () => {
    return (
      <div className="w-100 d-flex justify-content-center">
        <Button onClick={onDetailsSelect} className="my-4" type="primary">
          Details
        </Button>
      </div>
    );
  };

  return (
    <DragCard className="w-100 h-100" contentSlot={contentSlot()} {...rest} />
  );
};

export default JSConversionCard;
