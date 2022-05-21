import React from "react";


function Left_selectdetails(props) {
  return (
    <>
      <div className="heading_Apply_acc">
        <span className="apply_for" >Apply for</span>
        <span className="curre_account">Current Account</span>
        <span className="apply_for"> in 1 min!</span>
      </div>
      <div className="details-veri">
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "30px" }}>
            <img src={props.selectdots}></img>
          </div>
          <div>
            <div style={{ marginBottom: "43px" }}> Select a bank</div>
            <div style={{ marginBottom: "43px" }}> Verify personal details</div>
            <div style={{ marginBottom: "43px" }}> Verify documents</div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Left_selectdetails;
