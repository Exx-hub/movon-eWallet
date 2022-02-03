import React, { useState } from "react";
import { Modal, Button, Form, Input, InputNumber } from "antd";
// import { UserProfile } from "../../utility";
import "./modal.css";
import { topupSuccess } from "../../utility";

function TopupModal(props) {
  const [amount, setAmount] = useState("");
  //   console.log(amount);

  const handleSubmit = () => {
    topupSuccess();

    console.log("topup amount", amount);

    props.handleOk();

    // connect to topup balance api
  };
  return (
    <Modal
      visible={props.visible}
      title="Balance Top-up"
      className="modal"
      onCancel={props.handleCancel}
      closable={false}
      footer={false}
      destroyOnClose
    >
      <Form onFinish={handleSubmit}>
        <Form.Item
          name="amount"
          rules={[{ required: true, message: "This field is required!" }]}
        >
          <InputNumber
            addonBefore="₱"
            size="large"
            style={{ width: "50%" }}
            placeholder="Enter Top-up Amount"
            value={amount}
            onChange={(e) => setAmount(e)}
            controls={false}
          />
        </Form.Item>

        <div style={{ marginTop: 10 }} className="topup-buttons-div">
          <Button className="cancel-btn" onClick={props.handleCancel}>
            Cancel
          </Button>
          <Button htmlType="submit" className="ok-btn">
            Confirm
          </Button>
        </div>
      </Form>
    </Modal>
  );
}

export default TopupModal;
