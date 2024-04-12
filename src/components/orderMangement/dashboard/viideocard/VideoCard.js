import React from 'react';
import videoFile from '../../../assets/gifvideo.mp4';
import '../dashboard2.css';
import { Link } from 'react-router-dom';

const VideoCard = () => {
  const handleClick = () => { console.log("Button clicked")};
  return (
     <div>
    <Link to="/board">
 <button className="tile" onClick= {handleClick}>  
 <video src={videoFile} alt="Video Icon" className="icons-video" autoPlay muted loop   />
 <div className="view"></div>
 </button>
 </Link>
 </div>

  );
};

export default VideoCard;
