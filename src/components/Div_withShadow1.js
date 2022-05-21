import React from 'react'

function Div_withShadow1(props) {
  return (
    <div style={{  boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.08)",
    height: "40px",
    width: "180px",
    borderRadius: "10px",
    margin:"10px",
    textAlign:"center",
    color:"#888888"}}>{props.divdata}
 {props?.triangle &&(<div style={{ float: "right" }}>
                <div class="triangle-up">{props.triangle}</div>
                <div class="triangle-down"></div>
              </div>)}
            
</div>
  )
}

export default Div_withShadow1
