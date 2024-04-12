// components/dashboard/MasterInstallerButton.js
import React from 'react';
import iconD from '../../assets/installerprogram.png';
import '../installerDatatable/dashboard.css';
const MasterInstallerButton = () => {
  return (
    <button className="tile">
      <img src={iconD} alt="Icon 4" className="icons" />
      <span>Master Installer Program</span>
      <div className="tile-text"></div>
      <div className="view"></div>
    </button>
  );
};

export default MasterInstallerButton;
