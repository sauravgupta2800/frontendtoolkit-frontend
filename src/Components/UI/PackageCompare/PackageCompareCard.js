import React from "react";
import DragCard from "../Common/DragCard/DragCard";
import PackageSearch from "../PackageDetails/PackageSearch";
import { useDispatch } from "react-redux";
import { setDrawerData } from "../../../store/cardSlice";
import { useHistory } from "react-router-dom";

const PackageCompareCard = ({ ...rest }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onOptionSelect = (data) => {
    dispatch(setDrawerData({ package: data }));
    history.replace(`/cards/${rest.key_name}`);
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

export default PackageCompareCard;
