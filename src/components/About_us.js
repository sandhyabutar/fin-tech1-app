import React from "react";
import Navbar from "./Navbar";
import "./About_us.css";
import Abouticon from "../images/About_us.png";
import dots from "../images/dots.png";
import Accounticon from "../images/Account.png";
import Paymenticon from "../images/Payments.png";
import Insuranceicon from "../images/Insurance.png";
import Crediticon from "../images/credit_debit.png";
import credit_cardicon from "../images/credit_debit_card.png";
import savingicon from "../images/saving_icon.png";
import payment_easilyicon from "../images/payment_easily_icon.png";
import staricon from "../images/star.png";
import sendmoneyicon from "../images/send_moneyicon.png";
import check_accountbal_icon from "../images/check_account_balanceicon.png";
import googleImg from "../images/google-icons.png"
import facebookImg from "../images/Facebook-logo.svg";


function About_us() {
  return (
    <div className="conatiner">
      <div
        style={{ height: "240px", background: "#E5F8E8", postion: "relative" }}
      >
        <Navbar border_home="Home" reg="Register" login="Login" />
        <div className="About_us_top">
          <div className="Manage_finance">Manage Your Finances</div>
          <div style={{ margin: "260px 60px 0px 80px" }}>
            <img src={dots} alt="img"></img>
          </div>
          <div className="card">
            <div className="card-body">
              <div style={{ margin: "60px 40px 40px 40px" }}>
                <img
                  src={Abouticon}
                  alt="img"
                  style={{ width: "200px", height: "150px" }}
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "70%",
            left: "48%",
            fontWeight: "bold",
          }}
        >
          About Us
        </div>
      </div>
      <div
        style={{
          position: "relative",
          paddingTop: "220px",
          paddingLeft: "90px",
          paddingRight: "80px",
          textAlign: "center",
        }}
      >
        <p>
          We are a solution to all your banking problems. Get a wide range of
          banking services and manage your accounts personally. Open banking
          helps you move, manage and make more of your money. Opt-in to a world
          of secure apps and services for more clarity and control over your
          finances.
        </p>
      </div>
      <div className="our_service">
        <div>Our Services</div>
        <div className="our_service_details">
          <div className="our_service_details_left">
            <div style={{ display: "flex", paddingBottom: "40px" }}>
              <div>
                <img src={Accounticon} alt="accounticon" />
              </div>
              <div>Account</div>
            </div>
            <div style={{ display: "flex", paddingBottom: "40px" }}>
              <div>
                <img src={Paymenticon} alt="paymenticon"></img>
              </div>
              <div>Payments</div>
            </div>
            <div style={{ display: "flex" }}>
              <img src={Insuranceicon} alt="insuranceicon"></img>
              <div>Insurance</div>
            </div>
          </div>
          <div className="our_service_details_right">
            <div style={{ display: "flex", paddingBottom: "40px" }}>
              <img src={Paymenticon} alt="paymenticon"></img>
              <div> Sales & Purchases</div>
            </div>
            <div style={{ display: "flex", paddingBottom: "40px" }}>
              <img src={Accounticon} alt="accounticon"></img>
              <div> Loan/EMI</div>
            </div>

            <div style={{ display: "flex" }}>
              <img src={Crediticon} alt="crediticon"></img>
              <div> Credit/Debit Cards</div>
            </div>
          </div>
        </div>
      </div>
      <div className="explore">Explore</div>
      <div className="explore_service">
        <div className="get_credit_card">
          <div className="card1">
            <div className="card-body1">
              <div>
                <img src={credit_cardicon} alt="credit_cardicon"></img>
              </div>
            </div>
          </div>
          <div className="para_aftericon">
            Get your own Credit Card in a minute!
            <div className="leran_more">Learn More</div>
          </div>
        </div>
        <div className="get_credit_card">
          <div className="para_beforeicon">
            Open a Savings Account in less than 5 mins!
            <div className="leran_more">Learn More</div>
          </div>
          <div className="card1">
            <div className="card-body">
              <div>
                <img
                  src={savingicon}
                  alt="savingicon"
                  style={{ paddingTop: "60px" }}
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="get_credit_card">
          <div className="card1">
            <div className="card-body1">
              <div>
                <img
                  src={payment_easilyicon}
                  alt="payment_easilyicon"
                  style={{ paddingTop: "20px", paddingLeft: "20px" }}
                ></img>
              </div>
            </div>
          </div>
          <div className="para_aftericon">
            Make Payments easily!
            <div className="leran_more">Learn More</div>
          </div>
        </div>
      </div>
      <div style={{ fontWeight: "bold", textAlign: "center" }}>
        We make your Banking experience{" "}
        <div style={{ color: "#008088" }}>SAFE & EASY</div>
      </div>
      <div className="feedback">
        <div className="staricon_para">
          <img src={staricon} alt="starticon"></img>
          <div className="starpara">Safe Money Transactions</div>
        </div>
        <div className="staricon_para">
          <img src={staricon} alt="staricon"></img>
          <div className="starpara">Easy Baking Experience</div>
        </div>
        <div className="staricon_para">
          <img src={staricon} alt="staricon"></img>
          <div className="starpara">Link Your Business Easily</div>
        </div>
      </div>
      <div
        style={{
          fontWeight: "600px",
          fontSize: "40px",
          color: "#008088",
          textAlign: "center",
        }}
      >
        App Highlights
      </div>
      <div className="sendmoneyicon_para">
      <div className="circle">
        <img src={sendmoneyicon} alt="sendmoneyicon"></img>
        </div>
        <div className="para_aftericon1">Send money easily !</div>
      </div>
      <div className="sendmoneyicon_para" style={{ paddingLeft: "200px" }}>
        <div className="para_beforeicon1">
          Check your Account details instantly!
        </div>
        <div className="circle">
        <img src={check_accountbal_icon} alt="check_accountbal_icon"></img>
        </div>
      </div>
      <div className="service_bottom">
        <div style={{ textAlign: "center" }}>More Services</div>
        <div style={{ display: "flex", paddingLeft: "40px" }}>
          <div style={{ fontWeight: "bold", padding: "60px" }}>
            Get Social
            <div className="google_logo" style={{ background: "#EEF4F0" , justifyContent: "left"}}>
              <img src={googleImg}  alt="googleimg"/>
              <img src={facebookImg} alt="facebookimg"/>
            </div>
          </div>
          <div style={{ paddingLeft: "170px" }}>
            <div className="services_cites">Delhi</div>
            <div className="services_cites">Mumbai</div>
            <div className="services_cites">Chennai</div>
          </div>
          <div style={{ paddingLeft: "200px" }}>
            <div className="services_cites">Kolkata</div>
            <div className="services_cites">Lucknow</div>
            <div className="services_cites">Goa</div>
          </div>
          <div style={{ marginTop: "120px", marginLeft: "200px" }}>
            <div style={{ fontWeight: "bold" }}>Contact</div>
            <div>+91 8756474849</div>
            <div>+91 8756474849</div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_us;
