import React from 'react';
import '../styles/styles.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
       
        <div className="text-center contact-info">
          <h5>Contact Us</h5>
          <p>Email: <a href="mailto:info@inkpvtltd.com">info@inkpvtltd.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
          <p>Address: 123 Fashion St, Kandy, Central Province, Sri Lanka</p>
        </div>

        <p className="text-center">© 2024 INk PVT(LTD). All Rights Reserved.</p>
        <p className="text-center">
          <a href="#privacy-policy" className="footer-link">Privacy Policy</a> | <a href="#terms" className="footer-link">Terms of Use</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;


