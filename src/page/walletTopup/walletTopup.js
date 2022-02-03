import React, { useState } from "react";
import "./walletTopup.css";

import { Button, Table, Input } from "antd";
import { TopupModal } from "../../components/modal";

const { Search } = Input;

const tableSource = [
  {
    title: "Transaction Id",
    dataIndex: "transactionId",
    key: "transactionId",
    align: "center",
  },
  {
    title: "Transaction Date",
    dataIndex: "transactionDate",
    key: "transactionDate",
    align: "center",
  },
  {
    title: "Company",
    dataIndex: "company",
    key: "company",
    align: "center",
  },
  {
    title: "Reference ID",
    dataIndex: "referenceId",
    key: "referenceId",
    align: "center",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    align: "center",
  },
];

const dataSource = [
  {
    transactionId: "MOV12345",
    transactionDate: "December 15,2021",
    company: "DLTBCo.",
    referenceId: "BC12345",
    amount: "P50,000",
    key: 0,
  },
  {
    transactionId: "MOV12345",
    transactionDate: "December 15,2021",
    company: "DLTBCo.",
    referenceId: "BC12345",
    amount: "P50,000",
    key: 1,
  },
  {
    transactionId: "MOV12345",
    transactionDate: "December 15,2021",
    company: "DLTBCo.",
    referenceId: "BC12345",
    amount: "P50,000",
    key: 2,
  },
  {
    transactionId: "MOV12345",
    transactionDate: "December 15,2021",
    company: "DLTBCo.",
    referenceId: "BC12345",
    amount: "P50,000",
    key: 3,
  },
];

function WalletTopup() {
  const [topupModalVisible, setTopupModalVisible] = useState(false);
  return (
    <>
      <div className="walletTopup-container">
        <div className="details-container">
          <div>
            <div>
              <span className="wallet-details-key">Client Name:</span>{" "}
              <span className="wallet-details-value">DLTB Co.</span>
            </div>

            <div>
              <span className="wallet-details-key">Wallet Balance:</span>{" "}
              <span className="wallet-details-value">₱0.00</span>
            </div>
          </div>
          <div style={{ alignSelf: "flex-end" }}>
            <Button
              onClick={() => setTopupModalVisible(true)}
              className="topup-button"
            >
              Balance Top-up
            </Button>
          </div>
        </div>

        <div className="dashed" />

        <div className="transaction-history-container">
          <div className="table-upper-div">
            <div className="table-title">Top-up History</div>
            <div className="search-div">
              <Search
                onSearch={() => alert("SEARCH")}
                placeholder="Reference ID | Transaction ID"
                className="topup-search"
              />
            </div>
          </div>

          <div>
            <Table
              // loading={this.state.fetching}
              scroll={{ y: 500 }}
              rowKey="key"
              pagination={{ position: ["bottomCenter"], pageSize: 10 }} // pageSize set dropdown
              // pagination={false}
              columns={tableSource}
              dataSource={dataSource}
            />

            {/* <Pagination showSizeChanger={true} /> */}
          </div>
        </div>
      </div>
      <TopupModal
        visible={topupModalVisible}
        handleCancel={() => setTopupModalVisible(false)}
        handleOk={() => setTopupModalVisible(false)}
      />
    </>
  );
}

export default WalletTopup;
