import { propertiesParser } from "config/parser";
import React from "react";
import human_icon_blue from "../images/Human_icon_blue.png";
import Rs_icon from "../images/Rs.png";

function Divwith_humanB(props) {
  return (
    <div
      style={{
        boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.08)",
        padding: "10px",

        display: "flex",
      }}
    >
      <div>
        <img
          src={human_icon_blue}
          alt="human_icon_blue"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
      <div style={{ margin: "10px", marginLeft: "20px" }}>
        <div style={{ marginBottom: "5px" }}>Rakesh Sharma</div>
        <div style={{ fontSize: "10px" }}>11/03/22</div>
      </div>
      <div style={{ margin: "10px" }}>
        <div>
          <img
            src={Rs_icon}
            alt="Rs_icon"
            style={{ width: "12px", height: "12px" }}
          />
          <span>40,000</span>
        </div>
       {props.div}
      </div>
    </div>
  );
}

export default Divwith_humanB;
