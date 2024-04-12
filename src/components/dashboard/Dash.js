import React from 'react';
import { useNavigate } from 'react-router-dom';
import './dash.css';
import icon1 from '../assets/resume (1).png';
import icon2 from '../assets/Group 1916@2x.png';
import icon3 from '../assets/pending.png';
import icon4 from '../assets/Group 2682.png';

const TileComponent = () => {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const handleTileClick = (routePath) => {
    navigate(routePath);
  };

  return (
    <div className="tile-container">
      <div className="dash-label">Dashboard </div>

      <button className="tile" onClick={() => handleTileClick('/total-plan-set')}>
        <img src={icon1} alt="Icon 1" className="icons" />
        <span>Total Plan Set Submitted</span>
        <div className="tile-text"> 145</div>
        <div className="view">View All</div> {/* Additional text below span */}
      </button>

      <button className="tile" onClick={() => handleTileClick('/total-ahj-submitted')}>
        <img src={icon2} alt="Icon 2" className="icons" />
        <span>Total  A   H   J  Submitted</span>
        <div className="tile-text"> 32/05</div>
        <div className="view">View All</div> {/* Additional text below span */}
      </button>

      <button className="tile" onClick={() => handleTileClick('/u-builder-project-configured')}>
        <img src={icon3} alt="Icon 3" className="icons" />
        <span>U-Builder Project Configured</span>
        <div className="tile-text">650</div>
        <div className="view">View All</div> {/* Additional text below span */}
      </button>

      <button className="tile" onClick={() => handleTileClick('/project-pending-payment')}>
        <img src={icon4} alt="Icon 4" className="icons" />
        <span>Project pending For Payment</span>
        <div className="tile-text">08</div> 
        <div className="view">View All</div>{/* Additional text below span */}
      </button>
    </div>
  );
};

export default TileComponent;
