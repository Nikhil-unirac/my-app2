
import React, { useState } from 'react';
import './SignIn.css';
import Logoimage from '../../../assets/Uniraclogob.png';
import GoogleLogo from '../../../assets/googleicon.png';
import Icon1 from '../../../assets/fbicon.png';
import Icon2 from '../../../assets/twittericon.png';
import Icon3 from '../../../assets/linkedin.png';
import Icon4 from '../../../assets/instaicon.png';
import Icon5 from '../../../assets/youtube.png';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
   
    console.log('Email:', email);
    console.log('Password:', password);
   
  };
  const handleForgotPassword = () => {
    // Add logic to handle the "Forgot Password" action
    console.log('Forgot Password clicked');
    // Add any other logic you need for handling the forgot password action
  };
  const handleSignUp = () => {
    // Add logic to handle the "Sign Up" action
    console.log('Sign Up clicked');
    // Add any other logic you need for handling the sign-up action
  };

  return (
    <div className="sign-in-container">
        <div className="background-image"></div>
      <div className="sign-in-form">
        <div className='position'>
        <img src={Logoimage}  className="logo-image" />
        <h2>Customer Experience Portal</h2>
     <button className='sign-in-google'>
     <img src={GoogleLogo} alt="Google Logo" className="google-logo" />
     Sign-In With Google
     </button>
     <h3>Or Login with email</h3>
        <input
        className="input-field1"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email ID"
        />
        <label></label>
        <input
        className='input-field2'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your Password" 
        />
        <label className="container">
  <input type="checkbox" checked="checked" />
  <span className="checkmark"></span>
  Keep Me Logged In
  <span className="forgot-password" onClick={handleForgotPassword}>
    Forgot Password?
  </span>
</label>
       
       <button className='create-button' onClick={handleSignIn}>Let's Create - </button>
       <div className="signup-container">
  <h4>Don't have an account yet ?</h4>
  <span className="sign-up" onClick={handleSignUp}>
    Sign Up
  </span>
</div>
<div className="icon-container">
            <img src={Icon1} alt="Icon 1" className="icon" />
            <img src={Icon2} alt="Icon 2" className="icon" />
            <img src={Icon3} alt="Icon 3" className="icon" />
            <img src={Icon4} alt="Icon 4" className="icon" />
            <img src={Icon5} alt="Icon 5" className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
