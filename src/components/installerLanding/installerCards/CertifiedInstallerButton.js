
import React from 'react';
import iconC from '../../assets/certificate.png';
import '../installerDatatable/dashboard.css';
const CertifiedInstallerButton = () => {
  return (
    <button className="tile">
      <img src={iconC} alt="Icon 3" className="icons" />
      <span>Certified Installer Program</span>
      <div className="tile-text"></div>
      <div className="view"></div>
    </button>
  );
};

export default CertifiedInstallerButton;
