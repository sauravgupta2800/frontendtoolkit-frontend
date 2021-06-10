import { Table } from "antd";
import { SelectedPackage } from "./SelectedPackages";
import moment from "moment";
import Icon from "./../Common/Icon/Icon";

const columns = [
  {
    title: "Package Name",
    dataIndex: "name",
    key: "name",
    width: 200,
    render: (text, record) => (
      <SelectedPackage
        showCloseIc={false}
        packageDetails={record}
        wrapClass="py-1"
      />
    ),
  },
  {
    title: "Stars",
    dataIndex: "stars",
    key: "stars",
  },
  {
    title: "Issues",
    dataIndex: "issues",
    key: "issues",
  },
  {
    title: "Created",
    dataIndex: "created_at",
    key: "created",
    render: (date) => <div>{moment(date).format("MMMM D, YYYY")}</div>,
  },
  {
    title: "Updated",
    dataIndex: "updated_at",
    key: "updated",
    render: (date) => <div>{moment(date).format("MMMM D, YYYY")}</div>,
  },
  {
    title: "Links",
    key: "action",
    render: (text, record) => (
      <div className="d-flex">
        <div className="ft-table-action-icon">
          <a href={record.repository} target="_blank" rel="noreferrer">
            <Icon title="repository link" id="github" />
          </a>
        </div>
        <div className="ms-3 ft-table-action-icon-red">
          <a
            href={`https://www.npmjs.com/package/${record.name}`}
            target="_blank"
            rel="noreferrer"
          >
            <Icon title="npm page" id="npm" />
          </a>
        </div>
        {record.homepage && (
          <div className="ms-3 ft-table-action-icon-prime">
            <a href={record.homepage} target="_blank" rel="noreferrer">
              <Icon title="homepage" id="home" />
            </a>
          </div>
        )}
      </div>
    ),
  },
];

const PackageTable = ({ packages }) => {
  return <Table columns={columns} dataSource={packages} pagination={false} />;
};

export default PackageTable;
