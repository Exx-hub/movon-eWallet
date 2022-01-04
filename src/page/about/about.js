import React from "react";
import "./about.css";

import aboutLogo from "../../assets/images/aboutLogo.png";

import { Image } from "antd";
import { config } from "../../config";

function About() {
  return (
    <div className="about-container">
      <div className="image-build-div">
        <Image preview={false} src={aboutLogo} alt="" />
        <div className="build-div">version {config.version.build}</div>
      </div>
      <div className="about-text">
        Aliquip aliqua nisi aliquip officia sit reprehenderit. Est sint id nisi
        magna minim. Non in velit consequat qui duis laborum ea consequat nulla
        reprehenderit aliqua dolore. Officia laborum ad elit qui ad consectetur
        adipisicing cillum laboris qui proident labore. Ex amet aute incididunt
        voluptate aliquip enim elit amet proident in quis Lorem et fugiat.
        Aliquip aliqua nisi aliquip officia sit reprehenderit. Est sint id nisi
        magna minim. Non in velit consequat qui duis laborum ea consequat nulla
        reprehenderit aliqua dolore. Officia laborum ad elit qui ad consectetur
        adipisicing cillum laboris qui proident labore. Ex amet aute incididunt
        voluptate aliquip enim elit amet proident in quis Lorem et fugiat.
      </div>
      <div className="about-footer">
        <span>
          ©2022 movon.com.ph | v.{config.version.build} | IOT Instant Online
          Transport | All Rights Reserved.
        </span>
      </div>
    </div>
  );
}

export default About;
