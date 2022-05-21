import './Button.css';
import { Link } from "react-router-dom";

function Button(props) {

    return (
     <>
         <button><Link to={props.linkAddress} >{props.btnName}</Link></button>
     </>
    )
  }
export default Button;
