import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Pages.css"; // ✅ go up 2 folders to reach style/


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Vivekanand college</div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Navigation Links */}
        <ul className={`navbar-menu ${menuOpen ? "nav-open" : ""}`} id="nav_item">
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/about" className="navbar-link">About</Link></li>
          <li><Link to="/courses" className="navbar-link">Courses</Link></li>
          <li><Link to="/contact" className="navbar-link">Contact</Link></li>
          <li><Link to="/addmission" className="navbar-link" id="addmission-btn">Apply</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
