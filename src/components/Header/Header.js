import React from "react";
import "./Header.css";
import { Menu, Dropdown, Layout, Image } from "antd";
import {
  DownOutlined,
  InfoCircleOutlined,
  PoweroffOutlined,
  LeftOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router";
import movonLogo from "../../assets/images/movonLogo.png";

import { UserProfile } from "../../utility";
const { Header } = Layout;

function _Header(props) {
  const history = useHistory();

  // console.log(props);

  // --- DROPDOWN MENU DATA
  const MenuData = [
    {
      key: "drop-down-change-password",
      name: "Change Password",
      type: "menu",
      icon: () => <SafetyCertificateOutlined />,
      action: () => props.setChangePassVisible(),
    },
    {
      key: "drop-down-about",
      name: "About",
      type: "menu",
      icon: () => <InfoCircleOutlined />,
      action: () => history.push("/about"),
    },
    {
      key: "drop-down-logout",
      name: "Logout",
      type: "menu",
      icon: () => <PoweroffOutlined />,
      action: () => props.setLogOutVisible(),
    },
  ];

  // MAPPING THROUGH MENUDATA AND DISPLAY MENU ITEM WITH ICON FOR EACH MENUDATA ITEM
  const menu = () => {
    return (
      <Menu onClick={(e) => onNavigationMenuChange(e)}>
        {MenuData.map((e, i) => {
          const IconMenu = e.icon;
          return (
            <Menu.Item key={e.key}>
              <IconMenu /> {e.name}{" "}
            </Menu.Item>
          );
        })}
      </Menu>
    );
  };

  // FUNCTION FOR SWITCHING NAVIGATION FROM DROWDOWN
  const onNavigationMenuChange = (e) => {
    for (let i = 0; i < MenuData.length; i++) {
      if (MenuData[i].key === e.key) {
        MenuData[i].action();
        break;
      }
    }
  };

  return (
    <Header className="home-header">
      <div className="home-header-logo" onClick={() => history.push("/")}>
        <Image preview={false} className="header-logo" src={movonLogo} alt="" />
      </div>
      <div className="home-header-right">
        {props.headerTitle ? (
          <div className="home-header-title">{props.headerTitle}</div>
        ) : (
          <div className="home-header-title">
            {" "}
            <LeftOutlined onClick={() => history.push("/transactions")} /> Back
          </div>
        )}

        <Dropdown overlay={menu} trigger={["click"]}>
          <span className="home-header-dropdown-span">
            Welcome, {UserProfile.getUser()}!
            <DownOutlined style={{ fontSize: "10px", marginLeft: 5 }} />
          </span>
        </Dropdown>
      </div>
    </Header>
  );
}

export default _Header;
