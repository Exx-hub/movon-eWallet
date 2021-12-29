import React from "react";
import "./walletConfig.css";

import { Input, Button, Checkbox } from "antd";

function WalletConfig() {
  return (
    <div className="wallet-config-container">
      <div className="wallet-config-body-container">
        <div className="wallet-config-body">
          <div className="div">
            <div className="title-div">LEVEL</div>
            <div className="checkbox-div">
              <Checkbox style={{ marginRight: 7 }} /> Level 1
            </div>
            <div className="checkbox-div">
              <Checkbox style={{ marginRight: 7 }} /> Level 2
            </div>
            <div className="checkbox-div">
              <Checkbox style={{ marginRight: 7 }} /> Level 3
            </div>
          </div>

          <div className="div">
            <div className="title-div">ALERT NAME</div>
            <div className="input-div">
              <Input placeholder="Alert Name" />
            </div>
            <div className="input-div">
              <Input placeholder="Alert Name" />
            </div>
            <div className="input-div">
              <Input placeholder="Alert Name" />
            </div>
          </div>

          <div className="div">
            <div className="title-div">AMOUNT</div>
            <div className="input-div">
              <Input placeholder="Amount" />
            </div>
            <div className="input-div">
              <Input placeholder="Amount" />
            </div>
            <div className="input-div">
              <Input placeholder="Amount" />
            </div>

            <div className="button-div">
              <Button>Save</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletConfig;
