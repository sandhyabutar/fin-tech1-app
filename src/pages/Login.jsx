import React from "react";
import leftImg from "../images/Rectangle.png";
function Login() {
  return (
    <div className="conatiner">
      <div className="left">
        <div className="heading_left">
          <p className="fintech_text">Fintech</p>
        </div>
        <div className="body_left">
          <div className="left_image">
            <img src={leftImg}></img>
            
          </div>
        </div>
      </div>
      <div className="right">
        <div>
          <form>
            <h1>Login</h1>
            <label>E-mail ID</label>
            <input type="text"></input>
            <label>Password</label>
            <input type="text"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
