import React from "react";
import DragCard from "../Common/DragCard/DragCard";
import { useDispatch } from "react-redux";
import { setDrawerData } from "../../../store/cardSlice";
import { useHistory } from "react-router-dom";

const ColorSpacesCard = ({ ...rest }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onOptionSelect = (data) => {
    dispatch(setDrawerData({ package: data }));
    history.replace(`/cards/${rest.key_name}`);
  };

  const contentSlot = () => {
    return (
      <div className="w-100">
        <button onClick={() => onOptionSelect({})}>Show </button>
      </div>
    );
  };

  return (
    <DragCard className="w-100 h-100" contentSlot={contentSlot()} {...rest} />
  );
};

export default ColorSpacesCard;
