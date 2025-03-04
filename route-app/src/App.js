import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css"; 

function Home() {
  return (
    <div className="page home">
      <img src="./pic.jpg" alt="Pooja" class="profile-img" />
      <h1>Welcome to My Portfolio</h1>
      <p>Resourceful and hardworking professional with a strong aptitude for quick learning and
adaptability.</p> <p>Seeking to leverage these skills to contribute effectively to a dynamic team and
drive organizational success</p>
    </div>
  );
}

function About() {
  return (
    <div className="page about">
      <h1> Skills</h1>
      <ul>
        <li>Programming Languages : C, Java, Python</li>
        <li>Web Technologies : HTML, CSS, Bootstrap, SpringBoot</li>
        <li>Frameworks: Spring Boot  Databases: DBMS, MySQL</li>
        <li>Cloud Services: AWS</li>
      </ul>
      <a href="/PoojaResume.pdf" download className="btn">Download My Resume</a>
    </div>
  );
}

function Projects() {
  return (
    <div className="page projects">
      <h1>My Projects</h1>
      <div className="project-list">
        <div className="project-card">
          <h2>Travel Management System</h2>
          <p>A database-driven system using MySQL.</p>
        </div>
        <div className="project-card">
          <h2> IoT-based Smart Street Light</h2>
          <p>Innovative automation project leveraging IoT.</p>
        </div>
        <div className="project-card">
          <h2>Image Processing & 3D Reconstruction</h2>
          <p>Research on submerged object reconstruction.</p>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="page contact">
      <h1>Contact Me</h1>
      <p>Email: <a href="mailto:poojasiva615@gmail.com">poojasiva615@gmail.com</a></p>
      <p>Phone: <a href="tel:+916369509392">+91 6369509392</a></p>
    </div>
  );
}

function NotFound() {
  return <h1 className="page">404 - Page Not Found</h1>;
}

function App() {
  return (
    <Router>
      <nav>
        <h2 className="logo">Pooja Sivakumar</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
