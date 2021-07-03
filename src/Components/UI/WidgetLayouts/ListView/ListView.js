import { Table, Tag } from "antd";
import Icon from "../../Common/Icon/Icon";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRemovedID } from "../../../../store/widgetsSlice";

const ListView = ({ selectedList }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const openDetails = (key) => {
    history.replace(`/tools/${key}`);
  };

  const onDeleteClick = (key) => {
    if (key) dispatch(setRemovedID({ id: key, remove: true }));
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      width: "25%",
      render: (text, record) => (
        <div className="d-flex align-items-center">
          <Icon
            withWrapper={false}
            showCursor={false}
            iconClass={"ft-color-prime"}
            {...(record.iconProps || {})}
            size={"lg"}
          />
          <div className="fs-3 fw-bold ms-3 ft-color-dark">{record.title}</div>
        </div>
      ),
    },
    {
      title: "Description",
      dataIndex: "subTitle",
      width: "40%",
      render: (description) => (
        <div className="ft-color-dark2 fs-4">{description}</div>
      ),
    },
    {
      title: "Tags",
      dataIndex: "tags",
      width: "25%",
      render: (tags) => (
        <div>
          {tags.map((tag) => (
            <Tag key={tag.key} color={tag.color}>
              {tag.title}
            </Tag>
          ))}
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: "address",
      width: "10%",
      render: (text, record) => {
        return (
          <div className="d-flex">
            <div
              className="ft-card-action-icon"
              onClick={() => openDetails(record.key_name)}
            >
              <Icon
                id="eye"
                size={"md"}
                title={"View Details"}
                onClick={() => {}}
              />
            </div>

            <div
              className="ft-card-action-icon ms-3"
              onClick={() => onDeleteClick(record.key_name)}
            >
              <Icon
                id="delete"
                size={"md"}
                title={"Remove Tool"}
                onClick={() => {}}
              />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="w-80 mx-auto h-100 p-5">
      <div className="w-100 h-100 overflow-auto rounded-3 border ft-style-1-shadow ft-bg-light100">
        <Table
          pagination={false}
          dataSource={selectedList}
          columns={columns}
          rowKey="key_name"
          // components={{
          //   body: {
          //     wrapper: this.DraggableContainer,
          //     row: this.DraggableBodyRow,
          //   },
          // }}
        />
      </div>
    </div>
  );
};

export default ListView;
