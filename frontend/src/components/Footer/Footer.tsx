import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h1 className="footer-title">Welcome to Forkcast!</h1>
        <p className="footer-text"> © 2024 Forkcast. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;