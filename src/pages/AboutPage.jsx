import React from "react";
import { Link } from "react-router-dom";



const AboutPage = () => {
  return (
    <>
      {/* Navbar Inline */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">Vivekanand College</div>
          <ul className="navbar-menu">
            <li><Link to="/" className="navbar-link">Home</Link></li>
            <li><Link to="/about" className="navbar-link">About</Link></li>
            <li><Link to="/courses" className="navbar-link">Courses</Link></li>
            <li><Link to="/contact" className="navbar-link">Contact</Link></li>
            <li><Link to="/addmission" className="navbar-link navbar-apply">Apply Now</Link></li>
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <div className="page-container">
        <h1>About Vivekanand College</h1>
        <p align="left">
          Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering transformative education since its inception in <strong>1980</strong>. Located in the bustling heart of <strong>Chembur, Mumbai</strong>, our college has consistently strived to uphold the highest standards of academic rigor and ethical values.
        </p>
        <p align="left">
          Our vision is to empower students with critical thinking skills, a global perspective, and a strong sense of social responsibility. We aim to nurture individuals who are not only successful in their careers but also contributing members of society.
        </p>
        <hr />
        <h3 align="left">Our Mission</h3>
        <ul>
          <li>To provide high-quality, accessible education across various disciplines.</li>
          <li>To foster research, innovation, and creativity among students and faculty.</li>
          <li>To cultivate a diverse and inclusive learning environment.</li>
          <li>To instill strong ethical values and leadership qualities.</li>
        </ul>
        <hr />
        <h3 align="left">Our Values</h3>
        <p align="left">
          Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built. We encourage open dialogue, intellectual curiosity, and a relentless pursuit of knowledge.
        </p>
        <hr />
        <h3 align="left">Our History</h3>
        <p align="left">
          Our journey began with a vision to make quality education available to all, and we continue that legacy today. Over the years, we've expanded programs, upgraded facilities, and built a strong alumni network.
        </p>
      </div>
    </>
  );
};

export default AboutPage;
