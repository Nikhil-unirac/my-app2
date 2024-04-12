// Sidebar.js
import React from 'react';
import './sideBarCD.css';

const Sidebar = ({ onClose }) => {

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="sidebar">
      <div className="page2">
        <h2 className="heading2">ORDER SUMMARY</h2>
        <form>
          <div className="input-container">
            <div className="column">
              <div className="input-field">
                <div className="underline"></div>
                <label className="label" htmlFor="field1">Full Name</label>
                <input type="text" id="field1" />
              </div>
              <div className="input-field">
                <div className="underline"></div>
                <label className="label" htmlFor="field3">Contact Number</label>
                <input type="text" id="field3" />
              </div>
              <div className="input-field">
                <div className="underline"></div>
                <label className="label" htmlFor="field5">Shipping Address</label>
                <input type="text" id="field5" />
              </div>
              <div className="input-field">
                <div className="underline"></div>
                <label className="label" htmlFor="field7">Shipping area zip</label>
                <input type="text" id="field7" />
              </div>
            </div>
            <div className="column">
              <div className="input-field">
                <div className="underline"></div>
                <label className="label" htmlFor="field2">Company Name</label>
                <input type="text" id="field2" />
              </div>
              <div className="input-field">
  
                <div className="underline"></div>
                <label className="label" htmlFor="field4">Email Address</label>
                <input type="text" id="field4" />
              </div>
          
              <div className="input-field">
              
                <div className="underline"></div>
                <label className="label" htmlFor="field6">State/Country</label>
                <input type="text" id="field6" />
              </div>
            </div>
          </div>
        
        
          
          <h3 className="heading3">Shipping POC</h3>
          <div className="input-field">
                <div className="underline"></div>
                <label className="label" htmlFor="field6">POC Full Name</label>
                <input type="text" id="field6" />
              </div>

              <div className="input-field">
                <div className="underline"></div>
                <label className="label" htmlFor="field6">POC Email Address</label>
                <input type="text" id="field6" />
              </div>
       
          <button className="submit-buttonCD" type="button">Submit</button>
          <button className="cancel-buttonCD" type="button" onClick={handleCancel}>Cancel</button>
        </form>
 
      </div>
    </div>
  
  );
};

export default Sidebar;
