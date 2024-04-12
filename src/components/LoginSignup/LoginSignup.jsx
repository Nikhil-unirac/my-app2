import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  const [action, setAction] = useState("Sign up");

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="inputs">
          
          <input type="text" placeholder='Name' />
        </div>
}
        
        <div className="inputs">
          <input type="email" placeholder='Email Id' />
        </div>

        <div className="inputs">
          <input type="password" placeholder='Password' />
        </div>
       {action==="Sign up"?<div></div>: <div className="forgot-password">forgot password? <span>CLICK HERE!</span></div>}
      </div>
     
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={()=>{setAction("Sign up")}}>Sign up</div>
        <div className={action === "SignUP" ? "submit gray" : "submit"}onClick={()=>{setAction("Login")}}>login</div>
      </div>
    </div>
  );
}

export default LoginSignup;
