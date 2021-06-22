import React from "react";
import DragCard from "../Common/DragCard/DragCard";
import { useDispatch } from "react-redux";
import { setDrawerData } from "../../../store/cardSlice";
import { useHistory } from "react-router-dom";
import SVGUploadOrPaste from "./SVGUploadOrPaste";

const SVGConversionCard = ({ ...rest }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const openDetails = (svg) => {
    dispatch(setDrawerData({ svg }));
    history.replace(`/cards/${rest.key_name}`);
  };

  const contentSlot = () => {
    return <SVGUploadOrPaste onUploaded={({ svg }) => openDetails(svg)} />;
  };

  return (
    <DragCard className="w-100 h-100" contentSlot={contentSlot()} {...rest} />
  );
};

export default SVGConversionCard;
