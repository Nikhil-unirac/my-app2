import React, { useState } from 'react';
import iconA from '../../../assets/createpo.png';
import './CreatePO.css';
import Table from "./CreatePOtable";

const CreatePO = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [extendedSidebarOpen, setExtendedSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleExtendedSidebar = () => {
    setExtendedSidebarOpen(!extendedSidebarOpen);
  };

  const handleCancel = () => {
    setSidebarOpen(false);
    setExtendedSidebarOpen(false); // Close extended sidebar when cancelling
  };

  const handleSubmit = () => {
    toggleExtendedSidebar(); // Open extended sidebar
  };

  return (
    <div>
      <button className="tilePO" onClick={toggleSidebar}>
        <img src={iconA} alt="Icon 1" className="iconsPO" />
        <span className="button-titlePO">Create PO</span>
      </button>

      {sidebarOpen && (
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

              <button className="submit-buttonCD" type="button" onClick={handleSubmit}>Add items to your cart</button>
              <button className="cancel-buttonCD" type="button" onClick={handleCancel}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {extendedSidebarOpen && (
        <div className="extended-sidebar">
          
      <input
      type="text"
      placeholder=" Search Hardware/Parts For Your Need"
      className="search-bar"
      />
      <button className="show-products">All</button>
       <Table/>
        </div>
      )}
    </div>
  );
};

export default CreatePO;
