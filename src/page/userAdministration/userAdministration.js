import React from "react";
import "./userAdministration.css";

import { Dropdown, Input, Table, Menu, Button } from "antd";
import { DownOutlined, PlusOutlined, EditOutlined } from "@ant-design/icons";

const tableSource = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
    align: "center",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
    align: "center",
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "seatNumber",
    align: "center",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    align: "center",
  },
  {
    title: "Merchant",
    dataIndex: "merchant",
    key: "merchant",
    align: "center",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "origin",
    align: "center",
  },
  {
    title: "Edit",
    key: "edit",
    align: "center",
    render: (item) => <EditOutlined className="edit-icon" />,
  },
];

// hardcoded for now but this should come from backend fetched data saved in component state
const dataSource = [
  {
    firstName: "Alvin",
    lastName: "Acosta",
    username: "alvin123",
    email: "alvin123@gmail.com",
    merchant: "Bus Company 1",
    status: "Active",
    key: 0,
  },
  {
    firstName: "Alvin",
    lastName: "Buid",
    username: "Buid1234",
    email: "alvinBuid@gmail.com",
    merchant: "Bus Company 2",
    status: "Inactive",
    key: 1,
  },
  {
    firstName: "Juan",
    lastName: "Dela Cruz",
    username: "TheJuanD",
    email: "juanD@gmail.com",
    merchant: "Bus Company 3",
    status: "Active",
    key: 2,
  },
  {
    firstName: "Mikee",
    lastName: "G",
    username: "MikeeG",
    email: "mikeeG@gmail.com",
    merchant: "Bus Company 4",
    status: "Inactive",
    key: 3,
  },
];

function UserAdministration() {
  const menu = (
    <Menu>
      <Menu.Item key="1">5</Menu.Item>
      <Menu.Item key="2">10</Menu.Item>
      <Menu.Item key="3">15</Menu.Item>
    </Menu>
  );
  return (
    <div className="user-admin-container">
      <div className="user-admin-title-div">
        <span className="title-key">Merchant: </span>
        <span className="title-value">DLTB Co.</span>
      </div>
      <div className="user-admin-middle-div">
        <Dropdown overlay={menu}>
          <Button>
            5 <DownOutlined />
          </Button>
        </Dropdown>
        <Button>
          <PlusOutlined /> Add New User
        </Button>
      </div>

      <div className="user-admin-table-container">
        <Table
          // loading={this.state.fetching}
          // scroll={{ y: 700 }}
          rowKey="key"
          pagination={{ position: ["bottomCenter"], pageSize: 10 }} // pageSize set dropdown
          // pagination={false}
          columns={tableSource}
          dataSource={dataSource}
          // to use pagination from ant D, default table pagination not ideal
        />
      </div>
    </div>
  );
}

export default UserAdministration;
