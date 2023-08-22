import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div
        class="nk-sidebar is-light nk-sidebar-fixed is-light "
        data-content="sidebarMenu"
      >
        <div class="nk-sidebar-element nk-sidebar-head">
          <div class="nk-sidebar-brand justify-content-between">
            <a class="logo-link nk-sidebar-logo">
              <img
                class="logo-dark logo-img"
                src="../elorca.png"
                srcset="./images/elorca.png 2x"
                alt="logo-dark"
                style={{ height: "200px" }}
              />
            </a>
            <h4 class="fw-bold m-0">Elorca Dashboard</h4>
          </div>

          <div class="nk-menu-trigger me-n2">
            <a
              href="#"
              class="nk-nav-toggle nk-quick-nav-icon d-xl-none"
              data-target="sidebarMenu"
            >
              <em class="icon ni ni-arrow-left"></em>
            </a>
          </div>
        </div>
        <div class="nk-sidebar-element">
          <div class="nk-sidebar-content">
            <div class="nk-sidebar-menu" data-simplebar>
              <ul class="nk-menu">
                <li class="nk-menu-heading">
                  <h6 class="overline-title text-primary-alt">
                    Dashboard Portal
                  </h6>
                </li>
                <li class="nk-menu-item">
                  <NavLink className="nk-menu-link" to={"/"}>
                    <a class="nk-menu-link">
                      <span class="nk-menu-icon">
                     <em class="icon ni ni-view-x2"></em>
                      </span>
                      <span class="nk-menu-text">Trello</span>
                    </a>
                  </NavLink>
                </li>
                {/* <li class="nk-menu-item">
                  <NavLink className="nk-menu-link" to={"/Reviews"}>
                    <a class="nk-menu-link">
                      <span class="nk-menu-icon">
                     <em class="icon ni ni-view-x2"></em>
                      </span>
                      <span class="nk-menu-text">Stationary</span>
                    </a>
                  </NavLink>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Bar Chart */}
    </>
  );
};
export default Sidebar;
