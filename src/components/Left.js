import React from "react";
import leftimg from "../images/Rectangle.png";
import leftimgcircle from "../images/Ellipse 4.png";
import leftimgrect from "../images/Rectangle 7.png";

function Left() {
  return (
    <div className="left">
      <div>
        <h1 className="fintech">FinTech</h1>
      </div>
      <div className="leftimg">
        <img src={leftimg}></img>
      </div>
      <div className="leftpara">
        <p> Get ready for an amazing Banking experience!</p>
      </div>
      <div className="leftbottom_img">
        <div className="leftcircleImg">
          <img src={leftimgcircle}></img>
        </div>
        <div className="leftrectImg">
          <img src={leftimgrect}></img>
        </div>
        <div className="leftcircleImg1">
          <img src={leftimgcircle}></img>
        </div>
        <div className="leftcircleImg2">
          <img src={leftimgcircle}></img>
        </div>
      </div>
    </div>
  );
}

export default Left;
