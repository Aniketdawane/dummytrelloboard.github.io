import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

const Base = () => {
  return (
    <>
      <div class="nk-app-root">
        <div class="nk-main ">
          <Sidebar />
          <div class="nk-wrap ">
            <Content />
          </div>
        </div>
      </div>
    </>
  );
};

export default Base;
