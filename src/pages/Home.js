import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

// ⬅️ Import images directly from src/images
import aboutIcon from "../images/home/about.png";
import resumeIcon from "../images/home/resume.png";
import portfolioIcon from "../images/home/portfolio.png";

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome!</h1>
        <p>
          Welcome to my personal website created via React.js. This was built
          during my University days to hone some Software Engineering skills.
          Here, you'll find my personal projects and resume.
        </p>
      </header>

      <div className="home-sections">
        <div className="section-card">
          <img src={aboutIcon} alt="About Icon" className="section-icon" />
          <h2>About</h2>
          <Link to="/about" className="view-button">
            VIEW MORE
          </Link>
        </div>

        <div className="section-card">
          <img src={resumeIcon} alt="Resume Icon" className="section-icon" />
          <h2>Resume</h2>
          <Link to="/resume" className="view-button">
            VIEW MORE
          </Link>
        </div>

        <div className="section-card">
          <img
            src={portfolioIcon}
            alt="Portfolio Icon"
            className="section-icon"
          />
          <h2>Projects</h2>
          <Link to="/portfolio" className="view-button">
            VIEW MORE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
