
import React from 'react';
import './sideBar.css';
import chatIcon from '../../assets/chat.png'; 
import poIcon from '../../assets/downloadpo.png'; 
import close from '../../assets/closebutton.png';

const Sidebar = ({ onClose }) => {
  return (
    <div className="sidebar1">
      <h2>Create PO</h2>
 
      <button className="close-button" img src={close} onClick={onClose}></button>
      <div className="underline"></div>
      <div className="button-sidebar">
 
        <button>
          <img src={chatIcon} alt="Chat Icon" />
          <p>Chat with expert</p>
        </button>

        <button>
          <img src={poIcon} alt="PO Icon" />
          <p>Download PO</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
