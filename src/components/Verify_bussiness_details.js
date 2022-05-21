import React from "react";
import Navbar from "./Navbar";
import Divbox_withShaddow from "./Divbox_withShaddow";
import Left_selectdetails from "./Left_selectdetails";
import "./Verify_bussiness_details.css";
import leftslideicon from "../images/leftslideicon.png";
import select_2dots from "../images/1select_2dots.png";
import { Link} from 'react-router-dom';

function Verify_bussiness_details() {
  return (
    <div>
      <Navbar  home="Home"/>
      <div className="account_body">
        <div className="leftslideicon">
        <Link to="/Select_Account"><img src={leftslideicon} /></Link>
        </div>
        <div className="main_content">
          <div className="Apply_acc">
            <Left_selectdetails selectdots={select_2dots}/>
          </div>
          <div className="right_veri_bussiness_de">
            <div
              className="right_select_account"
              style={{ width: "550px", height: "40px", padding: "30px" }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  color: "#008088",
                  textAlign: "center",
                  paddingBottom: "20px",
                }}
              >
                Verify Business Details
              </div>
              <span>Enter your Personal details.</span>
              <div className="E_personal_details">
                <div className="E_personal_details1">
                  <Divbox_withShaddow divdata="Name" />
                </div>
                <div className="E_personal_details2">
                  <Divbox_withShaddow divdata="Email-Id" />
                </div>
              </div>
              <div
                style={{
                  margin: "auto",
                  width: "60%",
                }}
              >
                {" "}
                <Divbox_withShaddow divdata="Mobile Number" />{" "}
              </div>
              <span>Enter your Business details.</span>
              <div className="E_personal_details">
                <div className="E_personal_details1">
                  <Divbox_withShaddow divdata="Business  Name" />
                </div>
                <div className="E_personal_details2">
                  <Divbox_withShaddow divdata="GST Number" />
                </div>
              </div>
              <div className="E_personal_details">
                <div className="E_personal_details1">
                  <Divbox_withShaddow divdata="Address" />
                </div>
                <div className="E_personal_details2">
                  <Divbox_withShaddow divdata="State" />
                </div>
              </div>
              <div className="E_personal_details">
                <div className="E_personal_details1">
                  <Divbox_withShaddow divdata="City" />
                </div>
                <div className="E_personal_details2">
                  <Divbox_withShaddow divdata="Pincode" />
                </div>
              </div>
              <div
                style={{
                  margin: "auto",
                  width: "10%",
                  marginTop: "10px",
                }}
              >
                <button style={{ width: "70px", height: "30px" }}><Link to="/Verify_documents" >Next</Link></button>
          
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verify_bussiness_details;
