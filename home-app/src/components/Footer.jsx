import React from 'react';
import '../styles/styles.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text-center">© 2024 INk PVT(LTD). All Rights Reserved.</p>
        <p className="text-center">
          <a href="#privacy-policy" className="footer-link">Privacy Policy</a> | <a href="#terms" className="footer-link">Terms of Use</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
