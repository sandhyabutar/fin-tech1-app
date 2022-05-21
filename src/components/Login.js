import Button from "./Button.js";
import './Login.css';
import { Link} from 'react-router-dom'
import googleImg from '../images/google-icons.png'
import facebookImg from '../images/Facebook-logo.svg'


 
function Login(){

   return(
    <form>
    <div className="right_heading">
      <h1>Login</h1>
    </div>
    <div className="right-body-content">
    <div className="rightlabel_inp">
      <div className="rightlabel">
        <label> E-mail ID</label>
      </div>
      <div  className="right_input">
        <input type="text"/>
      </div>
    </div>
    <div className="rightlabel_inp">
      <div className="rightlabel">
        <label >Password</label>
      </div>
      <div  className="right_input">
        <input type="password" />
      </div>
    </div>
    <div className="login_button">
      <Button  btnName="Login" linkAddress="/About_us"/>
     
    </div>

    <div className="loginwith">
      <p>
        <span>or login with</span>
      </p>
    </div>
    <div className="rightImg">
      <div className="google_logo">
        <img src={googleImg}  alt="googleimg"/>
        <p>Google</p>
      </div>
      <div className="facebook_logo">
        <img src={facebookImg}  alt="facebookimg"/>
        <p>Facebook</p>
      </div>
    </div>
    <div className="account_register">
      <p>Don't have an account?</p>
      <Link to="/register" >Register</Link>
    </div>
    </div>
  </form>
    
   );

   }

export default Login;