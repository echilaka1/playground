import React from "react";
import notify from "../../assets/img/notify.png";
import avatar from "../../assets/img/vatar.png";
import "./index.css";

export const NavBar = ({ hideMenu }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-white new-bg">
      <div className="container-fluid">
        <div className="navbar-brand">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <span
              style={{ display: "flex", flexDirection: "column", flex: "1" }}
            >
              <i className="fa fa-bars menu-icon" onClick={hideMenu}></i>
            </span>
          </div>
        </div>
        <div>
          <ul className="navbar-nav abs-center-x">
            <li>
              <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search customer..."
                />
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="notify-text notify-items">
              Go live{" "}
              <label className="switch">
                <input type="checkbox" />
                <span className="sliderswitch round"></span>
              </label>
            </li>
            <li className="notify notify-items">
              <img src={notify} alt="notify" />
            </li>
            <li className="notify notify-items">
              <img src={avatar} alt="notify" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
