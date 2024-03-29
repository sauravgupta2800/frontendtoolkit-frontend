import { useEffect, useState } from "react";
import WithCardDetailsDrawer from "./WithCardDetailsDrawer";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetDrawerData } from "../../../../store/cardSlice";

const CardDetailsDrawer = ({ id }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const [componentConfig, setComponentConfig] = useState({});
  const history = useHistory();
  const transferedData = useSelector((state) => state.card);
  const COMPONENTS = useSelector((state) => state.widgets.list);

  useEffect(() => {
    const componentConfig = COMPONENTS.find(
      (component) => component.key_name === id
    );
    setComponentConfig(componentConfig);
    setVisible(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setVisible(false);
    setComponentConfig({});
    dispatch(resetDrawerData());
    history.replace("/tools");
  };
  return (
    <WithCardDetailsDrawer
      visible={visible}
      drawerExtraDetails={transferedData.details}
      onClose={handleClose}
      {...componentConfig}
    />
  );
};

export default CardDetailsDrawer;
