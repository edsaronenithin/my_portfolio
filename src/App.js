import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className="navbar">
        <ul className="navbar-list">
          <li><a href="#home" className="navbar-link">Home</a></li>
          <li><a href="#about" className="navbar-link">About</a></li>
          <li><a href="#contact" className="navbar-link">Contact</a></li>
          <li><a href="#resume" className="navbar-link">Resume</a></li>
        </ul>
      </nav>

      {/* Header Section */}
      <header id="home" className="header">
        <motion.h1
          className="header-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          EdDSARONE NITHIN
        </motion.h1>
        <motion.p
          className="header-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Front-End Developer | Back-End Developer | Full-Stack Enthusiast
        </motion.p>
      </header>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-card">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I am a passionate software developer with expertise in both front-end and back-end technologies.
            With hands-on experience in PHP, Laravel, CodeIgniter, React.js, and WordPress, I aim to deliver
            efficient and scalable solutions. My journey involves building dynamic websites, optimizing
            applications, and exploring innovative tech solutions.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3 className="project-title">Search Countries</h3>
            <p className="project-description">
            The Country Search Web Application is a static website that allows users to search for countries using their names.
             It fetches real-time data from a public API, providing information such as the country’s population, region, capital, and flag.
              This project demonstrates the integration of APIs with JavaScript to deliver a dynamic and user-friendly experience.
            </p>
            <p className="project-description"><a href='https://edsaronenithin.github.io/search-countries/' target="/blank">Demo</a></p>
          </div>

          <div className="project-card">
            <h3 className="project-title">E-commerce Platform</h3>
            <p className="project-description">
              Built a robust platform using Laravel and React.js to provide seamless shopping experiences.
            </p>
          </div>

          <div className="project-card">
            <h3 className="project-title">Machine Learning Exploration</h3>
            <p className="project-description">
              Completed a Python-based ML project during a workshop, focusing on predictive analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-links">
          <a
            href="https://github.com/edsaronenithin"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link github"
          >
            <FaGithub className="contact-icon" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/edsarone-nithin-62000720b"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link linkedin"
          >
            <FaLinkedin className="contact-icon" /> LinkedIn
          </a>
          <a
            href="mailto:nithinedsarone@gmail.com"
            className="contact-link email"
          >
            <FaEnvelope className="contact-icon" /> Email
          </a>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="resume-section">
        <h2 className="section-title">Resume</h2>
        <p className="resume-text">Click below to view or download my resume.</p>
        <a
          href="/path-to-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          View Resume
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Nithin. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Portfolio;
