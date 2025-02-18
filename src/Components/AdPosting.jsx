import React, { useState } from 'react';
import './AdPosting.css'; 

const AdPosting = () => {
  const [briefDescription, setBriefDescription] = useState("");

  const handleDescriptionChange = (e) => {
    setBriefDescription(e.target.value);
  };

  return (
    <div className="ad-posting-container">
      {/* add Section */}
      <div class="adPosting-section">
  <h4 class="adPosting-heading">Ad Posting</h4>
  <h2>Create & Promote Your Business Ad
</h2>
  <div class="adPosting-text-container">
    <p class="adPosting-text">
    Easily list your business with up to 6 images and a compelling description
    </p>
  </div>
</div>
















      {/* Upload Ads Section */}
      
      
      <div className="card">
        {/* Centered Logo Picture */}
        <img className="logo" src="/card logo.PNG" alt="Logo" />

        {/* Heading */}
        <h2>Drag and Drop here</h2>

        {/* Static Paragraph */}
        <p>Or</p>

        {/* Centered Button: Select File */}
        <div className="center">
        <input type="file" id="fileInput" style={{ display: "none" }} />
        <button className="btn" onClick={() => document.getElementById("fileInput").click()}>Select File</button>
          
        </div>

        {/* Divider */}
        <hr />

        {/* Description Input Section */}
        <label htmlFor="descriptionInput">
          <strong>Description:</strong>
        </label>
        <textarea
          id="descriptionInput"
          rows="4"
          placeholder="Type description here..."
        />

        {/* Row with Upload Button aligned to right */}
        <div className="row">
          <button className="btn upload">Upload all</button>
        </div>
      </div>
   





















      {/* Sign-up Section */}
      <section className="signup-section">
  <div className="signup-info">
    <div className="signup-header">
      <div className="signup-icon">✔️</div>
    </div>
    <h3 className="signup-heading">Sign Up Here</h3> 
    
    <p>Register your business and list your services to advance</p>
  </div>
  <button className="signup-button">Sign Up</button>
</section> 



    </div>
  );
};

export default AdPosting;
