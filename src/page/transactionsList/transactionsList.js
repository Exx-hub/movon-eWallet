import React, { useState } from "react";
import "./transactionsList.css";

import { Dropdown, Input, Table, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Search } = Input;

const tableSource = [
  {
    title: "Reference ID",
    dataIndex: "referenceId",
    key: "referenceId",
    align: "center",
  },
  {
    title: "Ticket ID",
    dataIndex: "ticketId",
    key: "ticketId",
    align: "center",
  },
  {
    title: "Ticket Price",
    dataIndex: "ticketPrice",
    key: "ticketPrice",
    align: "center",
  },
  {
    title: "Convenience Fee",
    dataIndex: "convenienceFee",
    key: "convenienceFee",
    align: "center",
  },
  {
    title: "Trip Date",
    dataIndex: "tripDate",
    key: "tripDate",
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
    key: "status",
    align: "center",
  },
  {
    title: "Transaction Date",
    dataIndex: "transactionDate",
    key: "transactionDate",
    align: "center",
  },

  {
    title: "Details",
    key: "details",
    align: "center",
    render: (item) => <Button onClick={() => console.log(item)}>View</Button>,
  },
];

// hardcoded for now but this should come from backend fetched data
const dataSource = [
  {
    referenceId: "BC12345",
    ticketId: "T-13hiuefgfdg",
    ticketPrice: "845.00",
    convenienceFee: "50.00",
    tripDate: "December 20, 2021",
    merchant: "DLTB",
    status: "Pending",
    transactionDate: "December 15,2021",
    key: 0,
  },
  {
    referenceId: "BC12345",
    ticketId: "T-13hiuefgfdg",
    ticketPrice: "845.00",
    convenienceFee: "50.00",
    tripDate: "December 20, 2021",
    merchant: "DLTB",
    status: "Pending",
    transactionDate: "December 15,2021",
    key: 1,
  },
  {
    referenceId: "BC12345",
    ticketId: "T-13hiuefgfdg",
    ticketPrice: "845.00",
    convenienceFee: "50.00",
    tripDate: "December 20, 2021",
    merchant: "DLTB",
    status: "Pending",
    transactionDate: "December 15,2021",
    key: 2,
  },
  {
    referenceId: "BC12345",
    ticketId: "T-13hiuefgfdg",
    ticketPrice: "845.00",
    convenienceFee: "50.00",
    tripDate: "December 20, 2021",
    merchant: "DLTB",
    status: "Pending",
    transactionDate: "December 15,2021",
    key: 3,
  },
  {
    referenceId: "BC12345",
    ticketId: "T-13hiuefgfdg",
    ticketPrice: "845.00",
    convenienceFee: "50.00",
    tripDate: "December 20, 2021",
    merchant: "DLTB",
    status: "Pending",
    transactionDate: "December 15,2021",
    key: 4,
  },
];

function TransactionsList() {
  const [pageSize, setPageSize] = useState(5);

  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={() => setPageSize(5)}>
        5
      </Menu.Item>
      <Menu.Item key="2" onClick={() => setPageSize(10)}>
        10
      </Menu.Item>
      <Menu.Item key="3" onClick={() => setPageSize(15)}>
        15
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="transactionList-container">
      <div className="top-div">
        <Dropdown overlay={menu}>
          <Button>
            {pageSize} <DownOutlined />
          </Button>
        </Dropdown>
        <Search
          onSearch={() => alert("SEARCH")}
          placeholder="Reference ID | Ticket ID | Merchant | Status"
          className="search-input"
        />
      </div>
      <div className="table-container">
        <Table
          // loading={this.state.fetching}
          scroll={{ y: 700 }}
          rowKey="key"
          pagination={{ position: ["bottomCenter"], pageSize: pageSize }} // pageSize set dropdown
          // pagination={false}
          columns={tableSource}
          dataSource={dataSource}
          // to use pagination from ant D, default table pagination not ideal
        />
      </div>
    </div>
  );
}

export default TransactionsList;
