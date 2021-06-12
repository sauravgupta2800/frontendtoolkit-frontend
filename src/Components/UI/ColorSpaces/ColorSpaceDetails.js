import ColorPickerWrapper from "./ColorPickerWrapper";

const ColorSpaceDetails = ({ drawerExtraDetails = {} }) => {
  return <ColorPickerWrapper defaultColor={drawerExtraDetails.color || ""} />;
};

export default ColorSpaceDetails;
