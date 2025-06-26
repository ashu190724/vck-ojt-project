import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      {/* Removed navbar */}

      {/* Page Content with scroll */}
      <div
        className="page-container"
        style={{
          maxHeight: "calc(100vh - 80px)",
          overflowY: "auto",
          padding: "20px"
        }}
      >
        <h1>About Vivekanand College</h1>
        <p>
          Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering transformative education since its inception in <strong>1980</strong>. Located in the bustling heart of <strong>Chembur, Mumbai</strong>, our college has consistently strived to uphold the highest standards of academic rigor and ethical values.
        </p>
        <p>
          Our vision is to empower students with critical thinking skills, a global perspective, and a strong sense of social responsibility. We aim to nurture individuals who are not only successful in their careers but also contributing members of society.
        </p>
        <hr />
        <h3>Our Mission</h3>
        <ul>
          <li>To provide high-quality, accessible education across various disciplines.</li>
          <li>To foster research, innovation, and creativity among students and faculty.</li>
          <li>To cultivate a diverse and inclusive learning environment.</li>
          <li>To instill strong ethical values and leadership qualities.</li>
        </ul>
        <hr />
        <h3>Our Values</h3>
        <p>
          Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built. We encourage open dialogue, intellectual curiosity, and a relentless pursuit of knowledge.
        </p>
        <hr />
        <h3>Our History</h3>
        <p>
          Our journey began with a vision to make quality education available to all, and we continue that legacy today. Over the years, we've expanded programs, upgraded facilities, and built a strong alumni network.
        </p>
      </div>
    </>
  );
};

export default AboutPage;
