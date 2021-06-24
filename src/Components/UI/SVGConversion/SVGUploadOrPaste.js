import { Upload, message, Spin, Input } from "antd";
import { useState } from "react";
import Icon from "../Common/Icon/Icon";

const SVGUploadOrPaste = ({
  text = "Please upload the .svg file by dragging or clicking it here",
  onUploaded,
  wrapClass = "",
}) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");

  const props = {
    // accept: ".svg",
    name: "file",
    multiple: false,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (info.file.status === "uploading") {
        setLoading(true);
        return;
      }
      if (status === "done") {
        setLoading(false);
        message.success(`${info.file.name} file uploaded successfully.`);
        const file = info.file.originFileObj;
        const reader = new FileReader();
        reader.onload = function (evt) {
          onUploaded({ svg: evt.target.result });
        };
        reader.readAsText(file);
      } else if (status === "error") {
        setLoading(false);
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    beforeUpload(file) {
      const isSvg = ["image/svg+xml", "image/svg"].includes(file.type);
      if (!isSvg) message.error("You can only upload SVG file!");
      return isSvg;
    },
  };

  const onPaste = (e) => {
    let text = e.clipboardData?.getData("Text") ?? "";
    const isValidSVG = /^(^<svg)([^>]*)/.test(text);
    if (text && isValidSVG) {
      text = text.trim();
      if (text.length && text[text.length - 1] === ";") {
        text = text.slice(0, -1);
      }
      onUploaded({ svg: text });
    } else {
      message.error("You can only paste a valid SVG file!");
    }
  };

  const onInputClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Upload.Dragger maxCount={1} showUploadList={false} {...props}>
      <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center">
        <div className="">
          {loading ? (
            <div className="my-4">
              <Spin size="large" />
            </div>
          ) : (
            <Icon id="upload" size="xl" iconClass="ft-color-dark2" />
          )}
        </div>

        <div className="ft-color-dark2 p-3">{text}</div>
        <div className="w-70">
          <Input
            placeholder="paste your SVG code here"
            value={value}
            onClick={(e) => onInputClick(e)}
            onPaste={(e) => onPaste(e)}
            onChange={(e) => setValue(e.target.value)}
            onBlur={() => setValue("")}
          />
        </div>
      </div>
    </Upload.Dragger>
  );
};

export default SVGUploadOrPaste;
