import React from "react";
import SideBar from "../../components/Sidebar";
import frame from "../../assets/img/Frame.png";
import verify from "../../assets/img/verify.png";
import hide from "../../assets/img/hide.png";
import usa from "../../assets/img/us.png";
import naija from "../../assets/img/naija.png";
import tooltip from "../../assets/img/tooltip.png";
import ghana from "../../assets/img/ghana.png";
import funnel from "../../assets/img/funnel.png";
import up from "../../assets/img/row-up.png";
import down from "../../assets/img/row-down.png";
import Button from "../../components/Button";
import Select from "../../components/Dropdown/index";
import { Link } from "react-router-dom";
import Chart from "../../components/Chart";

export const DashBoardComponent = () => {
  const options = [
    { value: "today", label: "Today" },
    { value: "yesterday", label: "Yesterday" },
    { value: "month", label: "This Month" },
  ];

  return (
    <div>
      <SideBar>
        <div className="p-3">
          <div className="row row-grid">
            <div className="col-md-10">
              <h1 className="title-main">Hello, Stone</h1>
              <p className="par-main">
                Here is an overview of all your business activities
              </p>
            </div>
            <div className="col-md-2">
              <div className="verified-batch text-center">
                <img src={frame} alt="" />
                &nbsp; <img src={verify} alt="" />
                &nbsp; Verified
              </div>
            </div>
          </div>
          <div className="row row-grid mt-5">
            <div className="col-md-2">
              <Button
                text="Add Money"
                handleButtonClick={() => {}}
                type="button"
                btnstyle={{ backgroundColor: "#2F80ED", color: "white" }}
              />
            </div>
            <div className="col-md-2">
              <Button
                text="Send money"
                handleButtonClick={() => {}}
                type="button"
              />
            </div>
            <div className="col-md-2">
              <Button
                text="Exchange"
                handleButtonClick={() => {}}
                type="button"
              />
            </div>
            <div className="col-md-2">
              <Button
                text="Borrow"
                handleButtonClick={() => {}}
                type="button"
              />
            </div>
          </div>
          <div className="row mt-4 mb-3">
            <div className="col-md-12">
              <p className="par-main">
                Hide account summary <img src={hide} alt="" />
              </p>
            </div>
          </div>
          <div className="row row-grid">
            <div className="col-md-4">
              <div className="summary-card">
                <p className="par-acc">All accounts value in USD</p>
                <h1 className="total-amt">
                  USD 1,853,025{" "}
                  <img src={usa} alt="" style={{ verticalAlign: "middle" }} />
                  <i
                    className="fa fa-angle-down"
                    style={{ fontSize: "16px" }}
                  ></i>
                </h1>
              </div>
            </div>
            <div className="col-md-4">
              <div className="summary-card-bal">
                <div className="d-flex">
                  <p className="par-acc">Available accounts balance </p>
                  <p className="ml-auto accounts">5</p>
                </div>
                <div className="pt-4 pl-4 pr-4">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={naija} alt="" />
                    </div>
                    <div className="col-md-10">
                      <p className="par-main">NGN 228,054,050</p>
                      <p className="par-main" style={{ color: "#1C223C" }}>
                        Nigerian Naira
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 pl-4 pr-4 mb-2">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={ghana} alt="" />
                    </div>
                    <div className="col-md-10">
                      <p className="par-main">GHC 1,880,210</p>
                      <p className="par-main" style={{ color: "#1C223C" }}>
                        Ugandan Shillings
                      </p>
                    </div>
                  </div>
                </div>
                <Link to="/">See all</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="summary-card-vol">
                <div className="row row-grid">
                  <div className="col-md-8">
                    <p className="par-main">Incoming volume </p>
                  </div>
                  <div className="col-md-4">
                    <Select
                      options={options}
                      handleChange={() => {}}
                      defaultValue={{ label: "Today", value: "today" }}
                    />
                  </div>
                </div>
                <p className="par-acc" style={{ color: "#1C223C" }}>
                  $ 1,431,471
                </p>
                <p className="prices">
                  <img src={up} alt="" />
                  &nbsp; 24%
                </p>
                <p className="par-main pt-4">Outgoing volume </p>
                <p className="par-acc" style={{ color: "#1C223C" }}>
                  $ 680,000
                </p>
                <p className="prices">
                  <img src={down} alt="" />
                  &nbsp; 12%
                </p>
              </div>
            </div>
          </div>
          <div className="analytics mt-4 p-4">
            <div className="row no-gutters">
              <div className="col-sm-9 col-md-9">
                <h1 className="par-acc">Analytics</h1>
              </div>
              <div className="col-sm-3 col-md-3 text-right">
                <img src={funnel} alt="" /> Filter by weekly{" "}
                <i className="fa fa-angle-down"></i>
              </div>
            </div>
          </div>
          <div className="graph-area pt-3 pl-5 pr-5 pb-3">
            <div className="divider"></div>
            <div className="row row-grid">
              <div className="col-md-4">
                <p className="par-main">
                  <img src={tooltip} alt="" /> New customers{" "}
                </p>
                <div className="d-flex pt-2 pb-3">
                  <p className="par-acc" style={{ color: "#1C223C" }}>
                    6,045
                  </p>
                  <p className="ml-auto prices">+24%</p>
                </div>
                <p className="par-main">Collections</p>
                <div className="d-flex pt-2 pb-3">
                  <p className="par-acc" style={{ color: "#1C223C" }}>
                    11,000
                  </p>
                  <p className="ml-auto prices">+18%</p>
                </div>
                <p className="par-main">Payouts</p>
                <div className="d-flex pt-2 pb-3">
                  <p className="par-acc" style={{ color: "#1C223C" }}>
                    5,658
                  </p>
                  <p className="ml-auto prices">+15%</p>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-7">
                <Chart />
              </div>
            </div>
          </div>
        </div>
      </SideBar>
    </div>
  );
};
export default DashBoardComponent;
