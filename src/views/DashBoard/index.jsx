import React from "react";
import SideBar from "../../components/Sidebar";
import frame from "../../assets/img/Frame.png";
import verify from "../../assets/img/verify.png";
import hide from "../../assets/img/hide.png";
import Button from "../../components/Button";

export const DashBoardComponent = () => {
  return (
    <div>
      <SideBar>
        <div className="p-3">
          <div className="row">
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
          <div className="row mt-5">
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
              <p className="par-main">Hide account summary <img src={hide} alt="" /></p>
            </div>
          </div>
        </div>
      </SideBar>
    </div>
  );
};
export default DashBoardComponent;
