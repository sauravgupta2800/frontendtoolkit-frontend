import ColorPickerWrapper from "./ColorPickerWrapper";

const ColorSpaceDetails = ({ drawerExtraDetails = {}, isDesktopView }) => {
  return (
    <ColorPickerWrapper
      defaultColor={drawerExtraDetails.color || ""}
      isDesktopView={isDesktopView}
    />
  );
};

export default ColorSpaceDetails;
