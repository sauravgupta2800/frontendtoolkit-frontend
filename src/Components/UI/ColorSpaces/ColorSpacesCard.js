import React from "react";
import DragCard from "../Common/DragCard/DragCard";
import { useDispatch } from "react-redux";
import { setDrawerData } from "../../../store/cardSlice";
import { useHistory } from "react-router-dom";

import CardCustomColor from "./CardCustomColor";

const ColorSpacesCard = ({ ...rest }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onDetailsSelect = (colorHex) => {
    dispatch(setDrawerData({ color: colorHex }));
    history.replace(`/tools/${rest.key_name}`);
  };

  const contentSlot = () => {
    return (
      <div className="w-100">
        <CardCustomColor onDetailsClick={onDetailsSelect} />
      </div>
    );
  };

  return (
    <DragCard className="w-100 h-100" contentSlot={contentSlot()} {...rest} />
  );
};

export default ColorSpacesCard;
