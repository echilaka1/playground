import React from "react";
import notify from "../../assets/img/notify.png";
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
            <span
              style={{ display: "flex", flexDirection: "column", flex: "1" }}
              className="title"
            >
              Hello, Mark
            </span>
          </div>
        </div>
        <div>
          <ul className="navbar-nav w-100">
            <li className="ml-auto notify">
              <img src={notify} alt="notify" />
            </li>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item">Home</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
