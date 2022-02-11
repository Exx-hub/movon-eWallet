import React from "react";
import "./viewTransaction.css";

import { Table } from "antd";
import { useLocation } from "react-router-dom";

const tableSource = [
  {
    title: "Ticket ID",
    dataIndex: "ticketId",
    key: "ticketId",
    align: "center",
  },
  {
    title: "Passenger Name",
    dataIndex: "passengerName",
    key: "passengerName",
    align: "center",
  },
  {
    title: "Mobile Number",
    dataIndex: "mobileNumber",
    key: "mobileNumber",
    align: "center",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    align: "center",
  },
  {
    title: "Start Station",
    dataIndex: "start",
    key: "start",
    align: "center",
  },
  {
    title: "End Station",
    dataIndex: "end",
    key: "end",
    align: "center",
  },
  {
    title: "Charged Amount",
    dataIndex: "chargedAmount",
    key: "chargedAmount",
    align: "center",
  },
  {
    title: "Passenger/s",
    dataIndex: "passengers",
    key: "passengers",
    align: "center",
  },
  {
    title: "Seat Number",
    dataIndex: "seatNumber",
    key: "seatNumber",
    align: "center",
  },
  {
    title: "Ticket Status",
    dataIndex: "ticketStatus",
    key: "ticketStatus",
    align: "center",
  },
];

// hardcoded for now but this should come from backend fetched data saved in component state
const dataSource = [
  {
    ticketId: "TGYBFDR",
    passengerName: "Alvin Acosta",
    mobileNumber: "09164209977",
    email: "Alvinfloresacosta@gmail.com",
    start: "Cubao",
    end: "Baguio",
    chargedAmount: "757.00",
    passengers: "ALVIN ACOSTA",
    seatNumber: 1,
    ticketStatus: "Pending",
    key: 0,
  },
  {
    ticketId: "TGYBFDR",
    passengerName: "Alvin Acosta",
    mobileNumber: "09164209977",
    email: "Alvinfloresacosta@gmail.com",
    start: "Cubao",
    end: "Baguio",
    chargedAmount: "757.00",
    passengers: "ALVIN ACOSTA",
    seatNumber: 1,
    ticketStatus: "Pending",
    key: 1,
  },
  {
    ticketId: "TGYBFDR",
    passengerName: "Alvin Acosta",
    mobileNumber: "09164209977",
    email: "Alvinfloresacosta@gmail.com",
    start: "Cubao",
    end: "Baguio",
    chargedAmount: "757.00",
    passengers: "ALVIN ACOSTA",
    seatNumber: 1,
    ticketStatus: "Pending",
    key: 2,
  },
  {
    ticketId: "TGYBFDR",
    passengerName: "Alvin Acosta",
    mobileNumber: "09164209977",
    email: "Alvinfloresacosta@gmail.com",
    start: "Cubao",
    end: "Baguio",
    chargedAmount: "757.00",
    passengers: "ALVIN ACOSTA",
    seatNumber: 1,
    ticketStatus: "Pending",
    key: 3,
  },
];

function ViewTransaction() {
  const location = useLocation();

  console.log(location.state);

  const { tripId, tripSchedule } = location.state.item;

  return (
    <div className="viewTransaction-container">
      <div className="transaction-details-container">
        <div className="container-title">Transaction Details</div>
        <div>
          <span className="details-key">Trip ID: </span>
          <span className="details-value">{tripId}</span>
        </div>
        <div>
          <span className="details-key">Trip Schedule </span>
          <span className="details-value">{tripSchedule}</span>
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
