import React from 'react';
import OrderAnalytic from './orderAnalytics/OrderAnalytics';
import DataTable from './orderTable/orderTable';
import OrderTAT from './orderTAT/orderTAT';
import Sidebar from './sideBarDashboard/sideBarDashboard';
import Cards from './orderCards/orderCards';
import iconImage from '../../components/assets/Bellring.jpg';
import './orderDashboard.css';

const OrderDashboard = () => {
  return (
    <div>
      <nav className="navbar-dashboard">
        <img src={iconImage} alt="Icon" className="icon" /> 
        <h2 className="heading">Customer Experience Portal</h2>
        <h3 className="sub-heading">Analytical view for your every order</h3>
       <button className="nav-button">full year</button>
      </nav>
      <div>
         <Sidebar/>
        <Cards />
        <OrderTAT />
        <OrderAnalytic />
        <DataTable />
      </div>
    </div>
  );
};

export default OrderDashboard;
