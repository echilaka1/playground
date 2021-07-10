import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import NavBar from "../Navbar/index";
import PropTypes from "prop-types";
import dashboardNow from "../../assets/img/menu-icon.png";
import logo from "../../assets/img/logo-dark.svg";

export class SideBar extends Component {
  state = {
    isMenuActive: false,
  };

  toggleMenu = (e) => {
    e.stopPropagation();
    this.setState({
      isMenuActive: true,
    });
  };

  closeMenu = (e) => {
    e.preventDefault();
    this.setState({
      isMenuActive: false,
    });
  };

  componentDidMount() {
    document.getElementById("foo").addEventListener("click", this.closeMenu);
  }

  componentWillUnmount() {
    document.getElementById("foo").removeEventListener("click", this.closeMenu);
  }

  render() {
    const { isMenuActive } = this.state;
    const { children } = this.props;

    return (
      <>
        <div
          onClick={(e) => e.stopPropagation()}
          className={`side-nav ${
            isMenuActive ? "show-sidebar" : "hide-sidebar"
          }`}
        >
          <div id="foo">
            <i className="fa fa-arrow-left"></i>
          </div>
          <div className="heading">
            <div className="info text-center">
              <img src={logo} alt="" />
              <p>ID: EVSD00000001</p>
            </div>
          </div>
          <ul className="categories">
            <li>
              <NavLink to="/" exact activeClassName="active">
                <div className="home">
                  <img src={dashboardNow} alt="" className="sidebar-icon" />{" "}
                  Overview
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/payout" exact activeClassName="active">
                <div className="home">
                  <img src={dashboardNow} alt="" className="sidebar-icon" />{" "}
                  Payouts
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/wallet" exact activeClassName="active">
                <div className="home">
                  <img src={dashboardNow} alt="" className="sidebar-icon" />{" "}
                  Wallets
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/transaction" exact activeClassName="active">
                <div className="home">
                  <img src={dashboardNow} alt="" className="sidebar-icon" />
                  Transactions
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/beneficiary" exact activeClassName="active">
                <div className="home">
                  <img src={dashboardNow} alt="" className="sidebar-icon" />
                  Beneficiary
                </div>
              </NavLink>
            </li>
            <br />
            <br />
            <li>
              <NavLink to="/referral" exact activeClassName="active">
                <div className="home">
                  <img src={dashboardNow} alt="" className="sidebar-icon" />
                  Referral
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/api" exact activeClassName="active">
                <div className="home">
                  <img src={dashboardNow} alt="" className="sidebar-icon" />
                  API doc
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/business" exact activeClassName="active">
                <div className="home">
                  <img src={dashboardNow} alt="" className="sidebar-icon" />
                  Business Settings
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div id="contents">
          <NavBar hideMenu={this.toggleMenu} />
          <div className="container-fluid">
            <div className="mt-4">{children}</div>
          </div>
        </div>
      </>
    );
  }
}

NavBar.propTypes = {
  children: PropTypes.element,
};

export default SideBar;
