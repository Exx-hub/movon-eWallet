import React, { useState } from "react";
import { Modal, Button, Select, Input, Form } from "antd";
import "./modal.css";

const { Option } = Select;

function AddUserModal(props) {
  const [values, setValues] = useState({
    merchant: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const handleOk = () => {
    alert("submitted");

    console.log("merchant:", values.merchant);
    console.log("firstName:", values.firstName);
    console.log("lastName:", values.lastName);
    console.log("email:", values.email);
    console.log("username:", values.username);
    console.log("password:", values.password);

    props.handleOk();

    // connect to save new user api here to save new user
  };
  return (
    <Modal
      visible={props.visible}
      closable={false}
      footer={false}
      destroyOnClose
      title="Add New User"
    >
      <Form onFinish={handleOk}>
        <Form.Item
          name="merchant"
          rules={[{ required: true, message: "This field is required!" }]}
        >
          <Select
            defaultValue="Merchant"
            onChange={(e) => setValues({ ...values, merchant: e })}
          >
            {props.merchantList.map((e, i) => (
              <Option key={i} value={e}>
                {e}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="firstName"
          rules={[{ required: true, message: "This field is required!" }]}
        >
          <Input
            value={values.firstName}
            onChange={(e) =>
              setValues({ ...values, firstName: e.target.value })
            }
            placeholder="First Name"
          />
        </Form.Item>
        <Form.Item
          name="lastName"
          rules={[{ required: true, message: "This field is required!" }]}
        >
          <Input
            value={values.lastName}
            onChange={(e) => setValues({ ...values, lastName: e.target.value })}
            placeholder="Last Name"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "This field is required!" }]}
        >
          <Input
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "This field is required!" }]}
        >
          <Input
            value={values.username}
            onChange={(e) => setValues({ ...values, username: e.target.value })}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "This field is required!" }]}
        >
          <Input.Password
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            placeholder="Password"
          />
        </Form.Item>

        <div className="buttons-div">
          <Button className="cancel-btn" onClick={props.handleCancel}>
            Cancel
          </Button>
          <Button
            htmlType="submit"
            className="ok-btn"
            // onClick={handleOk}
          >
            Save User
          </Button>
        </div>
      </Form>
    </Modal>
  );
}

export default AddUserModal;
