import React, { useState } from 'react';
import Logoimage from '../../../assets/Uniraclogob.png';
import { Link } from 'react-router-dom';
import Icon1 from '../../../assets/fbicon.png';
import Icon2 from '../../../assets/twittericon.png';
import Icon3 from '../../../assets/linkedin.png';
import Icon4 from '../../../assets/instaicon.png';
import Icon5 from '../../../assets/youtube.png';
import ButtonImage1 from '../../../assets/tools.png';
import ButtonImage2 from '../../../assets/trckloading2.png';
import ButtonImage3 from '../../../assets/booth.png';
import './Signup.css'
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleSignUp = () => {
    console.log('Sign Up clicked');
  };

   

  return (
    <div className="sign-in-container">
      <div className="background-image"></div>
      <div className="sign-in-form">
        <div className='position'>
          <img src={Logoimage} className="logo-image" />
          <h2>Customer Experience Portal</h2>
          <input
            className="input-field1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Name"
          />
          <label></label>
          <input
            className='input-field2'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Company Name"
          />
          <input
            className='input-field3'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Contact Number"
          />
          <button className="custom-button">
            <img src={ButtonImage1} alt="Button 1" className="button-icon" />
             <span className="Custom-button-text">Installer</span>
          </button>
          <Link to="/OrderManagement">
            <button className="custom-button" >
              <img src={ButtonImage2} alt="Button 2" className="button-icon" />
              <span  className="Custom-button-text">Distributor</span>
            </button>
          </Link>
          <button className="custom-button">
            <img src={ButtonImage3} alt="Button 3" className="button-icon" />
            <span  className="Custom-button-text">Others</span>
          </button>
          <input
            className='input-field4'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Contact Number"
          />
          <input
            className='input-field5'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Contact Number"
          />
          <button className='create-button' onClick={handleSignIn}>Let's Create - </button>
          <div className="signup-container">
            <span className="sign-up" onClick={handleSignUp}>
              Skip & Start Exploring
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
