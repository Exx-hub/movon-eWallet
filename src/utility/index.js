import UserProfileClass from "./userProfile";

import { notification } from "antd";

const UserProfile = new UserProfileClass();

const loginSuccessPrompt = () => {
  const args = {
    message: "LOGIN SUCCESS",
    description: "Logged-in Successfully",
    duration: 2,
  };

  notification.success(args);
};

const loginFailedPrompt = () => {
  const args = {
    message: "LOGIN FAILED",
    description: "Incorrect Username/Password",
    duration: 2,
  };

  notification.error(args);
};

const addUserSuccessPrompt = () => {
  const args = {
    message: "ADD USER SUCCESS",
    description: "New User Added Successfully",
    duration: 2,
  };

  notification.success(args);
};

const updateUserSuccessPrompt = () => {
  const args = {
    message: "UPDATE SUCCESS",
    description: "User Details Updated Successfully",
    duration: 2,
  };

  notification.success(args);
};

const deactivateUserSuccessPrompt = () => {
  const args = {
    message: "DEACTIVATION SUCCESS",
    description: "User Deactivated Successfully",
    duration: 2,
  };

  notification.warn(args);
};

const walletThresholdSuccessPrompt = () => {
  const args = {
    message: "WALLET CONFIG SUCCESS",
    description: "Wallet Threshold Saved Successfully",
    duration: 2,
  };

  notification.success(args);
};

const updatePasswordSuccess = () => {
  const args = {
    message: "UPDATE PASSWORD SUCCESS",
    description: "New Password Saved Successfully",
    duration: 2,
  };

  notification.success(args);
};

const errorNotification = () => {
  const args = {
    message: "ERROR",
    description: "Something Went Wrong Please Try Again",
    duration: 2,
  };

  notification.error(args);
};

export {
  UserProfile,
  loginSuccessPrompt,
  loginFailedPrompt,
  addUserSuccessPrompt,
  updateUserSuccessPrompt,
  walletThresholdSuccessPrompt,
  deactivateUserSuccessPrompt,
  updatePasswordSuccess,
  errorNotification,
};
