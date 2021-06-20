import React, { useState, useEffect } from "react";
import DragCard from "../Common/DragCard/DragCard";
import { useDispatch } from "react-redux";
import { setDrawerData } from "../../../store/cardSlice";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import FeDropdown from "../Common/Dropdown/FeDropdown";
import { FIELDS } from "./config";
import isEmpty from "lodash/isEmpty";

const CSSFontsCard = ({ ...rest }) => {
  const [state, setState] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const field = FIELDS.find((item) => item.key === "font-family") || {};
    setState((prevState) => {
      return {
        ...prevState,
        ...field,
        value: field.defaultValue,
      };
    });
  }, []);

  const openDetails = () => {
    dispatch(setDrawerData({ fontKey: state.value }));
    history.replace(`/cards/${rest.key_name}`);
  };

  const onDropdownSelect = (value) => {
    setState((prevState) => {
      return {
        ...prevState,
        value,
      };
    });
  };

  const contentSlot = () => {
    return (
      <>
        {!isEmpty(state) && (
          <div className="w-100 d-flex justify-content-center">
            <FeDropdown
              wrapClass="w-100"
              {...state}
              onSelect={(value) => onDropdownSelect(value)}
            />
          </div>
        )}
      </>
    );
  };

  const actionSlot = () => {
    return (
      <div className="w-100 d-flex justify-content-end">
        <Button onClick={openDetails} className="mt-4" type="primary">
          Font Settings
        </Button>
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
