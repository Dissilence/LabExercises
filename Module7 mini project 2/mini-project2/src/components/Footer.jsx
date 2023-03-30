import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are a community of Animal Crossing enthusiasts sharing tips, tricks, and island inspiration.</p>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: info@animalcrossing.com</li>
            <li>Phone: 1-800-AC-CROSS</li>
            <li>Address: 123 Main St, Animal Crossing, USA</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Animal Crossing. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
