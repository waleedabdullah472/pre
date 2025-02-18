import React, { useState, useEffect } from "react";
import { FaBars, FaHome, FaInfoCircle, FaPhoneAlt, FaShieldAlt, FaUserAlt, FaSignInAlt } from "react-icons/fa";
import "./Header.css"; // For CSS styles

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsSidebarOpen(false); // Close sidebar if screen is resized to large
      }
    };
    

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="header">
      {/* Left side with logo */}
      <div className="header-left">
        
          <img src=" vend 1.png" alt="Logo" className="logo" />
     
    
      </div>

      {/* Center Links */}
      <div className="header-center">
        <div className="links">
          <a href="/" className="link">Home</a>
          <a href="/About" className="link">About</a>
          <a href="/Services" className="link">Services</a>
          <a href="/AdPosting" className="link">AdPosting</a>
        </div>
      </div>

      {/* Right side with Sign Up / Sign In buttons (on large screens) */}
      <div className="header-right">
        {!isMobile && (
          <>
            <a href="/signup" className="button">Sign Up</a>
            <a href="/signin" className="button">Sign In</a>
          </>
        )}
        {isMobile ? (
          <FaBars className="menu-icon" onClick={toggleSidebar} />
        ) : null}
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-content">
        <a href="/signup" className="link" onClick={() => setIsSidebarOpen(false)}>Sign Up</a>
        <a href="/signin" className="link" onClick={() => setIsSidebarOpen(false)}>Sign In</a>
          <a href="/" className="link" onClick={() => setIsSidebarOpen(false)}>Home</a>
          <a href="/About" className="link" onClick={() => setIsSidebarOpen(false)}>About</a>
          <a href="/Services" className="link" onClick={() => setIsSidebarOpen(false)}>Services</a>
          <a href="/AdPosting" className="link" onClick={() => setIsSidebarOpen(false)}>AdPosting</a>
         
        </div>
      </div>
    </header>
  );
};

export default Header;
