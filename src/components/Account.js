import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Account.css";
import Navbar from "./Navbar";
import Left_selectdetails from "./Left_selectdetails";
import leftslideicon from "../images/leftslideicon.png";
import bellicon from "../images/bellicon.png";
import bord from "../images/bord.png";
import frame from "../images/Frame.png";
import location from "../images/Location.png";
import hdfcicon from "../images/HDFCicon.png";
import grouphuman from "../images/groupH.png";
import graterThan from "../images/graterThan.png";
import { Link } from "react-router-dom";
import select_2dots from "../images/1select_2dots.png";

function Account() {
  return (
    <div className="conatiner">
      <Navbar home="Home" />
      <div className="account_body">
        <div className="leftslideicon">
          <Link to="/About_us">
            <img src={leftslideicon} alt="leftslideicon" />
          </Link>
        </div>
        <div className="main_content">
          <div className="Apply_acc">
            <Left_selectdetails selectdots={select_2dots} />
            <div style={{ paddingLeft: "100px" }}>
              <button style={{ width: "70px", height: "30px" }}>
                <Link to="/Select_Account">Go</Link>
              </button>
            </div>
          </div>

          <div className="accountTable">
            <div style={{ marginBottom: "40px" }}>
              <table>
                <tr>
                  <td>
                    <span className="curre_account">Current Account</span>
                  </td>
                  <td>
                    <img src={graterThan} alt="graterThan" />

                    <img src={graterThan} alt="graterThan" />
                  </td>
                </tr>
                <tr>
                  <td> Account Details</td>
                  <td>
                    <img src={graterThan} alt="graterThan" />

                    <img src={graterThan} alt="graterThan" />
                  </td>
                </tr>
                <tr>
                  <td> New Account </td>
                  <td>
                    <img src={graterThan} alt="graterThan" />

                    <img src={graterThan} alt="graterThan" />
                  </td>
                </tr>
                <tr>
                  <td>Realtime Data Sync</td>
                  <td>
                    <img src={graterThan} alt="graterThan" />

                    <img src={graterThan} alt="graterThan" />
                  </td>
                </tr>
                <tr>
                  <td style={{ borderBottom: "1px solid #888888" }}>
                    Manange your Accounts
                  </td>
                  <td>
                    <img src={graterThan} alt="graterThan" />

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
                  <img src={bellicon} alt="bellicon" />
                </span>
                <span>
                  <img src={bord} alt="bord" />
                </span>
              </span>
            </div>
          </div>
        </div>

        <div style={{ fontWeight: "bold" }}>Tips</div>

        <div className="location_field">
          <div className="frame_icon">
            <img src={frame} alt="frame" />
            <p>
              If your business isnt registered yet, the current account will be
              in your name.
            </p>
          </div>
          <div className="location_icon">
            <img src={location} alt="location" />
            <p>
              We will need an address proof for the pincode provided by you.
            </p>
          </div>
          <div className="frame_icon">
            <img src={frame} alt="frame" />
            <p>
              Submit your GST details to fasten your account verification &
              opening process.
            </p>
          </div>
        </div>
        <div className="acc_bottom">
          <div>
            <div style={{ fontWeight: "bold", paddingBottom: "20px" }}>
              Your Current Account Details
            </div>
            <div className="left_bottom">
              <div className="hdfc_detalis_withbutton">
                <div className="hdfc_detalis">
                  <img src={hdfcicon} alt="hdfcicon" />
                  <div style={{ alignSelf: "center", margin: "10px" }}>
                    Anuj Sharma
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
            </div>
            <div className="hdfc_detalis_withbutton">
              <div className="hdfc_detalis">
                <img src={hdfcicon} alt="hdfcicon" />
                <div style={{ alignSelf: "center", margin: "10px" }}>
                  Aishani Ghosh
                </div>
                <div style={{ alignSelf: "center", margin: "10px" }}>
                  {" "}
                  a/c:1234 XXXX XXX
                </div>
              </div>
              <span classNAme="hdfc_details_button">
                <button style={{ width: "70px", height: "30px" }}>view</button>
              </span>
            </div>
          </div>
          <div className="right_bottom">
            <div style={{ fontWeight: "bold", paddingBottom: "20px" }}>
              Now opening a Current Account is easier!
            </div>
            <p>
              Now opening a Current Account is easier!Now opening a Current
              Account is easier!
            </p>
            <p>Now opening a Current Account is easier!</p>
            <p>
              {" "}
              Now opening a Current Account is easier! Now opening a Current
              Account is easier!
            </p>
            <div className="grouphuman_img">
              <img src={grouphuman} alt="grouphuman" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
