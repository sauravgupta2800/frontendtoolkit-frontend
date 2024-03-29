import React from "react";
import DragCard from "../Common/DragCard/DragCard";
import PackageSearch from "./PackageSearch";
import { useDispatch } from "react-redux";
import { setDrawerData } from "../../../store/cardSlice";
import { useHistory } from "react-router-dom";

const PackageCard = ({ ...rest }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onOptionSelect = (data) => {
    dispatch(setDrawerData({ package: data }));
    history.replace(`/tools/${rest.key_name}`);
  };

  const contentSlot = () => {
    return (
      <div className="w-100">
        <PackageSearch clearOnSelect={true} onOptionSelect={onOptionSelect} />
      </div>
    );
  };

  return (
    <DragCard className="w-100 h-100" contentSlot={contentSlot()} {...rest} />
  );
};

export default PackageCard;
