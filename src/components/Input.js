import './Input.css'

function Input (props){
    return (<div>
        <label className="inputlabel">{props.labelName } </label><br></br>
         <input type="text"></input>
      
            </div>
    )
  }

export default Input;