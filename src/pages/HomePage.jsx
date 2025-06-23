import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
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

      {/* Background container */}
      <div className="home-background">
        {/* Page Content */}
        <div className="page-container">
          {/* Banner Section */}
          <section style={{ position: "relative", height: "200px", overflow: "hidden", borderRadius: "10px" }}>
            <img
              src="/images/collegebanner.png"
              alt="College Banner"
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.7)" }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "center",
                padding: "0 20px",
                zIndex: 2,
                width: "90%",
                textShadow: "0 0 5px rgba(0,0,0,0.7)",
              }}
            >
              <h2 style={{ fontSize: "2.8rem", margin: 0 }}>Welcome to Vivekanand College</h2>
              <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
                Your journey to excellence starts here.
              </p>
              <Link to="/addmission">
                <button className="primary-btn" style={{ marginTop: "15px" }}>Apply Now!</button>
              </Link>
            </div>
          </section>

          {/* Main content section */}
          <section style={{ marginTop: "40px" }}>
            <p>
              <strong>Vivekanand College</strong> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.
            </p>

            <p>
              At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.
            </p>

            <hr />

            <h3>Why Choose Vivekanand College?</h3>
            <ul>
              <li><strong>Legacy of Excellence:</strong> Decades of commitment to quality education.</li>
              <li><strong>Experienced Faculty:</strong> Learn from renowned experts and passionate educators.</li>
              <li><strong>Modern Facilities:</strong> Well-equipped labs, expansive library, and comfortable campus.</li>
              <li><strong>Holistic Development:</strong> Focus on co-curricular activities, sports, and community service.</li>
              <li><strong>Strong Placements:</strong> Excellent career opportunities with leading companies.</li>
            </ul>

            <hr />

            <h3 style={{ textAlign: "center" }}>Campus Life & Facilities</h3>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
              <img
                src="/images/students.jpeg"
                alt="Students studying in library"
                className="img-rounded"
                style={{ height: "180px" }}
              />
              <img
                src="/images/campus.jpg"
                alt="Students on campus ground"
                className="img-rounded"
                style={{ height: "180px" }}
              />
            </div>

            <p style={{ textAlign: "center" }}>
              Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.
            </p>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <p>Ready to explore our courses?</p>
              <Link to="/courses">
                <button className="secondary-btn">Explore Courses</button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
