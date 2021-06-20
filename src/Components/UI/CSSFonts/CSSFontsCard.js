import React, { useState } from "react";
import DragCard from "../Common/DragCard/DragCard";
import { useDispatch } from "react-redux";
import { setDrawerData } from "../../../store/cardSlice";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

const CSSFontsCard = ({ ...rest }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const openDetails = () => {
    dispatch(setDrawerData({}));
    history.replace(`/cards/${rest.key_name}`);
  };

  const contentSlot = () => {
    return <div className="w-100 d-flex justify-content-center">content</div>;
  };

  const actionSlot = () => {
    return (
      <div className="w-100 d-flex justify-content-end">
        <button onClick={openDetails}> action</button>
      </div>
    );
  };

  return (
    <DragCard
      className="w-100 h-100"
      contentSlot={contentSlot()}
      actionSlot={actionSlot()}
      {...rest}
    />
  );
};

export default CSSFontsCard;
