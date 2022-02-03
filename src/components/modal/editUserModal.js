import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import "./modal.css";
import {
  deactivateUserSuccessPrompt,
  updateUserSuccessPrompt,
} from "../../utility";

function EditUserModal(props) {
  // console.log(props);

  const [values, setValues] = useState({
    newFirstName: "",
    newLastName: "",
    newPassword: "",
  });

  const deactivateUser = () => {
    deactivateUserSuccessPrompt();

    props.handleDeac();
  };

  const handleOk = () => {
    updateUserSuccessPrompt();

    console.log("newFirstName:", values.newFirstName);
    console.log("newLastName:", values.newLastName);

    console.log("newPassword:", values.newPassword);

    props.handleOk();

    // connect to save new user api here to save new user
  };
  return (
    <Modal
      visible={props.visible}
      closable={false}
      footer={false}
      destroyOnClose
      title="Edit User Details"
    >
      <Form onFinish={handleOk}>
        <Form.Item>
          <Input
            disabled
            placeholder={props.itemToEdit ? props.itemToEdit.merchant : ""}
            className="disabled-input"
          />
        </Form.Item>
        <Form.Item
          name="newFirstName"
          rules={[{ required: true, message: "This field is required!" }]}
        >
          <Input
            placeholder="First Name"
            value={values.newFirstName}
            onChange={(e) =>
              setValues({ ...values, newFirstName: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item
          name="newLastName"
          rules={[{ required: true, message: "This field is required!" }]}
        >
          <Input
            placeholder="Last Name"
            value={values.newLastName}
            onChange={(e) =>
              setValues({ ...values, newLastName: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder={props.itemToEdit ? props.itemToEdit.email : ""}
            className="disabled-input"
            disabled
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder={props.itemToEdit ? props.itemToEdit.username : ""}
            className="disabled-input"
            disabled
          />
        </Form.Item>
        <Form.Item
          name="newPassword"
          rules={[{ required: true, message: "This field is required!" }]}
        >
          <Input.Password
            placeholder="Password"
            value={values.newPassword}
            onChange={(e) =>
              setValues({ ...values, newPassword: e.target.value })
            }
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
          <Button className="deac-btn" onClick={deactivateUser}>
            Deactivate
          </Button>
        </div>
      </Form>
    </Modal>
  );
}

export default EditUserModal;
