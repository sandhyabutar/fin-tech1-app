import Button from "./Button.js";
import Input from "./Input";
import './Login.css';
import googleImg from '../images/google-icons.png'
import facebookImg from '../images/Facebook-logo.svg'






function Login(){

   return(
       <div  className="login">
       <h1 className="loginHeading">Login </h1>
       <form className="LForm" >
         <div>
         <Input labelName="E-mail ID"/><br></br>
         </div> 
         <div>
           <Input labelName="Password"/><br></br>
           </div> 
         
         
             <Button BtnName="Login"/><br></br><br></br>
             <div className="loginwith"><p><span>or login with</span></p></div><br></br>
             <div className="rightlogo">
             <div className="google" ><img src={googleImg}></img><p>Google</p></div>
             <div className="facebook"><img src={facebookImg}></img><p>Facebook</p></div>
             </div><br></br><br></br>
             <div className="register"><p>Don't have an account?</p><a href="">Register</a></div>
         
         
       </form>
     
       </div>
   );

   }

export default Login;