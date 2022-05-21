import React from "react";
import Navbar from "./Navbar";
import leftslideicon from "../images/leftslideicon.png";
import Left_selectdetails from "./Left_selectdetails";
import hdfcicon from "../images/HDFCicon.png";
import right_tic from "../images/right_tic.png";
import select_3dots from "../images/3select_dots.png";
import { Link} from 'react-router-dom';

function Congratulation() {
  return (
    <div className="conatiner">
      <Navbar home="Home" />
      <div className="account_body">
        <div className="leftslideicon">
         <Link to="/Verify_documents"><img src={leftslideicon} /></Link> 
        </div>
      </div>
      <div className="main_content">
        <div className="Apply_acc">
          <Left_selectdetails  selectdots={select_3dots}/>
        </div>
        <div className="right_verify_documents" >
          <div
            style={{
              fontWeight: "bold",
              color: "#008088",
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            {" "}
            Congratulations!
          </div>
          <div>
            <p>You have successfully applied for a Current Bank</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p>account in HDFC bank.</p>
          </div>
          <div style={{ textAlign: "center" }}><img src={hdfcicon}></img></div>
          <div style={{ textAlign: "center",marginTop:"40px",marginBottom:"50px" }}><img src={right_tic}></img></div>
        </div>
      </div>
    </div>
  );
}

export default Congratulation;
