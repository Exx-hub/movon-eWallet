import React from "react";
import "./viewTransaction.css";

import { Table } from "antd";
import { useLocation } from "react-router-dom";

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
    title: "Seat No.",
    dataIndex: "seatNumber",
    key: "seatNumber",
    align: "center",
  },
  {
    title: "Trip ID",
    dataIndex: "tripId",
    key: "tripId",
    align: "center",
  },
  {
    title: "Trip Date",
    dataIndex: "tripDate",
    key: "tripDate",
    align: "center",
  },
  {
    title: "Origin",
    dataIndex: "origin",
    key: "origin",
    align: "center",
  },
  {
    title: "Destination",
    dataIndex: "destination",
    key: "destination",
    align: "center",
  },
  {
    title: "Ticket",
    dataIndex: "ticket",
    key: "ticket",
    align: "center",
  },
];

// hardcoded for now but this should come from backend fetched data saved in component state
const dataSource = [
  {
    firstName: "Alvin",
    lastName: "Acosta",
    seatNumber: "11",
    tripId: "TPnswTeQt",
    tripDate: "December 24, 2021",
    origin: "Cubao",
    destination: "Baguio",
    ticket: "Confirmed",
    key: 0,
  },
  {
    firstName: "Alvin",
    lastName: "Buid",
    seatNumber: "5",
    tripId: "TPnswTeQt",
    tripDate: "December 24, 2021",
    origin: "Cubao",
    destination: "Baguio",
    ticket: "Confirmed",
    key: 1,
  },
  {
    firstName: "Juan",
    lastName: "Dela Cruz",
    seatNumber: "34",
    tripId: "TPnswTeQt",
    tripDate: "December 24, 2021",
    origin: "Cubao",
    destination: "Baguio",
    ticket: "Confirmed",
    key: 2,
  },
  {
    firstName: "Mikee",
    lastName: "G",
    seatNumber: "27",
    tripId: "TPnswTeQt",
    tripDate: "December 24, 2021",
    origin: "Cubao",
    destination: "Baguio",
    ticket: "Confirmed",
    key: 3,
  },
  {
    firstName: "Jona",
    lastName: "Guzon",
    seatNumber: "2",
    tripId: "TPnswTeQt",
    tripDate: "December 24, 2021",
    origin: "Cubao",
    destination: "Baguio",
    ticket: "Confirmed",
    key: 4,
  },
  {
    firstName: "Cathy",
    lastName: "Roxas",
    seatNumber: "34",
    tripId: "TPnswTeQt",
    tripDate: "December 24, 2021",
    origin: "Cubao",
    destination: "Baguio",
    ticket: "Confirmed",
    key: 5,
  },
];

function ViewTransaction() {
  const location = useLocation();

  console.log(location.state);

  const { referenceId, ticketId, ticketPrice, status, transactionDate } =
    location.state.item;

  return (
    <div className="viewTransaction-container">
      <div className="transaction-details-container">
        <div className="container-title">Transaction Details</div>

        <div>
          <span className="details-key">Reference ID: </span>
          <span className="details-value">{referenceId}</span>
        </div>
        <div>
          <span className="details-key">Ticket ID: </span>
          <span className="details-value">{ticketId}</span>
        </div>
        <div>
          <span className="details-key">Ticket Price: </span>
          <span className="details-value">₱{ticketPrice}</span>
        </div>
        <div>
          <span className="details-key">Status: </span>
          <span className="details-value">{status}</span>
        </div>
        <div>
          <span className="details-key">Transaction Date: </span>
          <span className="details-value">{transactionDate}</span>
        </div>
      </div>

      <div className="viewTrans-dashed-line" />

      <div className="booking-details-container">
        <div className="container-title">Booking Details</div>
        <div className="table-div">
          <Table
            // loading={this.state.fetching}
            // scroll={{ y: 500 }}
            rowKey="key"
            pagination={{ position: ["bottomCenter"] }}
            // pagination={false}
            columns={tableSource}
            dataSource={dataSource}
          />
        </div>
      </div>
    </div>
  );
}

export default ViewTransaction;
