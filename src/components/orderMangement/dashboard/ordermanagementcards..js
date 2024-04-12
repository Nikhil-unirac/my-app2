// Import the NewProductsButton component
import React from 'react';
import NewProduct from './NewProduct/NewProduct';
import Orderhistory from './orderHistory/OrderHistory';
import Creatpo from './createPO/createPo'
import VideoCard from '../../orderMangement/dashboard/viideocard/VideoCard';
import Trackorder from './trackOrder/trackOrder'
import Uploadpo from './UploadPO/uploadPo';
import './dashboard2.css'
const AnotherComponent = () => {
  return (
    
    <div className="cards-container">
       <div className="dash-label">Dashboard </div>

   <VideoCard/>
   <Trackorder/>
   <Uploadpo/>
   <Creatpo/>
    <Orderhistory/>
    <NewProduct/>
     
    </div>
  );
};

export default AnotherComponent;
