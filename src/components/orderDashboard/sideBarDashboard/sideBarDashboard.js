import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './sideBarDashboard.css'; // Import the CSS file for sidebar styling
import HomeIcon from '@mui/icons-material/Home'; // Import the home icon from Material-UI
import Logo from '../../assets/logo.png'; // Import your logo image
import Neworder from '../../assets/docs.png';
import Discount from '../../assets/discount.png';
import loginimg from '../../assets/Ellipse.png';


const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" style={{ width: '100%' }} />
      </div>
     
      <button className="home-btn" style={{ position: 'relative', marginTop: '20px', borderRadius: '10%', width: '80px', height: '80px', border: 'none', backgroundColor: 'white', boxShadow: '-7px 5px 6px #00000029', marginLeft: '10px', marginRight: '50px', left: '10px' }}>
        <HomeIcon style={{ color: '#000' }} />
        <span className="btn-description" style={{ position: 'relative', left: '8px', top: '45px', display: 'block', marginTop: '5px', fontSize: '14px', color: 'white' }}>Home</span>
      </button>
      
      <div className="other-buttons show">
        <Link to="/dashboard" className="other-btn" style={{ display: 'inline-block', position: 'relative', marginTop: '40px', borderRadius: '50%', width: '80px', height: '80px', border: 'none', opacity: '0.88', boxShadow: '-7px 5px 6px #00000029', marginLeft: '10px', marginRight: '50px', left: '10px', top: '20px', backgroundColor: '#a8badbb9', textDecoration: 'none', color: 'inherit' }}>
          <img src={Neworder} alt="New Order Icon" style={{ height: '30px', width: '30px', position: 'relative', left: '25px', top: '20px' }} />
          <span className="btn-description">New Order</span>
        </Link>

        <Link to="/discount" className="other-btn" style={{ display: 'inline-block', position: 'relative', marginTop: '40px', borderRadius: '50%', width: '80px', height: '80px', border: 'none', opacity: '0.88', boxShadow: '-7px 5px 6px #00000029', marginLeft: '10px', marginRight: '50px', left: '10px', top: '20px', backgroundColor: '#a8badbb9', textDecoration: 'none', color: 'inherit' }}>
          <img src={Discount} alt="Discount Icon" style={{ height: '30px', width: '30px', position: 'relative', left: '25px', top: '20px' }} />
          <span className="btn-description">Customer Discount</span>
        </Link>
      </div>

      <Link to="/logout" className="logout-btn" style={{ position: 'relative', marginTop: '20px', marginBottom: '20px', borderRadius: '50%', width: '70px', height: '60px', border: 'none', top: '200px', marginLeft: '10px', marginRight: '50px', left: '10px', background: 'transparent' }}>
        <img src={loginimg} alt="Logout Icon" />
        <span className="logoutbtn-description" style={{ position: 'relative', display: 'block', marginTop: '5px', fontSize: '14px', color: 'white' }}>Logout</span>
      </Link>
    </div>
  );
};

export default Sidebar;
