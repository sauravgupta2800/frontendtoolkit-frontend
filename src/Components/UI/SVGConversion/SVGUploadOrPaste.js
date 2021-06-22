import { Upload, message } from "antd";
import Icon from "../Common/Icon/Icon";

const SVGUploadOrPaste = ({
  text = "Please upload the file by dragging or clicking it here",
  onUploaded,
  wrapClass = "",
}) => {
  const props = {
    name: "file",
    multiple: false,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        const file = info.file.originFileObj;
        const reader = new FileReader();
        reader.onload = function (evt) {
          onUploaded({ svg: evt.target.result });
        };
        reader.readAsText(file);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Upload.Dragger maxCount={1} showUploadList={false} {...props}>
      <div className="">
        <Icon id="upload" size="xl" iconClass="ft-color-dark2" />
      </div>

      <div className="ft-color-dark2">{text}</div>
    </Upload.Dragger>
  );
};

export default SVGUploadOrPaste;
