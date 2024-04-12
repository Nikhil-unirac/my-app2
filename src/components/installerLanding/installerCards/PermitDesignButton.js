
import React from 'react';
import iconB from '../../assets/permitdesign.png';
import '../installerDatatable/dashboard.css';
const PermitDesignButton = () => {
  return (
    <button className="tile">
      <img src={iconB} alt="Icon 2" className="icons" />
      <span>Permit Design</span>
      <div className="tile-text"></div>
      <div className="view"></div>
    </button>
  );
};

export default PermitDesignButton;
