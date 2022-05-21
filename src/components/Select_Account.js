
import React from "react";
import Navbar from "./Navbar";
import "./Select_Account.css";
import Left_selectdetails from "./Left_selectdetails";
import leftslideicon from "../images/leftslideicon.png";
import hdfcicon from "../images/HDFCicon.png";
import icicilogo from "../images/icici_Icon.png";
import Axislogo from "../images/Axis_Bank-Logo.png";
import { Link} from 'react-router-dom';
import select_2dots from "../images/1select_2dots.png";
import circle from "../images/circle.png";


function Select_Account() {
  return (
    <div classNAme="container">
      <Navbar home="Home" />
      <div className="account_body">
        <div className="leftslideicon">
          <Link to="/Account"><img src={leftslideicon} alt="leftslideicon"/></Link>
        </div>
        <div className="main_content">
          <div className="Apply_acc">
            <Left_selectdetails  selectdots={select_2dots} />
          </div>
          <div className="right_select_account">
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
            <div>
              <p>Select a preferred Bank Account.!</p>
            </div>
            <div className="div_with_polygon">
            <div style={{float:"right"}}>
              <div class="triangle-up"></div>
              <div class="triangle-down"></div>
              </div>
            </div>
            <div className="select_preferd_bank">
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
            <div style={{textAlign:"center"}}><button style={{ width: "70px", height: "30px",}}> <Link to="/Verify_bussiness_details" >Next</Link></button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Select_Account;
