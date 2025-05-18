import React from "react";
import "../css/portfolio.css";

const projects = [
  {
    title: "The Golden Recommender (Movie)",
    subtitle: "Hybrid Filtering",
    image: "/images/portfolio/recommender.png",
    link: "https://github.com/STrikeNone/CZ1016-Introduction-to-Data-Science/tree/main/DS1%20Mini%20Project%20-%20The%20Golden%20Recommender%20(Movie)",
  },
  {
    title: "Sorting Visualizer",
    subtitle: "React.Js",
    image: "/images/portfolio/sorting.png",
    link: "https://strikenone.github.io/SortingVisualizer/",
  },
  {
    title: "Restaurant Point of Reservation System",
    subtitle: "OOP in Java",
    image: "/images/portfolio/reservation.png",
    link: "https://github.com/STrikeNone/CZ2002-Object-Oriented-Design-Programming",
  },
  {
    title: "Login System",
    subtitle: "React.Js, Node.Js, MongoDB",
    image: "/images/portfolio/login.png",
    link: "https://github.com/STrikeNone/Log-In-System-Fullstack-/tree/main/front",
  },
  {
    title: "Deepfake Detection in DSTA SeeTrue",
    subtitle: "CNN",
    image: "/images/portfolio/deepfake.png",
    link: "https://github.com/STrikeNone/Data-Science-Projects/tree/main/DeepFake%20Detection",
  },
  {
    title: "Deep Racer AWS",
    subtitle: "Reinforcement Learning",
    image: "/images/portfolio/deepracer.png",
    link: "https://github.com/STrikeNone/Data-Science-Projects/tree/main/Deep%20Racer%20AWSm",
  },
];

function Portfolio() {
  return (
    <div className="portfolio-container">
      <h2>Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="portfolio-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={project.image} alt={project.title} />
            <div className="portfolio-card-text">
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
