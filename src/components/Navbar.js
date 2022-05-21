import React from "react";
import "./Account.css";
import humanicon from "../images/Humanicon.png";
import { Link } from "react-router-dom";
import Notification_div from "./Notification_div";
import hdfcicon from "../images/HDFCicon.png";
import graterThan from "../images/graterThan.png";
import icicilogo from "../images/icici_Icon.png";
import Axislogo from "../images/Axis_Bank-Logo.png";

function Navbar(props) {
  return (
    <>
      <nav
        className="navbar navbar-inverse"
        style={{ background: "#E5F8E8", border: "transparent", height: "60px" }}
      >
        <div className="container-fluid">
          <div className="navbar-header">
            <p className="fintech_text" style={{ color: "#19C03E" }}>
              Fintech
            </p>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <a href="#" style={{ color: "black" }}>
                Service
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "black" }}>
                Support
              </a>
            </li>
            {props?.border_home && (
              <li>
                <a
                  href="#"
                  style={{
                    color: "black",
                    border: "2px solid #008088",
                    borderRadius: "8px",
                    padding: "3px",
                    marginTop: "10px",
                  }}
                >
                  {props.border_home}
                </a>
              </li>
            )}
            {props?.home && (
              <li>
                <a
                  href="#"
                  style={{
                    color: "black",
                  }}
                >
                  {props.home}
                </a>
              </li>
            )}
          </ul>
          <div style={{ float: "right", display: "flex" }}>
            {props?.login && (
              <div
                style={{
                  padding: "5px",
                  background: "#008088",
                  borderRadius: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                  margin: "10px",
                }}
              >
                <Link to="/" style={{ color: "white" }}>
                  {props.login}
                </Link>
              </div>
            )}
            {props?.reg && (
              <div
                style={{
                  border: " 2px solid #008088",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  margin: "auto",
                  padding: "3px",
                }}
              >
                <Link to="/Register" style={{ color: "#008088" }}>
                  {props.reg}
                </Link>
              </div>
            )}
            <div>
              <img src={humanicon} alt="humanicon" />
            </div>
          </div>
        </div>
        {props?.div && (
          <div
            style={{
              float: "right",
              background: "#008088",
              width: "60px",
              height: "555px",
            }}
          >
            {props.div}
            <div
              style={{
                float: "right",

                marginRight: "0px",

                padding: "20px",
                marginTop: "20px",
              }}
            >
              <div className="heading_Apply_acc">
                <span className="apply_for">Apply for</span>
                <span className="curre_account">Credit/Debit</span>
                <span className="apply_for"> in 1 min!</span>
              </div>
              <div
                className="right_select_account"
                style={{
                  width: "600px",
                  float: "right",
                  marginRight: "0px",
                  zIndex: "100",
                  padding: "20px",
                  marginTop: "20px",
                }}
              >
                <div style={{ textAlign: "center" }}> Select a bank</div>
                <div
                  className="div_with_polygon"
                  style={{
                    background: "#F2FBF4",
                    width: "300px",
                    height: "30px",
                    margin: "auto",
                    marginBottom: "10px",
                  }}
                >
                  <div style={{ float: "right" }}>
                    <div class="triangle-up"></div>
                    <div class="triangle-down"></div>
                  </div>
                </div>
                <div style={{ textAlign: "center" }}> Card Type</div>
                <div
                  className="div_with_polygon"
                  style={{
                    background: "#F2FBF4",
                    width: "100px",
                    margin: "auto",
                    marginBottom: "10px",
                  }}
                >
                  <div style={{ float: "right" }}>
                    <div class="triangle-up"></div>
                    <div class="triangle-down"></div>
                  </div>
                </div>
                <div> View Plans</div>
                <div>
                  {" "}
                  <div>
                    <img src={hdfcicon} alt="hdfcicon" />
                    <span>HDFC Credit Bank</span>
                    <span style={{ color: "#008088" }}>
                      Choose your favourite plan
                    </span>
                    <span style={{ color: "#008088" }}>Apply</span>
                    <img src={graterThan} alt="graterThan" />

                    <img src={graterThan} alt="graterThan" />
                  </div>
                  <hr style={{ borderTop: "1px dashed black" }} />
                  <div>
                    <img
                      src={icicilogo}
                      alt="icicilogo"
                      style={{ Width: "80px", height: "60px" }}
                    />
                    <span>ICICI Bank Credit Cards</span>
                    <span style={{ color: "#008088" }}>
                      Choose your favourite plan
                    </span>
                    <span style={{ color: "#008088" }}>Apply</span>
                    <img src={graterThan} alt="graterThan" />

                    <img src={graterThan} alt="graterThan" />
                  </div>
                  <hr style={{ borderTop: "1px dashed black" }} />
                  <div>
                    <img
                      src={Axislogo}
                      alt="Axislogo"
                      style={{ Width: "50px", height: "35px" }}
                    />
                    <span>Axis Bank Credit Cards</span>
                    <span style={{ color: "#008088" }}>
                      Choose your favourite plan
                    </span>
                    <span style={{ color: "#008088" }}>Apply</span>
                    <img src={graterThan} alt="graterThan" />

                    <img src={graterThan} alt="graterThan" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {props?.notification && (
          <div
            style={{
              float: "right",
              background: "white",

              height: "555px",
            }}
          >
            <div style={{ margin: "40px", fontWeight: "400" }}>
              <div>{props.notification}</div>
              <div style={{ color: "#008088", float: "right" }}>close</div>
            </div>
            <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
              <Notification_div />
              <Notification_div />
              <Notification_div />
              <Notification_div />
              <Notification_div />
              <Notification_div />
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
