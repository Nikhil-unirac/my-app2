import React from 'react';
import iconE from '../../../assets/newproducts.png';
import '../dashboard2.css';

const NewProducts = () => {
  return (
    <button className="tile">

      <img src={iconE} alt="Icon 5" className="icons" />
      <span>New Product</span>
       <div className="tile-text"></div>
      <div className="view"></div>
    </button>
  );
};

export default NewProducts;