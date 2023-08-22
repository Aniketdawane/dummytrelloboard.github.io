import React from "react";
import { Route, Routes } from "react-router-dom";
import Dragmain from "../Pages/Dragmain";
import Footer from "../Base/Footer";
import Data from "../Pages/Data";
import Dragula from "../Pages/Dragula";
const Content = () => {
  return (
    <>
      <div class="nk-content nk-content-fluid">
        <div class="container-xl wide-xl">
          <div class="nk-content-body">
            <div class="nk-block">
              <div class="row g-gs">
                <Routes>
                  <Route path="/" element={<Dragmain />} />
                  <Route path="/Data" element={<Data />} />
                  <Route path="/Dragula" element={<Dragula />} />
                </Routes>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
