import React from 'react';
import iconA from '../../assets/ubuilder.png';
import '../installerDatatable/dashboard.css';
const UBuilderButton = () => {
  return (
    <button className="tile">
      <img src={iconA} alt="Icon 1" className="icons" />
      <span>U-Builder</span>
      <div className="tile-text"></div>
      <div className="view"></div>
    </button>
  );
};

export default UBuilderButton;