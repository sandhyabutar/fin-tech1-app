import React from "react";
import Navbar from "./Navbar";
import leftslideicon from "../images/leftslideicon.png";
import { Link } from "react-router-dom";
import hdfcicon from "../images/HDFCicon.png";
import icicilogo from "../images/icici_Icon.png";
import Axislogo from "../images/Axis_Bank-Logo.png";
import circle from "../images/circle.png";
import sel1_horizontal_dot from "../images/1sel_horizontal_dot.png";
import icici_credit from "../images/ICICI_CREDIT_CARD.png";


function Saving_select_acc() {
  return (
    <>
      <div className="conatiner">
        <Navbar home="Home" />
        <div className="account_body">
          <div className="leftslideicon">
            <Link to="/Manage_account">
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
                style={{ paddingLeft: "100px", paddingRight: "100px" }}
              >
                <div
                  style={{
                    fontSize: "20px",
                    color: "#008088",
                    textAlign: "center",
                    paddingBottom: "20px",
                  }}
                >
                  Select a bank
                </div>
                <div style={{ textAlign: "center" }}>
                  <img src={sel1_horizontal_dot} alt="sel1_horizontal_dot" />
                </div>
                <div>
                  <p>Select a preferred Bank Account.!</p>
                </div>
                <div className="div_with_polygon">
                  <div style={{float:"right"}}>
                    <div class="triangle-up"></div>
                    <div class="triangle-down"></div>
                  </div>
                </div>
                <div className="select_preferd_bank" style={{width:"250px"}}>
              <div>
                <span>
                  <img src={hdfcicon} alt="hdfcicon"/>
                </span>
                <span>HDFC Bank</span>
                <img src={circle} alt="circle"/>
              </div>
              <div>
                <span>
                  <img src={icicilogo} alt="icicilogo"/>
                </span>
                <span>HDFC Bank</span>
                <img src={circle} alt="circle"/>
              </div>
              <div>
                <span>
                  <img src={Axislogo} alt="Axislogo"/>
                </span>
                <span>HDFC Bank</span>
                <img src={circle} alt="circle"/>
              </div>
              
            </div>
                <div>
                  <button
                    style={{
                      width: "70px",
                      height: "30px",
                      marginLeft: "120px",
                      marginTop:"90px",
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    <Link to="/Account_details">Next</Link>
                  </button>
                </div>
              </div>
              <div className="right_select_account" style={{ paddingLeft: "40px", paddingRight: "40px" }}>
                <div
                  style={{
                    fontSize: "20px",
                    color: "#008088",
                    textAlign: "center",
                  }}
                >
                  Select a bank
                </div>
                <div>
                  <img src={hdfcicon} alt="hdfcicon" />
                  <span>HDFC Bank</span>
                </div>
                <div style={{ textAlign: "center" }}>
                  <img
                    src={icici_credit}
                    alt="icici_credit"
                    style={{ width: "150px" }}
                  />
                  <p>Platinum Debit Card</p>
                </div>
                <div>Plan</div>
                <div>
                  <span>Interest Rate</span>
                  <span style={{ color: "#008088" }}>6%</span>
                </div>
                <div>
                  <span>Debit Card</span>
                  <span style={{ color: "#008088" }}>Gold</span>
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <span>Min Amount</span>
                  <span style={{ color: "#008088" }}>10,000 Rupees</span>
                </div>
                <div>Benefits</div>
                <div><li style={{color:"#008088"}}>3 Complimentary  Airport lounge access annually.</li>
                <li style={{color:"#008088"}}>2% cashback on all offline spends and wallet reloads.</li>
                <li style={{color:"#008088"}}>International air accident death cover of Rupees 1 Crore.</li></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Saving_select_acc;
