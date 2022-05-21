import React from "react";
import select_3dots from "../images/1select_3dots.png";

function Left_selectdetails1() {
  return (
    <>
      <div className="heading_Apply_acc">
        <span className="apply_for" >Apply for</span>
        <span className="curre_account">Saving Account</span>
        <span className="apply_for"> in 1 min!</span>
      </div>
      <div className="details-veri">
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "30px" }}>
            <img src={select_3dots}></img>
          </div>
          <div>
            <div style={{ marginBottom: "43px" }}> Select a bank</div>
            <div style={{ marginBottom: "43px" }}> Verify personal details</div>
            <div style={{ marginBottom: "43px" }}> Verify documents</div>
            <div style={{ marginBottom: "43px" }}> Complete payment</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Left_selectdetails1;
