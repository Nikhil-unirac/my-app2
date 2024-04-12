import React from 'react';
import iconE from '../../../assets/orderhistory.png';
import '../dashboard2.css';

const orderhistory = () => {
  return (
    <button className="tile">

      <img src={iconE} alt="Icon 5" className="icons" />
      <span> Order History</span>
    </button>
  );
};

export default orderhistory;