import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import leftslideicon from "../images/leftslideicon.png";
import sel1_horizontal_dot from "../images/1sel_horizontal_dot.png";
import hdfcicon from "../images/HDFCicon.png";
import Div_withShadow1 from "./Div_withShadow1";

function Saving_Personal_details() {
  return (
    <div className="conatiner">
      <Navbar home="Home" />
      <div className="account_body">
        <div className="leftslideicon">
          <Link to="/Manage_Accounts1">
            {" "}
            <img src={leftslideicon} alt="leftsliceicon" />
          </Link>
          <div className="main_content">
            <div className="Apply_acc">
              <div className="heading_Apply_acc">
                <span className="apply_for">Apply for</span>
                <span className="curre_account">Saving Account</span>
                <span className="apply_for"> in 1 min!</span>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              className="right_select_account"
              style={{ paddingLeft: "50px", paddingRight: "50px" }}
            >
              <div
                style={{
                  fontSize: "20px",
                  color: "#008088",
                  textAlign: "center",
                  paddingBottom: "20px",
                }}
              >
                Personal Details
              </div>
              <div style={{ textAlign: "center" }}>
                <img src={sel1_horizontal_dot} alt="sel1_horizontal_dot" />
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "150px", marginTop: "20px" }}>
                  Enter Details
                </div>
                <div>
                  <span>Bank</span>
                  <img src={hdfcicon} alt="hdfcicon" />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <Div_withShadow1 divdata="First Name" />
                <Div_withShadow1 divdata="last Name" />
              </div>
              <div style={{ display: "flex" }}>
                <Div_withShadow1 divdata="Mobile Number" />
                <Div_withShadow1 divdata="Email ID" />
              </div>
              <div style={{ display: "flex" }}>
                <Div_withShadow1 divdata="Country" triangle=" " />
                <Div_withShadow1 divdata="State" triangle=" " />
              </div>
              <div style={{ display: "flex" }}>
                <Div_withShadow1 divdata="Enter House Address" />
                <Div_withShadow1 divdata="Pincode" />
              </div>
              <div style={{ textAlign: "center" }}>
                <button
                  style={{
                    width: "70px",
                    height: "30px",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  <Link to="/Account_details">Next</Link>
                </button>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div
                className="right_select_account"
                style={{ paddingLeft: "50px", paddingRight: "70px", }}
              >
                <div
                  style={{
                    fontSize: "20px",
                    color: "#008088",
                    textAlign: "center",
                    paddingBottom: "20px",
                   
                  }}
                >
                  Verify Personal Details
                </div>
                <div style={{ display: "flex",marginTop:"20px" }}>
                  <div style={{marginRight:"80px"}}>Name</div>
                  <div style={{ color: "#008088" }}>Aishani Ghosh</div>
                </div>
                
                <div style={{ display: "flex",marginTop:"20px" }}>
                  <div style={{marginRight:"20px"}}>Mobile Number</div>
                  <div style={{ color: "#008088" }}>9771234567</div>
                </div>
                <div style={{ display: "flex",marginTop:"20px" }}>
                  <div style={{marginRight:"60px"}}>Email ID</div>
                  <div style={{ color: "#008088" }}>ax74@gmail.com</div>
                </div>
                <div style={{ display: "flex",marginTop:"20px" }}>
                  <div style={{marginRight:"70px"}}>Country</div>
                  <div style={{ color: "#008088" }}>India</div>
                </div>
                <div style={{ display: "flex",marginTop:"20px" }}>
                  <div style={{marginRight:"80px"}}>State</div>
                  <div style={{ color: "#008088" }}>Uttar Pradesh</div>
                </div>
                <div style={{ display: "flex",marginTop:"20px" }}>
                  <div style={{marginRight:"40px"}}>House Address</div>
                </div>
                <div style={{ display: "flex",marginTop:"20px" }}>
                  <div style={{marginRight:"70px"}}>Pin Code</div>
                  <div style={{ color: "#008088" }}>204567</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Saving_Personal_details;
