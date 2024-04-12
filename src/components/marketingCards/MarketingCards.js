
import React from 'react';
import './marketingCards.css'
import Tag from '../assets/tag.png';
const MarketingCards = () => {
  return (
  

      <div className="tag-container">
        <div className="tag">
          <img src={Tag}/>
          <span className="tag-text">Product catalogs</span>
        </div>
        <div className="tag">
          <img src={Tag} alt="Tag2" />
          <span className="tag-text">Success Team</span>
        </div>
        <div className="tag">
          <img src={Tag} alt="Tag3" />
          <span className="tag-text">Tutorial Videos</span>
        </div>
      </div>
   
    
  );
};

export default MarketingCards;
