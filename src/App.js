import React from 'react';
import './index.css';
import  OrderDashboard from './components/orderDashboard/OrderDashboard';
import Discount from './components/orderDashboard/sideBarDashboard/customerDiscount/customerDiscount';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './components/navbar/login/signup/SignUp';
import NewOrder from './components/orderDashboard/sideBarDashboard/newOrder/newOrder';
 import OrderManagement from './components/orderMangement/orderMangement';
 
function App() {
  return (
<Router>
<div>


<Switch>
 <Route exact path="/" component={SignUp}/>
<Route path="/OrderManagement" component={OrderManagement} />
<Route path="/board" component={OrderDashboard} />
<Route path="/dashboard" component={NewOrder}/>
<Route path="/discount" component={Discount} />
</Switch>
</div>
</Router>
  );
}
 
export default App;