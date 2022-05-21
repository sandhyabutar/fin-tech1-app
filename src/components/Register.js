import React from "react";
import Left from "./Left.js";
import Button from "./Button.js";


function Register() {
  return (
    
      <div className="container">
        <Left />
        <div className="right">
        <div className="right_body">
        <form>
    <div className="right_heading">
      <h1>Register</h1>
    </div>
    <div className="rightlabel_inp" >
      <div className="rightlabel">
        <label >Name</label>
      </div>
      <div className="right_input">
        <input type="text"/>
      </div>
    </div>
    <div className="rightlabel_inp" >
      <div className="rightlabel">
        <label > E-mail ID</label>
      </div>
      <div className="right_input">
        <input type="text"/>
      </div>
    </div>
    <div className="rightlabel_inp" >
      <div className="rightlabel">
        <label >Password</label>
      </div>
      <div className="right_input">
        <input type="password" />
      </div>
    </div>
    <div className="rightlabel_inp" style={{marginBottom: "40px"}} > 
      <div className="rightlabel">
        <label > Confirm Password</label>
      </div>
      <div className="right_input">
        <input type="password"/>
      </div>
    </div>
    <div className="login_button" >
      <Button btnName="Register" linkAddress="/About_us"/>
    </div>
    </form>
        </div>
      </div>
      </div>
  
  );
}

export default Register;
