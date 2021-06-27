import WithCardDetailsDrawer from "../../UI/Common/CardDetailsDrawer/WithCardDetailsDrawer";
import { Button, message, Input } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomCard } from "../../../store/widgetsSlice";
import DragCard from "../../UI/Common/DragCard/DragCard";
import { addCustomComponent } from "../../UI/DraggableGrid/config";

const CreateCustomCard = ({ visible = false, handleClose }) => {
  return (
    <WithCardDetailsDrawer
      visible={visible}
      onClose={handleClose}
      id="card-list"
      title="Add Custom Card"
      drawerWidth="90%"
      detailComponent={CreateForm}
    />
  );
};

const CreateForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    fields: {
      title: "",
      subTitle: "",
      url: "",
    },
    errors: {},
  });

  const titleList = useSelector((state) =>
    state.widgets.list.map((item) => item.title)
  );

  const handleAddToDashboard = () => {
    //dispatch(addCustomCard(item));
    message.success(`${"aa"} card added to dashboard.`);
  };

  const handleChange = (field, value) => {
    let fields = { ...state.fields, [field]: value };
    setStateWith("fields", fields);
  };

  const setStateWith = (key, value) => {
    setState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  return (
    <div className="w-100 h-100 d-flex">
      <div className="w-30 border rounded-3  ft-style-1-shadow d-flex flex-column justify-content-between">
        <div className="p-4  overflow-auto">
          <div>
            Make utilize this section to create your own embedded card with a
            full customization option
          </div>
          <div className="mt-4">
            <div className="fw-bold mb-1">Title</div>
            <Input
              placeholder="Enter the card title *"
              size="large"
              className="w-100 rounded ft-style-1-shadow"
              value={state.fields["title"]}
              onChange={(event) => handleChange("title", event.target.value)}
            />
          </div>
          <div className="mt-4">
            <div className="fw-bold mb-1">Description</div>
            <Input.TextArea
              placeholder="Enter the card description *"
              size="large"
              className="w-100 rounded ft-style-1-shadow"
              autoSize={{ minRows: 4, maxRows: 4 }}
              value={state.fields["subTitle"]}
              onChange={(event) => handleChange("subTitle", event.target.value)}
            />
          </div>
          <div className="mt-4">
            <div className="fw-bold mb-1">URL</div>
            <Input
              placeholder="Enter the card url *"
              size="large"
              className="w-100 rounded ft-style-1-shadow"
              value={state.fields["url"]}
              onChange={(event) => handleChange("url", event.target.value)}
            />
            <div className="ft-color-dark3 fs-5 mt-3 fst-italic">
              Also make sure that the origin allows embedding the content as
              iframe.
            </div>
          </div>
        </div>
        <div className="p-3 border-top d-flex justify-content-end">
          <Button type="text" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="ms-2"
            type="primary"
            onClick={() => handleAddToDashboard()}
          >
            Create
          </Button>
        </div>
      </div>
      <div className="w-70 h-100 ps-4">
        <div className="w-100 h-100 overflow-auto border rounded-3 ft-style-1-shadow  ft-bg-prime97">
          <div
            style={{ width: "400px" }}
            className="overflow-auto mx-auto mt-5 ft-style-1-shadow ft-style-2-shadow-hover"
          >
            <DragCard
              {...{
                ...addCustomComponent(state.fields),
                title: state.fields.title ? state.fields.title : "Card Title",
                subTitle: state.fields.subTitle
                  ? state.fields.subTitle
                  : "Card description",
              }}
              actionSlot={
                <div className="w-100 d-flex justify-content-center">
                  <Button onClick={() => {}} className="mt-4" type="primary">
                    View
                  </Button>
                </div>
              }
            />
          </div>
          <div className="w-100 ft-create-iframe-height d-flex justify-content-center">
            <iframe
              src={state.fields.url}
              allow="clipboard-write"
              title={state.fields.title}
              className="w-90 border mt-5 rounded-3 ft-style-2-shadow ft-bg-light100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCustomCard;
