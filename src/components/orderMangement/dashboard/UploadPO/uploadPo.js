import React, { useState, useRef } from 'react';
import iconE from '../../../assets/uploadpo.png';
import './uploadpo.css';

const UploadPO = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const [showFilePage, setShowFilePage] = useState(false);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
    setShowFilePage(false);
    setIsSubmitClicked(false);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleFileUpload = (file) => {
    setUploadedFileName(file.name);
    setShowFilePage(true);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFileUpload(file);
  };

  const handleSubmit = () => {
    setIsSubmitClicked(true);
    setShowFilePage(true);
  };

  const handleDelete = () => {
    setUploadedFileName(null);
    setShowFilePage(false);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  return (
    <div>
      <button className="tile" onClick={handleButtonClick}>
        <img src={iconE} alt="Icon 5" className="icons" />
        <span>Upload PO</span>
      </button>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>
              &times;
            </span>
            <h2 className='popup-heading'>Mode of PO Upload</h2>
            {showFilePage ? (
              <div className="file-page">
                <p>Uploaded file: {uploadedFileName}</p>
                {!isSubmitClicked && uploadedFileName && (
                  <button className="delete-button" onClick={handleDelete}>Delete</button>
                )}
                {!isSubmitClicked && (
                  <button className="submit-button" onClick={handleSubmit}>Submit form</button>
                )}
                {isSubmitClicked && (
                  <div className='text-content'>
                    <h2>PO submitted successfully</h2>
                    <p>We have received your order and your details to connect with you.</p>
                    <p>Our expert team will connect with you as soon as possible and provide you details.</p>
                    <p>Maximum time to connect with you will be 4-6 hrs in business day and we care for our customers.</p>
                    <p>Your Order ID - 7780819</p>
                    <button className="close-text-content" onClick={handleClosePopup}>Close</button>
                  </div>
                )}
              </div>
            ) : (
              <div className="drag-drop-area" onDragOver={handleDragOver} onDrop={handleDrop} onClick={handleUploadClick}>
                <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
                <div className="drop-area"> Drag & Drop file here</div>
                {!isSubmitClicked && (
                  <button className="submit-button" onClick={handleSubmit}>Submit form</button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadPO;
