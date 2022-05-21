import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import leftslideicon from "../images/leftslideicon.png";
import Divwith_humanB from "./Divwith_humanB";
import Rs_icon from "../images/Rs.png";

function Sales_purchase() {
  return (
    <div className="conatiner">
      <Navbar home="Home" />
      <div className="account_body">
        <div className="leftslideicon">
          <Link to="">
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
            <div>
              <div style={{ margin: "5px",marginBottom:"20px" }}>
                <button
                  style={{
                    width: "70px",
                    height: "30px",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  <Link to="">create</Link>
                </button>
                <button
                  style={{
                    width: "130px",
                    height: "30px",
                    textAlign: "center",
                    float: "right",
                  }}
                >
                  {" "}
                  <Link to="">Link Actions</Link>
                  <div
                    class="triangle-down"
                    style={{
                      borderTop: "10px solid white",
                      float: "right",
                      marginTop: "5px",
                    }}
                  ></div>
                  <div
                    style={{
                      boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.08)",
                      width: "130px",
                      height: "80px",
                      marginTop:"0px",
                     padding:"10px",
                    
                    
                    }}
                  >
                  
                    <div>Generate QR Code</div>
                    <div>Payment Link</div>
                  </div>
                </button>
              </div>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.08)",
                    width: "400px",
                    height: "400px",
                    borderRadius: "10px",
                    marginRight: "70px",
                  }}
                >
                  <Divwith_humanB
                    div={
                      <div
                        style={{
                          color: "#A05A08",
                          fontSize: "10px",
                          margin: "5px",
                          marginLeft: "50px",
                        }}
                      >
                        Payment Due
                      </div>
                    }
                  />
                  <Divwith_humanB
                    div={
                      <div
                        style={{
                          color: "#A00808",
                          fontSize: "10px",
                          margin: "5px",
                          marginLeft: "60px",
                        }}
                      >
                        Cancelled
                      </div>
                    }
                  />
                  <Divwith_humanB
                    div={
                      <div
                        style={{
                          color: "#19C03E",
                          fontSize: "10px",
                          margin: "5px",
                          marginLeft: "70px",
                        }}
                      >
                        Paid
                      </div>
                    }
                  />
                  <Divwith_humanB
                    div={
                      <div
                        style={{
                          color: "#19C03E",
                          fontSize: "10px",
                          margin: "5px",
                          marginLeft: "70px",
                        }}
                      >
                        Paid
                      </div>
                    }
                  />
                </div>
                <div
                  style={{
                    boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.08)",
                    width: "570px",
                    height: "400px",
                    borderRadius: "10px",
                  }}
                >
                  <div style={{ padding: "40px" }}>
                    <div
                      style={{
                        fontSize: "20px",
                        color: "#008088",
                        textAlign: "center",
                      }}
                    >
                      Collection Details
                    </div>
                    <div style={{ display: "flex", marginTop: "35px" }}>
                      <div style={{ display: "flex", marginRight: "100px" }}>
                        <div>To</div>
                        <div
                          style={{
                            color: "#008088",
                            marginLeft: "50px",
                          }}
                        >
                          Rakesh Sharma
                        </div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div>Reference ID</div>
                        <div
                          style={{
                            color: "#008088",
                            marginLeft: "50px",
                          }}
                        >
                          56473gh6
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "flex", marginTop: "35px" }}>
                      <div style={{ display: "flex", marginRight: "100px" }}>
                        <div>Date</div>
                        <div
                          style={{
                            color: "#008088",
                            marginLeft: "80px",
                          }}
                        >
                          24/03/22
                        </div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div>Payment Link</div>
                        <div
                          style={{
                            color: "#008088",
                            marginLeft: "50px",
                          }}
                        >
                          Copy
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "flex", marginTop: "35px" }}>
                      <div style={{ display: "flex", marginRight: "100px" }}>
                        <div>Expiry Date</div>
                        <div
                          style={{
                            color: "#008088",
                            marginLeft: "40px",
                          }}
                        >
                          24/04/22
                        </div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div>Purpose</div>
                        <div
                          style={{
                            color: "#008088",
                            marginLeft: "50px",
                          }}
                        >
                          N/A
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        color: "#19C03E",
                        fontSize: "10px",
                        margin: "5px",
                        marginTop: "30px",
                      }}
                    >
                      Paid
                    </div>
                    <div>
                      <button
                        style={{
                          width: "80px",
                          height: "30px",
                          textAlign: "center",
                          float: "right",
                        }}
                      >
                        {" "}
                        <Link to="">Pay</Link>
                      </button>
                    </div>
                  </div>
                  <hr style={{}} />
                  <div style={{ display: "flex" }}>
                    <div style={{ display: "flex", marginRight: "190px" }}>
                      <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                        Total Amount
                      </div>
                      <div>
                        <img
                          src={Rs_icon}
                          alt="Rs_icon"
                          style={{ width: "12px", height: "12px" }}
                        />
                        <span>40,000.00</span>
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                        Due
                      </div>
                      <div>
                        <img
                          src={Rs_icon}
                          alt="Rs_icon"
                          style={{ width: "12px", height: "12px" }}
                        />
                        <span>0.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales_purchase;
