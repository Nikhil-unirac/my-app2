// Sidebar.js
import React, { useState } from 'react';
import './sidebarNO.css';

const Sidebar = ({ onClose }) => {
  const [isFormValid, setIsFormValid] = useState(true); // Set to true initially
  const [isDateValid, setIsDateValid] = useState(true); // Set to true initially

  const handleDateChange = (event) => {
    const enteredDate = event.target.value;
    setIsDateValid(enteredDate !== '');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the form is valid
    const isValid = isDateValid; // Add more validations if needed
    setIsFormValid(isValid);
    if (isValid) {
      // Submit the form
      console.log('Form submitted successfully');
    } else {
     
      console.log('Form submission failed due to invalid fields');
    }
  };

  const handleCancel = () => {
    onClose(); 
  };

  return (

    <div className="sidebar">
        <div className="page2"> </div>
        <div className="page1">
      <h2 className="heading2">ORDER SUMMARY</h2>
    
      <form onSubmit={handleSubmit}>
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
            <div className="input-date">
              <div className="underline"></div>
              <label className="label" htmlFor="field8">Add Due Date</label>
              <input
                type="date"
                id="field8"
                onChange={handleDateChange}
                className={!isDateValid ? 'invalid' : ''}
              />
              {!isDateValid && !isFormValid && <p className="error-message">Please enter a valid date</p>}
            </div>
          </div>
        </div>
        <button className="submit-buttonNO" type="submit">Submit</button>
     
        
          <button className="cancel-buttonNO" type="button" onClick={handleCancel}>Cancel</button>
        
        
        {!isFormValid && <p className="error-message">Please fix the errors and try again</p>}
      </form>
      </div>
     
    </div>
  );
};

export default Sidebar;
