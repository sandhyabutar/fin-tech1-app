import React from "react";
import Navbar from "./Navbar";
import leftslideicon from "../images/leftslideicon.png";
import { Link } from "react-router-dom";
import graterThan from "../images/graterThan.png";
import icici_credit from "../images/ICICI_CREDIT_CARD.png";
import icici_debit from "../images/ICICI_DEBIT_CARD.png";
import hdfc_debit from "../images/HDFC_debit_card.png";
import delete_icon from "../images/delete_icon.png";
import incoming_icon from "../images/incoming_icon.png";
import outgoing_icon from "../images/outgoing_icon.png";
import human_icon_blue from "../images/Human_icon_blue.png";
import bellicon from "../images/bellicon.png";
import bord from "../images/bord.png";
import hdfcicon from "../images/HDFCicon.png";

import "./Manage_account.css";

function Manage_account(props) {
  return (
    <div className="conatiner">
      <Navbar home="Home" />
      <div className="account_body">
        <div className="leftslideicon">
          <Link to="/Saving_Account">
            {" "}
            <img src={leftslideicon} alt="leftsliceicon" />
          </Link>
          <div className="main_content">
            <div>
              <div> Your Cards</div>
              <div className="cards_with_content">
                <div className="card_img_content">
                  <div>
                    <img src={icici_debit} alt="icici_credit"></img>
                  </div>
                  <div>ICICI DEBIT CARD</div>
                  <div className="delete_icon_with_pay">
                    <div className="icons" style={{ float: "left" }}>
                      <img src={delete_icon} alt="delete_icon"></img>
                    </div>
                    <div className="icons" style={{ float: "right" }}>
                      Pay
                    </div>
                  </div>
                </div>
                <div className="card_img_content">
                  <div>
                    <img src={hdfc_debit} alt="icici_credit"></img>
                  </div>
                  <div>HDFC DEBIT CARD</div>
                  <div className="delete_icon_with_pay">
                    <div className="icons" style={{ float: "left" }}>
                      <img src={delete_icon} alt="delete_icon"></img>
                    </div>
                    <div className="icons" style={{ float: "right" }}>
                      Pay
                    </div>
                  </div>
                </div>
                <div className="card_img_content">
                  <div>
                    <img src={icici_credit} alt="icici_credit"></img>
                  </div>
                  <div>ICICI CREDIT CARD</div>
                  <div className="delete_icon_with_pay">
                    <div className="icons" style={{ float: "left" }}>
                      <img src={delete_icon} alt="delete_icon"></img>
                    </div>
                    <div className="icons" style={{ float: "right" }}>
                      Pay
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  background: "#008088",
                  borderRadius: "8px",
                  textAlign: "center",
                  color: "white",
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: "110px",
                }}
              >
                {" "}
                Add your Card{" "}
              </div>
              <div> Your Bank Accounts</div>
              {props?.name && (
                <div
                  className="hdfc_detalis_withbutton"
                  style={{ height: "50px", width: "500px" }}
                >
                  <div className="hdfc_detalis" style={{ paddingLeft: "10px" }}>
                    <img src={hdfcicon} alt="hdfcicon" />
                    <div style={{ alignSelf: "center", margin: "10px" }}>
                      Subh Sharma
                    </div>
                    <div style={{ alignSelf: "center", margin: "10px" }}>
                      {" "}
                      a/c:1234 XXXX XXX
                    </div>
                  </div>

                  <span classNAme="hdfc_details_button">
                    <button style={{ width: "70px", height: "30px" }}>
                      view
                    </button>
                  </span>
                </div>
              )}
              {props?.name && (
                <div
                  className="hdfc_detalis_withbutton"
                  style={{ height: "50px", width: "500px" }}
                >
                  <div className="hdfc_detalis" style={{ paddingLeft: "10px" }}>
                    <img src={hdfcicon} alt="hdfcicon" />
                    <div style={{ alignSelf: "center", margin: "10px" }}>
                      {props.name}
                    </div>
                    <div style={{ alignSelf: "center", margin: "10px" }}>
                      {" "}
                      a/c:1234 XXXX XXX
                    </div>
                  </div>
                  <span classNAme="hdfc_details_button">
                    <button style={{ width: "70px", height: "30px" }}>
                      view
                    </button>
                  </span>
                </div>
              )}
              {props?.name1 && ( <div style={{ display: "flex", marginBottom: "20px" }}>
                <div
                  style={{
                    border: "1px solid #008088",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div>
                      {" "}
                      <img
                        src={hdfcicon}
                        alt="hdfcicon"
                        style={{ width: "60px", height: "40px" }}
                      />
                    </div>
                    <div
                      style={{
                        alignSelf: "center",
                        margin: "10px",
                        marginRight: "74px",
                      }}
                    >
                    {props.name1}
                    </div>
                    <div
                      style={{
                        alignSelf: "center",
                        margin: "10px",
                        color: "#008088",
                        float: "right",
                      }}
                    >
                      {" "}
                      a/c:1234 XXXX XXX
                    </div>
                  </div>
                  <hr/>
                  <div style={{ display: "flex" }}>
                    <div>Balance</div>
                    <div
                      style={{
                        alignSelf: "center",
                        marginLeft: "10px",
                        color: "#008088",
                      }}
                    >
                      40,000.46
                    </div>
                  </div>
                </div>
               <div>
                <div>
                  <button style={{ width: "70px", height: "30px",margin:"15px" }}>
                    view
                  </button>
                  </div>
                
               
                <div>
                  <button style={{ width: "70px", height: "30px",margin:"15px",marginTop:"35px" }}>
                    view
                  </button>
                  </div>
               </div>
              </div>)}
              <div
                className="hdfc_detalis_withbutton"
                style={{ height: "50px", width: "500px" }}
              >
                <div className="hdfc_detalis" style={{ paddingLeft: "10px" }}>
                  <img src={hdfcicon} alt="hdfcicon" />
                  <div
                    style={{
                      alignSelf: "center",
                      margin: "10px",
                      color: "black",
                    }}
                  >
                    Subh Sharma
                  </div>
                  <div style={{ alignSelf: "center", margin: "10px" }}>
                    {" "}
                    a/c:1234 XXXX XXX
                  </div>
                </div>
                <span >
                  <button style={{ width: "70px", height: "30px" }}>
                    view
                  </button>
                </span>
              </div>
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "30px",
                  lineHeight: "45px",
                  color: "#008088",
                }}
              >
                Transactions{" "}
              </div>
              <div style={{ display: "flex" }}>
                {" "}
                <div style={{ marginRight: "20px" }}>
                  <img src={incoming_icon} alt="incoming_icon"></img>
                  <div style={{ fontWeight: "bold" }}>
                    Incoming
                    <hr />
                  </div>
                </div>
                <div>
                  <img src={outgoing_icon} alt="outgoing_icon" />
                  <div style={{ fontWeight: "bold" }}>Outgoing</div>
                </div>
              </div>
              <div className="tech">
                {" "}
                <div>
                  <img src={human_icon_blue} alt="human_icon_blue" />
                </div>
                <div style={{ marginRight: "8px", color: "#008088" }}>
                  Tech ltd.
                </div>
                <div style={{ marginRight: "8px" }}>40,000</div>
                <div style={{ marginRight: "8px", color: "#008088" }}>
                  {" "}
                  a/c:1234 XXXX XXX
                </div>
              </div>
              <div className="tech">
                {" "}
                <div>
                  <img src={human_icon_blue} alt="human_icon_blue" />
                </div>
                <div style={{ marginRight: "8px", color: "#008088" }}>
                  Tech ltd.
                </div>
                <div style={{ marginRight: "8px" }}>40,000</div>
                <div style={{ marginRight: "8px", color: "#008088" }}>
                  {" "}
                  a/c:1234 XXXX XXX
                </div>
              </div>
            </div>
            <div className="accountTable" style={{ marginLeft: "50px" }}>
              <div style={{ marginBottom: "40px" }}>
                <table>
                  <tr>
                    <td>
                      <span className="curre_account">Current Account</span>
                    </td>
                    <td>
                      <img src={graterThan} alt="graterThan" />
                    </td>
                    <td>
                      <img src={graterThan} alt="graterThan" />
                    </td>
                  </tr>
                  <tr>
                    <td> Account Details</td>
                    <td>
                      <img src={graterThan} alt="graterThan" />
                    </td>
                    <td>
                      <img src={graterThan} alt="graterThan" />
                    </td>
                  </tr>
                  <tr>
                    <td> New Account </td>
                    <td>
                      <img src={graterThan} alt="graterThan" />
                    </td>
                    <td>
                      <img src={graterThan} alt="graterThan" />
                    </td>
                  </tr>
                  <tr>
                    <td>Realtime Data Sync</td>
                    <td>
                      <img src={graterThan} alt="graterThan" />
                    </td>
                    <td>
                      <img src={graterThan} alt="graterThan" />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ borderBottom: "1px solid #888888" }}>
                      Manange your Accounts
                    </td>
                    <td>
                      <img src={graterThan} alt="graterThan" />
                    </td>
                    <td>
                      <img src={graterThan} alt="graterThan" />
                    </td>
                  </tr>
                </table>
              </div>
              <div className="notification">
                <span
                  style={{
                    boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.08)",
                    borderRadius: "5px",
                    padding: "20px",
                  }}
                >
                  <span>
                    <img src={bellicon} alt="bellicon"></img>
                  </span>
                  <span>
                    <img src={bord} alt="bord"></img>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage_account;
