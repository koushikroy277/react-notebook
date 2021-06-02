import React from "react";
import "./Landing.scss";
import SideBar from "../component/SideBar";
import Editor from "./Editor";

const Landing: React.FC = () => {

  return (
    <>
      <div className="landContainer">
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="mainBar">
          <Editor />
        </div>
      </div>
    </>
  );
};

export default Landing;
