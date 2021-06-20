import { Popover } from "antd";
import { ChromePicker } from "react-color";

const ColorChromePicker = ({
  color = "#22194d",
  height = 40,
  onColorChange,
  showText = true,
}) => {
  const content = () => {
    return (
      <div>
        <ChromePicker
          color={color}
          onChange={({ hex }) => onColorChange(hex)}
        />
      </div>
    );
  };

  return (
    <div className="d-flex align-items-center border rounded-3">
      <Popover
        content={content}
        trigger="click"
        overlayClassName="ft-chrome-picker"
      >
        <div
          className="rounded-3 cursor-pointer"
          style={{
            height: `${height}px`,
            width: `${height}px`,
            background: `${color}`,
          }}
        />
      </Popover>
      {showText && <div className="ms-4 fs-3">{color}</div>}
    </div>
  );
};

export default ColorChromePicker;
