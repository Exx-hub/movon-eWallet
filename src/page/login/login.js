import React, { useState } from "react";
import "./login.css";

import { Image, Form, Input, Button, Spin, Space } from "antd";
import { UserOutlined, LoadingOutlined } from "@ant-design/icons";
import movonLogo from "../../assets/images/movonLogo.png";

import { config } from "../../config";
import {
  loginFailedPrompt,
  loginSuccessPrompt,
  UserProfile,
} from "../../utility";
import { useHistory } from "react-router-dom";
import User from "../../service/User";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  React.useEffect(() => {
    if (UserProfile.getCredential()) {
      history.push("/");

      // onFinish, userid and pass will be sent to server and if correct credentials, server will return data with the response.
      // user data and token will be saved in localstorate with key "credential". then state will be changed to loading false,
      // that state change will trigger this userEffect, checking if there is value for credential, will change url to "/"
      // window.location.replace("/");
    }
  }, [history]);

  const onFinish = () => {
    setIsLoading(true);

    console.log(username, password);

    User.login(username, password)
      .then((e) => {
        const { data, success, errorCode } = e.data;
        console.log("FRESH FROM LOGIN FETCH:", e.data);
        setIsLoading(false);

        if (errorCode) {
          loginFailedPrompt();
        }

        if (success) {
          UserProfile.setCredential({ user: data.user, token: data.token });
          loginSuccessPrompt();
          history.push("/");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="login-page">
      <div className="loginPage-formContainer">
        <Form onFinish={onFinish}>
          <div className="loginForm-header">
            <Image
              preview={false}
              className="movon-logo"
              src={movonLogo}
              alt=""
            />
          </div>
          <Space direction="vertical" style={{ width: "100%" }}>
            <Form.Item
              style={{ margin: 0, marginBottom: 6 }}
              name="username"
              rules={[{ required: true, message: "Username is required!" }]}
            >
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                disabled={isLoading}
                suffix={<UserOutlined style={{ color: "#6C7077" }} />}
                style={{ padding: 10 }}
              />
            </Form.Item>

            <Form.Item
              // style={{ margin: 3 }}
              name="password"
              rules={[{ required: true, message: "Password is required!" }]}
            >
              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                // disabled={isLoading}
                style={{ padding: 10 }}
              />
            </Form.Item>

            <div className="login-button-div">
              <Button
                htmlType="submit"
                className="login-button"
                disabled={isLoading}
              >
                {isLoading && (
                  <div className="login-button-spinner">
                    <Spin
                      indicator={
                        <LoadingOutlined
                          style={{ fontSize: 24, color: "#333" }}
                          spin
                        />
                      }
                    />
                  </div>
                )}
                LOGIN
              </Button>

              <div className="forgot-password">Forgot Password?</div>
            </div>
          </Space>
        </Form>
      </div>
      <div className="version-div">
        <span className="version">
          2021 ?? MovOn {config.version.environment} v{config.version.build}
        </span>
      </div>
    </div>
  );
}

export default Login;
