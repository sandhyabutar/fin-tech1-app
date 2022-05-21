import React from "react";
import Navbar from "./Navbar";
import leftslideicon from "../images/leftslideicon.png";
import { Link } from "react-router-dom";
import Left_selectdetails1 from "./Left_selectdetails1";
import graterThan from "../images/graterThan.png";
import bellicon from "../images/bellicon.png";
import bord from "../images/bord.png";

function Saving_Account() {
  return (
    <div className="conatiner">
      <Navbar home="Home" />
      <div className="account_body">
        <div className="leftslideicon">
          <Link to="/">
            {" "}
            <img src={leftslideicon} alt="leftsliceicon" />
          </Link>
        </div>
        <div className="main_content">
          <div className="Apply_acc">
            <Left_selectdetails1 />
            <div style={{ paddingLeft: "100px" }}>
              <button style={{ width: "70px", height: "30px" }}>
                <Link to="/Select_Account">Go</Link>
              </button>
            </div>
          </div>
          <div className="accountTable">
          <div style={{marginBottom:"40px"}}>
            <table>
              <tr>
                <td>
                  <span className="curre_account">Current Account</span>
                </td>
                <td>
                  <img src={graterThan}  alt="graterThan"/>
                </td>
                <td>
                  <img src={graterThan} alt="graterThan" />
                </td>
              </tr>
              <tr>
                <td> Account Details</td>
                <td>
                  <img src={graterThan}  alt="graterThan" />
                </td>
                <td>
                  <img src={graterThan}  alt="graterThan" />
                </td>
              </tr>
              <tr>
                <td> New Account </td>
                <td>
                  <img src={graterThan}  alt="graterThan" />
                </td>
                <td>
                  <img src={graterThan}  alt="graterThan" />
                </td>
              </tr>
              <tr>
                <td>Realtime Data Sync</td>
                <td>
                  <img src={graterThan}  alt="graterThan" />
                </td>
                <td>
                  <img src={graterThan}  alt="graterThan"/>
                </td>
              </tr>
              <tr>
                <td style={{ borderBottom: "1px solid #888888" }}>
                  Manange your Accounts
                </td>
                <td>
                  <img src={graterThan}  alt="graterThan"/>
                </td>
                <td>
                  <img src={graterThan} alt="graterThan" />
                </td>
              </tr>
            </table>
          </div>
          <div className="notification" >
          <span
            style={{
              boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.08)",
              borderRadius: "5px",
              padding:"20px",
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

  );
}

export default Saving_Account;
