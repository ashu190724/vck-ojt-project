// src/components/Footer.jsx
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-col">
        <h4>About Us</h4>
        <p>Vivekanand College — Fostering excellence since 1980.</p>
      </div>
      <div className="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Contact</h4>
        <p>Email: info@vck.edu.in</p>
        <p>Phone: +91‑2362‑123456</p>
      </div>
    </div>
    <div className="footer-bottom">
      © {new Date().getFullYear()} Vivekanand College. All rights reserved.
    </div>
  </footer>
);

export default Footer;
