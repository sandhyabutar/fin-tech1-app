import React from "react";
import Navbar from "./Navbar";
import leftslideicon from "../images/leftslideicon.png";
import fileUploadicon from "../images/file_upload_icon.png";
import Left_selectdetails from "./Left_selectdetails";
import Divbox_withShaddow from "./Divbox_withShaddow";
import "./Verify_documents.css";
import select_2dots from "../images/1select_2dots.png";
import { Link } from "react-router-dom";

function Verify_documents() {
  return (
    <div>
      <div>
        <Navbar home="Home" />
      </div>
      <div className="account_body">
        <div className="leftslideicon">
          <Link to="/Verify_bussiness_details">
            <img src={leftslideicon} />
          </Link>
        </div>
        <div className="main_content">
          <div className="Apply_acc">
            <Left_selectdetails selectdots={select_2dots} />
          </div>
          <div className="right_verify_documents">
            <div
              style={{
                fontWeight: "bold",
                color: "#008088",
                textAlign: "center",
                paddingBottom: "20px",
              }}
            >
              {" "}
              Verify Documents
            </div>
            <div>
              <p sytle={{ textAlign: "center" }}>
                {" "}
                Upload your documents for verification.
              </p>
            </div>
            <div
              className="document_typewith_tringle"
              style={{ display: "flex", color: "#BABABA" }}
            >
              <div style={{ paddingLeft: "20px", marginRight: "80px" }}>
                Document Type
              </div>
              <div>
                <div class="triangle-up"></div>
                <div class="triangle-down"></div>
              </div>
            </div>
            <div>
              <div>
                <Divbox_withShaddow
                  divdata="Document Number"
                 
                />
              </div>
            </div>
            <div></div>
            <div className="document_typewith_tringle">
              <div style={{ paddingLeft: "20px", marginRight: "50px", }}>
                Upload Document
              </div>
              <div >
                <img src={fileUploadicon} alt="fileUploadicon" ></img>
              </div>
            </div>
            <div
              style={{
                margin: "auto",
                width: "10%",
                marginTop: "80px",
              }}
            >
              <button style={{ width: "70px", height: "30px" }}>
                <Link to="/Congratulation">Next</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verify_documents;
