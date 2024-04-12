
import React from 'react';
import Dashboard from '../orderMangement/dashboard/ordermanagementcards.';
import Navbar from "../navbar/Navbar";
import MarketingCards from '../marketingCards/MarketingCards';
import DataTable from '../orderMangement/dataTable/DataTable';

const OrderManagement = () => {
  return (
       <div>
       <div className="order-management-container">
      <Navbar/>
      <MarketingCards/>
      <Dashboard />
      <DataTable/>
    </div>
    </div>
  );
};

export default OrderManagement;