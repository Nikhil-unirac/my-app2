
import React from 'react';
import iconE from '../../assets/newproducts.png';
import '../installerDatatable/dashboard.css';
const NewProductsButton = () => {
  return (
    <button className="tile">
      <img src={iconE} alt="Icon 5" className="icons" />
      <span>New Products</span>
      <div className="tile-text"></div>
      <div className="view"></div>
    </button>
  );
};

export default NewProductsButton;
