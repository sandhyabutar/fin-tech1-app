import './Button.css';

function Button(props) {

    return (
     <>
         <button onclick={()=>this.Login()}>{props.BtnName}</button>
     </>
    )
  }
export default Button;
