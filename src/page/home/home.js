import React, { useEffect, useState } from "react";
import "./home.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory, useLocation } from "react-router";

import Header from "../../components/Header";

import { Layout, Menu } from "antd";

import TransactionSummary from "../transactionSummary";
import UserAdministration from "../userAdministration";
import TransactionsList from "../transactionsList";
import WalletConfig from "../walletConfig";
import ViewTransaction from "../viewTransaction";

import { ChangePasswordModal, LogOutModal } from "../../components/modal";

const { Content, Sider } = Layout;

function Home() {
  const [headerTitle, setHeaderTitle] = useState("");
  const [changePassVisible, setChangePassVisible] = useState(false);
  const [logOutVisible, setLogOutVisible] = useState(false);

  const history = useHistory();

  const location = useLocation();

  const { pathname } = location;

  console.log(headerTitle);

  useEffect(() => {
    if (pathname === "/transaction-summary") {
      setHeaderTitle("Transaction Summary");
    } else if (pathname === "/transactions") {
      setHeaderTitle("Transactions List");
    } else if (pathname === "/user-admin") {
      setHeaderTitle("User Administration");
    } else if (pathname === "/wallet-config") {
      setHeaderTitle("Wallet Configuration");
    } else {
      setHeaderTitle("");
    }
  }, [pathname]);
  return (
    <>
      <Layout className="home-page-container">
        <Header
          setChangePassVisible={() => setChangePassVisible(true)}
          setLogOutVisible={() => setLogOutVisible(true)}
          headerTitle={headerTitle}
        />
        <Layout className="home-body">
          <Sider width={210} className="home-sider">
            <Menu theme="dark" mode="inline" selectedKeys={[pathname]}>
              <Menu.Item
                key={"/transaction-summary"}
                onClick={() => history.push("/")}
                style={{ margin: 0, height: 50 }}
              >
                Transaction Summary
              </Menu.Item>
              <Menu.Item
                key={"/transactions"}
                onClick={() => history.push("/transactions")}
                style={{ margin: 0, height: 50 }}
              >
                Transactions
              </Menu.Item>
              <Menu.Item
                key={"/user-admin"}
                onClick={() => history.push("/user-admin")}
                style={{ margin: 0, height: 50 }}
              >
                User Administration
              </Menu.Item>
              <Menu.Item
                key={"/wallet-config"}
                onClick={() => history.push("/wallet-config")}
                style={{ margin: 0, height: 50 }}
              >
                Wallet Configuration
              </Menu.Item>
            </Menu>
          </Sider>

          {/* NESTED ROUTES - HOME CONTENT BODY  */}
          <Layout className="home-content">
            <Content>
              <Switch>
                <Route path="/transaction-summary">
                  <TransactionSummary />
                </Route>

                <Route exact path="/transactions">
                  <TransactionsList />
                </Route>

                <Route path="/user-admin">
                  <UserAdministration />
                </Route>

                <Route path="/wallet-config">
                  <WalletConfig />
                </Route>

                <Route path="/transactions/:id">
                  <ViewTransaction />
                </Route>

                <Redirect from="/" to="/transaction-summary" />
              </Switch>
            </Content>
          </Layout>
        </Layout>

        <ChangePasswordModal
          visible={changePassVisible}
          handleCancel={() => setChangePassVisible(false)}
          handleOk={() => setChangePassVisible(false)}
        />

        <LogOutModal
          visible={logOutVisible}
          handleCancel={() => setLogOutVisible(false)}
          handleOk={() => setLogOutVisible(false)}
          history={history}
        />
      </Layout>
    </>
  );
}

export default Home;
