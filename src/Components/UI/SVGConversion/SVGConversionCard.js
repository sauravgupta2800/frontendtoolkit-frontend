import React from "react";
import DragCard from "../Common/DragCard/DragCard";
import { useDispatch } from "react-redux";
import { setDrawerData } from "../../../store/cardSlice";
import { useHistory } from "react-router-dom";

const SVGConversionCard = ({ ...rest }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const openDetails = () => {
    dispatch(setDrawerData({}));
    history.replace(`/cards/${rest.key_name}`);
  };

  const contentSlot = () => {
    return (
      <div className="w-100">
        <button onClick={openDetails}>open</button>
      </div>
    );
  };

  return (
    <DragCard className="w-100 h-100" contentSlot={contentSlot()} {...rest} />
  );
};

export default SVGConversionCard;
