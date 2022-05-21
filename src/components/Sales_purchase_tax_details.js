import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import leftslideicon from "../images/leftslideicon.png";
import Right_icon from "../images/Right_icon.png";
import TDS_icon from "../images/TDS_icon.png";


function Sales_purchase_details() {
  return (
    <div className="conatiner">
      <Navbar home="Home" />
      <div className="account_body">
        <div className="leftslideicon">
          <Link to="/Sales_purchase">
            {" "}
            <img src={leftslideicon} alt="leftsliceicon" />
          </Link>
          <div style={{ marginLeft: "40px" }}>
            <div
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Sales & Purchases
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  background: "#E5F8E8",
                  border: "1px solid #008088",
                  borderRadius: "10px",
                  width: "130px",
                  height: "30px",
                  textAlign: "center",
                  marginRight: "40px",
                }}
              >
                Customer
              </div>
              <div
                style={{
                  border: "1px solid #008088",
                  borderRadius: "10px",
                  width: "130px",
                  height: "30px",
                  textAlign: "center",
                }}
              >
                Vendor
              </div>
            </div>
          </div>
          <div
            style={{ display: "flex", marginTop: "80px", marginLeft: "40px" }}
          >
            <div
              style={{
                boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.08)",
                width: "30px",
                height: "30px",
              }}
            >
              <img src={Right_icon} />
            </div>
            <span style={{ marginRight: "60px" }}>Single Contact</span>
            <div
              style={{
                boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.08)",
                width: "30px",
                height: "30px",
              }}
            ></div>
            <span>Bulk Contact</span>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.08)",
            marginLeft: "37px",
            padding: "20px",
           
          }}
        >
          <div style={{ color: "#008088" }}>Personal Details</div>
          <div style={{display:"flex"}}>
            <div
              style={{
                boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.08)",
                width: "250px",
                height: "40px",
                color: "#BABABA",
                textAlign:"center",
                margin:"30px",
                marginBottom:"90px"
              }}
            >
              PAN
            </div>
            <div
              style={{
              
                width: "250px",
                height: "40px",
                
                textAlign:"center",
                margin:"30px",
              }}
            >
              <span>TDS</span><img src={TDS_icon} alt="TDS_icon"/><span>Payments</span>
            </div>
            <div
              style={{
                boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.08)",
                width: "250px",
                height: "40px",
                color: "#BABABA",
                textAlign:"center",
                margin:"30px",
              }}
            >
              TDS(%)
            </div>
          </div>
          <div style={{}}>
         
            <div style={{ color: "#008088" }}>Notes</div>
            <div style={{boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.08)",
                width: "880px",
                height: "180px",
                margin:"20px"
                }}></div>
            
            <button
                    style={{
                      width: "70px",
                      height: "30px",
                      marginLeft: "420px",
                      marginTop:"90px",
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    <Link to="/Account_details">Next</Link>
                  </button>
            </div>
            </div>
        </div>
      </div>
  
  );
}

export default Sales_purchase_details;
