import React from 'react'

function Divbox_withShaddow(props) {
  return (
    <div style={{  boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.08)",
        height: "40px",
        width: "245px",
        borderRadius: "1px",
        margin:"10px",
       
        color:"#BABABA",
        textAlign:"center"
        }}>{props.divdata}
      
    </div>
  )
}

export default Divbox_withShaddow
