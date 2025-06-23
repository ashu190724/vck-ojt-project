import React from "react";
import { Link } from "react-router-dom";


const CoursesPage = () => {
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
        <h2 style={{ textAlign: "center" }}>Our Academic Programs</h2>
        <p>
          Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.
        </p>

        <h3>Undergraduate Programs (UG)</h3>
        <ul>
          <li><strong>Bachelor of Science (B.Sc.):</strong>
            <ul>
              <li>Computer Science (3 years)</li>
              <li>Information Technology (3 years)</li>
              <li>Biotechnology (3 years)</li>
            </ul>
          </li>
          <li><strong>Bachelor of Commerce (B.Com):</strong>
            <ul>
              <li>Accounting & Finance (3 years)</li>
              <li>Banking & Insurance (3 years)</li>
            </ul>
          </li>
          <li><strong>Bachelor of Arts (B.A.):</strong>
            <ul>
              <li>English Literature (3 years)</li>
              <li>Psychology (3 years)</li>
            </ul>
          </li>
        </ul>

        <h3>Postgraduate Programs (PG)</h3>
        <ul>
          <li><strong>Master of Science (M.Sc.):</strong>
            <ul>
              <li>Computer Science (2 years)</li>
              <li>Information Technology (2 years)</li>
            </ul>
          </li>
          <li><strong>Master of Commerce (M.Com):</strong> (2 years)</li>
          <li><strong>Master of Arts (M.A.):</strong> (2 years)</li>
        </ul>

        <h3>Program Details & Fee Structure (Annual)</h3>
        <table className="table-style">
          <thead>
            <tr>
              <th>Program Type</th>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Annual Fee (INR)</th>
              <th>Eligibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UG</td>
              <td>B.Sc. Computer Science</td>
              <td>3 Years</td>
              <td>₹ 85,000</td>
              <td>10+2 with PCM (50%)</td>
            </tr>
            <tr>
              <td>UG</td>
              <td>B.Com. Accounting & Finance</td>
              <td>3 Years</td>
              <td>₹ 70,000</td>
              <td>10+2 Commerce (45%)</td>
            </tr>
            <tr>
              <td>PG</td>
              <td>M.Sc. Information Technology</td>
              <td>2 Years</td>
              <td>₹ 95,000</td>
              <td>B.Sc. IT/CS (50%)</td>
            </tr>
          </tbody>
        </table>

        <h3>Specialized & Vocational Courses</h3>
        <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like:</p>
        <ul>
          <li>Digital Marketing</li>
          <li>Web Development</li>
          <li>Data Analytics</li>
          <li>Soft Skills Development</li>
        </ul>

        <div>
          <h3>Campus Tour</h3>
          <video
            className="video-responsive"
            controls
            src="/videos/college-tour.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p>Have questions about a specific course?</p>
          <Link to="/contact">
            <button className="primary-btn">Inquire About Courses</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CoursesPage;
