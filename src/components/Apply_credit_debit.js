import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import leftslideicon from "../images/leftslideicon.png";
import credit_cardicon from "../images/credit_debit_card.png";


function Apply_credit_debit() {
  return (
    <div className="conatiner">
      <Navbar home="Home" div=" " />

      <div className="account_body">
        <div className="leftslideicon">
          <Link to="/Account_details">
            {" "}
            <img src={leftslideicon} alt="leftsliceicon" />
          </Link>
        </div>
        <div style={{}}>
          <div
            className="circle"
            style={{ width: "250px", height: "250px", float: "left" }}
          >
            <img
              src={credit_cardicon}
              alt="credit_cardicon"
              style={{
                width: "300px",
                height: "300px",
                alignContent: "center",
              }}
            />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Apply_credit_debit;
