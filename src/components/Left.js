import React from 'react'
import leftImg from "../images/Rectangle.png";
import leftimgcircle from "../images/Ellipse 4.png";
import leftimgrect from "../images/Rectangle 7.png";

function Left() {
  return (
    <div className="left">
    <div className="heading_left">
      <p className="fintech_text">Fintech</p>
    </div>
    <div className="body_left">
      <div className="left_image">
        <div className="card">
          <div className="card-body">
            <img src={leftImg} />
          </div>
        </div>
      </div>
    </div>

    <div className="left_text">
      <p>Get ready for an amazing Banking experience!</p>
    </div>
    <div className="left_dots">
      <div className="leftcircleImg">
        <img src={leftimgcircle} />
      </div>
      <div className="leftrectImg">
        <img src={leftimgrect} />
      </div>
      <div className="leftcircleImg1">
        <img src={leftimgcircle} />
      </div>
      <div className="leftcircleImg2">
        <img src={leftimgcircle} />
      </div>
    </div>
  </div>
  );
}

export default Left;