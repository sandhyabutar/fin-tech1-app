import React from 'react'
import bellicon from "../images/bellicon.png";

function Notification_div(props) {
  return (
    <div style={{  boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.08)",
    height: "65px",
    width: "400px",
    borderRadius: "1px",
    margin:"10px",
    padding:"20px",
    color:"#888888"}}>
  <div style={{margin:"auto"}}><img src={bellicon} alt="bellicon" style={{width:"20px",height:"20px", }}/></div>
  
</div>
  )
}

export default Notification_div