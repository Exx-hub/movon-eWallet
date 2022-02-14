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
      title: "RS No.",
      dataIndex: "rsNumber",
      key: "rsNumber",
      align: "center",
    },
    {
      title: "Trip ID",
      dataIndex: "tripId",
      key: "tripId",
      align: "center",
    },
    {
      title: "Trip Schedule",
      dataIndex: "tripSchedule",
      key: "tripSchedule",
      align: "center",
    },
    {
      title: "Bus Company",
      dataIndex: "busCompany",
      key: "busCompany",
      align: "center",
    },
    {
      title: "Bus License Plate",
      dataIndex: "busPlate",
      key: "busPlate",
      align: "center",
    },
    {
      title: "No of Tickets Sold",
      dataIndex: "ticketsSold",
      key: "ticketsSold",
      align: "center",
      width: 150,
    },
    {
      title: "No of Seats",
      dataIndex: "numberOfSeats",
      key: "numberOfSeats",
      align: "center",
      width: 100,
    },
    {
      title: "Total Convenience Fee",
      dataIndex: "totalConFee",
      key: "totalConFee",
      align: "center",
    },
    {
      title: "Total Ticket Sales",
      dataIndex: "totalTicketSales",
      key: "totalTicketSales",
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
      rsNumber: 1234567,
      tripId: "TPNFWMSSJFF",
      tripSchedule: "01/18/2022 08:30 PM",
      busCompany: "DLTBCo.",
      busPlate: "SLP 1990",
      ticketsSold: "2",
      numberOfSeats: "2",
      totalConFee: "141.50",
      totalTicketSales: "1415.00",
      key: 0,
      _id: 1,
    },
    {
      rsNumber: 1234567,
      tripId: "TPNFWMSSJFF",
      tripSchedule: "01/18/2022 08:30 PM",
      busCompany: "DLTBCo.",
      busPlate: "SLP 1990",
      ticketsSold: "2",
      numberOfSeats: "2",
      totalConFee: "141.50",
      totalTicketSales: "1415.00",
      key: 1,
      _id: 2,
    },
    {
      rsNumber: 1234567,
      tripId: "TPNFWMSSJFF",
      tripSchedule: "01/18/2022 08:30 PM",
      busCompany: "DLTBCo.",
      busPlate: "SLP 1990",
      ticketsSold: "2",
      numberOfSeats: "2",
      totalConFee: "141.50",
      totalTicketSales: "1415.00",
      key: 2,
      _id: 3,
    },
    {
      rsNumber: 1234567,
      tripId: "TPNFWMSSJFF",
      tripSchedule: "01/18/2022 08:30 PM",
      busCompany: "DLTBCo.",
      busPlate: "SLP 1990",
      ticketsSold: "2",
      numberOfSeats: "2",
      totalConFee: "141.50",
      totalTicketSales: "1415.00",
      key: 3,
      _id: 4,
    },
    {
      rsNumber: 1234567,
      tripId: "TPNFWMSSJFF",
      tripSchedule: "01/18/2022 08:30 PM",
      busCompany: "DLTBCo.",
      busPlate: "SLP 1990",
      ticketsSold: "2",
      numberOfSeats: "2",
      totalConFee: "141.50",
      totalTicketSales: "1415.00",
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
