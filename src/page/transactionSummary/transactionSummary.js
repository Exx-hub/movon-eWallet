import React from "react";
import "./transactionSummary.css";
import { DatePicker, Button, Table } from "antd";

const { RangePicker } = DatePicker;

const tableSource = [
  {
    title: "Transaction Id",
    dataIndex: "transId",
    key: "transId",
    align: "center",
  },
  {
    title: "Transaction Type",
    dataIndex: "transType",
    key: "transType",
    align: "center",
  },
  {
    title: "Ticket ID",
    dataIndex: "ticketId",
    key: "ticketId",
    align: "center",
  },
  {
    title: "Reference ID",
    dataIndex: "referenceId",
    key: "referenceId",
    align: "center",
  },
  {
    title: "Transaction Date",
    dataIndex: "transactionDate",
    key: "transactionDate",
    align: "center",
  },
];

// hardcoded for now but this should come from backend fetched data
const dataSource = [
  {
    transId: "MOV12345",
    transType: "Ticket Purchase",
    ticketId: "T-13hiuefgfdg",
    referenceId: "BC12345",
    transactionDate: "December 20, 2021",
    key: 0,
  },
  {
    transId: "MOV12346",
    transType: "Ticket Purchase",
    ticketId: "T-13hiuefgfdg",
    referenceId: "BC12345",
    transactionDate: "December 20, 2021",
    key: 1,
  },
  {
    transId: "MOV12346",
    transType: "Ticket Purchase",
    ticketId: "T-13hiuefgfdg",
    referenceId: "BC12345",
    transactionDate: "December 20, 2021",
    key: 1,
  },
  {
    transId: "MOV12346",
    transType: "Ticket Purchase",
    ticketId: "T-13hiuefgfdg",
    referenceId: "BC12345",
    transactionDate: "December 20, 2021",
    key: 1,
  },
];

function TransactionSummary() {
  return (
    <div className="transaction-summary-container">
      {/* user details  */}
      <div className="user-details-container">
        <div>
          <span className="title">Client Name:</span>{" "}
          <span className="value">DLTB Co.</span>
        </div>
        <div>
          <span className="title">Email Address:</span>{" "}
          <span className="value">DLTB@gmail.com</span>
        </div>
        <div>
          <span className="title">Contact Number:</span>{" "}
          <span className="value">09164209977</span>
        </div>
        <div>
          <span className="title">Wallet Balance:</span>{" "}
          <span className="value">₱0.00</span>
        </div>
      </div>

      <div className="dashed-line" />

      <div className="transaction-table-container">
        <div className="table-top-div">
          <div className="summary-title">Transaction Summary</div>
          <div className="datepicker-div">
            <RangePicker />
            <Button className="filter-button">Filter</Button>
          </div>
        </div>

        <div>
          <Table
            // loading={this.state.fetching}
            scroll={{ y: 500 }}
            rowKey="key"
            pagination={{ position: ["bottomCenter"], pageSize: 10 }}
            // pagination={false}
            columns={tableSource}
            dataSource={dataSource}
          />
        </div>
      </div>
    </div>
  );
}

export default TransactionSummary;
