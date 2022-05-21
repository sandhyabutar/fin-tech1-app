import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import leftslideicon from "../images/leftslideicon.png";
import hdfcicon from "../images/HDFCicon.png";
import icicilogo from "../images/icici_Icon.png";
import Axislogo from "../images/Axis_Bank-Logo.png";
import hdfc_debit from "../images/HDFC_debit_card.png";

function Account_details_notification() {
  return (
    <div className="conatiner" style={{background: "#F5F5F5"}}>
      <Navbar home="Home" notification="Notification"/>
      <div className="account_body">
        <div className="leftslideicon">
          <Link to="/Saving_Personal_details">
            {" "}
            <img src={leftslideicon} alt="leftsliceicon" />
          </Link>
        </div>
        <div className="main_content">
          <div className="Apply_acc" style={{ marginRight: "20px",
 }}>
            <div className="heading_Apply_acc">
              <span className="curre_account">ACCOUNT DETAILS</span>
            </div>
            <div>Select your bank</div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  border: "1px solid #008088",
                  borderRadius: "15px",
                  Width: "30px",
                  height: "30px",
                  margin: "10px",
                  background: "#E5F8E8",
                  padding: "5px",
                }}
              >
                <img
                  src={hdfcicon}
                  alt="hdfcicon"
                  style={{ Width: "20px", height: "20px" }}
                />
                HDFC BANK
              </div>
              <div
                style={{
                  border: "1px solid #008088",
                  borderRadius: "15px",
                  Width: "30px",
                  height: "30px",
                  margin: "10px",
                  padding: "5px",
                }}
              >
                <img
                  src={icicilogo}
                  alt="icicilogo"
                  style={{ Width: "20px", height: "20px" }}
                />
                ICICI BANK
              </div>
              <hr style={{ border: "1px dashed red" }} />
              <div>
                <div
                  style={{
                    border: "1px solid #008088",
                    borderRadius: "15px",
                    Width: "30px",
                    height: "30px",
                    margin: "10px",
                    padding: "5px",
                  }}
                >
                  <img
                    src={Axislogo}
                    alt="Axislogo"
                    style={{ Width: "20px", height: "20px" }}
                  />
                  ICICI BANK
                </div>
              </div>
            </div>
            <div
              className="card1"
              style={{
                display: "flex",
                background: "#F2FBF4",
                margin: "15px",
                marginBottom: "40px",
                width: "100px",
              }}
            >
              <div className="card-body1" style={{ display: "flex" }}>
                <img
                  src={hdfc_debit}
                  alt="hdfc_debit"
                  style={{ Width: "245px", height: "145px" }}
                />
                <div style={{ margin: "auto" }}>
                  <div style={{ fontSize: "10px", fontWeight: "bold" }}>
                    My Balance
                  </div>
                  <div style={{ color: "#008088", fontSize: "20px" }}>
                    40,000.76
                  </div>
                  <div
                    className="icons"
                    style={{ fontSize: "10px", width: "40px" }}
                  >
                    Pay
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ margin: "10px" }}>Account Number</div>
              <div style={{ margin: "10px", color: "#008088" }}>
                8400380 XXXX
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ margin: "10px" }}>IFSC Code</div>
              <div
                style={{ margin: "10px", marginLeft: "40px", color: "#008088" }}
              >
                354798
              </div>
             
            </div>
          </div>
         
        </div>
        
      </div>
    </div>
  );
}

export default Account_details_notification;
