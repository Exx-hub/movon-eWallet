import React from "react";
import "./Header.css";
import { Menu, Dropdown, Layout, Image } from "antd";
import {
  DownOutlined,
  InfoCircleOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router";
import movonLogo from "../../assets/images/movonLogo.png";
const { Header } = Layout;

function _Header(props) {
  const history = useHistory();

  // console.log(props);

  // --- DROPDOWN MENU DATA
  const MenuData = [
    // {
    //   key: "drop-down-user-profile",
    //   name: "User Profile",
    //   type: "menu",
    //   icon: () => <UserOutlined />,
    //   action: () => history.push("/profile"),
    // },
    {
      key: "drop-down-change-password",
      name: "Change Password",
      type: "menu",
      icon: () => <InfoCircleOutlined />,
      action: () => props.setChangePassVisible(),
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
        <div className="home-header-title">{props.headerTitle}</div>

        <Dropdown overlay={menu} trigger={["click"]}>
          <span className="home-header-dropdown-span">
            E-Wallet{" "}
            <DownOutlined style={{ fontSize: "10px", marginLeft: 5 }} />
          </span>
        </Dropdown>
      </div>
    </Header>
  );
}

export default _Header;
