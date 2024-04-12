import React from 'react';
import videoFile from '../../assets/gifvideo.mp4';
import '../installerDatatable/dashboard.css';

const VideoCard = () => {
  return (
    <button className="tile">
   
          <video src={videoFile} alt="Video Icon" className="icons-video" autoPlay muted loop />
      <div className="view"></div>
    </button>
  );
};

export default VideoCard;
