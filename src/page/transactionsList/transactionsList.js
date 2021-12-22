import React, { useState } from "react";
import "./transactionsList.css";

import { Dropdown, Input, Table, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const { Search } = Input;

function TransactionsList() {
  const [pageSize, setPageSize] = useState(5);

  const history = useHistory();

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
      render: (item) => (
        <Button
          onClick={() =>
            history.push({
              pathname: `/transactions/${item._id}`,
              state: { item },
            })
          }
        >
          View
        </Button>
      ),
    },
  ];

  // hardcoded for now but this should come from backend fetched data saved in component state
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
      _id: 1,
    },
    {
      referenceId: "ZZ44445",
      ticketId: "T-14tyahaehe",
      ticketPrice: "1245.00",
      convenienceFee: "50.00",
      tripDate: "November 29, 2021",
      merchant: "BITSI",
      status: "Success",
      transactionDate: "November 16,2021",
      key: 1,
      _id: 2,
    },
    {
      referenceId: "AA12345",
      ticketId: "T-11uyahahe",
      ticketPrice: "1000.00",
      convenienceFee: "50.00",
      tripDate: "December 25, 2021",
      merchant: "DLTB",
      status: "Pending",
      transactionDate: "December 15,2021",
      key: 2,
      _id: 3,
    },
    {
      referenceId: "FN43432",
      ticketId: "T-01gheheheh",
      ticketPrice: "550.00",
      convenienceFee: "50.00",
      tripDate: "December 31, 2021",
      merchant: "DLTB",
      status: "Pending",
      transactionDate: "December 22,2021",
      key: 3,
      _id: 4,
    },
    {
      referenceId: "VB54343",
      ticketId: "T-13refgertgt",
      ticketPrice: "1500.00",
      convenienceFee: "100.00",
      tripDate: "December 31, 2021",
      merchant: "VLI",
      status: "Pending",
      transactionDate: "December 23,2021",
      key: 4,
      _id: 5,
    },
  ];

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
