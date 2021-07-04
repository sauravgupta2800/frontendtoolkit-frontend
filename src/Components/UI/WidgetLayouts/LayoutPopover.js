import { useEffect, useState } from "react";
import { Popover, message, Radio, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Icon from "../Common/Icon/Icon";
import { setLayout } from "../../../store/widgetsSlice";
import { LAYOUTS } from "./config";

const LayoutPopover = ({ visible, onVisibleChange, children }) => {
  const dispatch = useDispatch();
  const currentLayout = useSelector((state) => {
    const { layout } = state.widgets;
    return layout;
  });

  const saveLayout = (layout) => {
    dispatch(setLayout(layout));
    message.success(`Layout saved sucessfully.`);
  };

  const text = () => {
    return <div className="fs-3 p-3 fw-bold">Choose the tool's Layout</div>;
  };

  const content = () => {
    return (
      <div>
        <div>
          <Radio.Group
            onChange={(e) => saveLayout(e.target.value)}
            value={currentLayout}
          >
            <Space direction="vertical">
              {LAYOUTS.map((item) => (
                <Radio key={item.id} value={item.id}>
                  <div className="d-flex align-items-center">
                    <Icon id={item.id} iconClass="ft-color-prime" />
                    <div className="ms-2 fs-4 ft-color-dark2">{item.title}</div>
                  </div>
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </div>
      </div>
    );
  };
  return (
    <Popover
      placement="bottom"
      title={text()}
      content={content()}
      trigger="click"
      visible={visible}
      onVisibleChange={onVisibleChange}
    >
      <div>{children}</div>
    </Popover>
  );
};

export default LayoutPopover;
