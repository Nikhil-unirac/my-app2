import React from 'react';
import iconE from '../../../assets/truckloading.png';
import '../dashboard2.css';

const NewProductsButton = () => {
  return (
    <button className="tile">

      <img src={iconE} alt="Icon 5" className="icons" />
      <span>Track Order</span>
    </button>
  );
};

export default NewProductsButton;