import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import "./modal.css";
import { updatePasswordSuccess } from "../../utility";

function ChangePasswordModal(props) {
  const [values, setValues] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPass: "",
  });

  const handleOk = () => {
    updatePasswordSuccess();

    console.log("old password:", values.oldPassword);
    console.log("new password:", values.newPassword);
    console.log("confirm password:", values.confirmPass);

    props.handleOk();

    // connect to update password api here to update password
  };
  return (
    <Modal
      title="Change Password"
      visible={props.visible}
      className="change-password-modal"
      onCancel={props.handleCancel}
      footer={false}
      destroyOnClose
    >
      <Form onFinish={handleOk}>
        <Form.Item
          name="old password"
          rules={[{ required: true, message: "Old Password is required!" }]}
        >
          <Input.Password
            value={values.oldPassword}
            onChange={(e) =>
              setValues({ ...values, oldPassword: e.target.value })
            }
            placeholder="Enter Old Password"
            // disabled={isLoading}
            style={{ padding: 10 }}
          />
        </Form.Item>

        <Form.Item
          name="new password"
          rules={[{ required: true, message: "Please enter new password!" }]}
        >
          <Input.Password
            value={values.newPassword}
            onChange={(e) =>
              setValues({ ...values, newPassword: e.target.value })
            }
            placeholder="Enter New Password"
            // disabled={isLoading}
            style={{ padding: 10 }}
          />
        </Form.Item>

        <Form.Item
          name="confirm password"
          rules={[{ required: true, message: "Confirm new password!" }]}
        >
          <Input.Password
            value={values.confirmPass}
            onChange={(e) =>
              setValues({ ...values, confirmPass: e.target.value })
            }
            placeholder="Confirm Password"
            // disabled={isLoading}
            style={{ padding: 10 }}
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
            Update Password
          </Button>
        </div>
      </Form>
    </Modal>
  );
}

export default ChangePasswordModal;
