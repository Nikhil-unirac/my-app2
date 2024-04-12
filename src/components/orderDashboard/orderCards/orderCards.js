import React from "react";
import './orderCards.css'; 
import image1 from '../../assets/resume.png';
import image2 from '../../assets/resume.png';
import image3 from '../../assets/resume.png';
import image4 from '../../assets/resume.png';
import image5 from '../../assets/resume.png';


const Card = ({ imageSrc, text }) => (
  <div className="card">
    <img src={imageSrc} alt="Card" className="card-image" />
    <div className="card-text">{text}</div>
  </div>
);

const CardList = () => {
    const cardsData = [
        { imageSrc: image1, text: "Total PO Submitted      145" },
        { imageSrc: image2, text: "Total Order Delivered" },
        { imageSrc: image3, text: "Order Under Draft" },
        { imageSrc: image4, text: "Payment Pending" },
        { imageSrc: image5, text: "Order Cancelled/Returned" },
      ];
      

  return (
    <div className="card-list">
      {cardsData.map((card, index) => (
        <Card key={index} imageSrc={card.imageSrc} text={card.text} />
      ))}
    </div>
  );
};

export default CardList;
