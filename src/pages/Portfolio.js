import React from "react";
import "../css/portfolio.css";
import recommenderImg from "../images/portfolio/recommender.png";
import sortingImg from "../images/portfolio/sorting.png";
import reservationImg from "../images/portfolio/reservation.png";
import loginImg from "../images/portfolio/login.png";
import deepfakeImg from "../images/portfolio/deepfake.png";
import deepracerImg from "../images/portfolio/deepracer.png";
import fypImg from "../images/portfolio/fyp.png";

const projects = [
  {
    title: "The Golden Recommender (Movie)",
    subtitle: "Hybrid Filtering",
    image: recommenderImg,
    link: "https://github.com/STrikeNone/CZ1016-Introduction-to-Data-Science/tree/main/DS1%20Mini%20Project%20-%20The%20Golden%20Recommender%20(Movie)",
  },
  {
    title: "Sorting Visualizer",
    subtitle: "React.Js",
    image: sortingImg,
    link: "https://strikenone.github.io/SortingVisualizer/",
  },
  {
    title: "Restaurant Point of Reservation System",
    subtitle: "OOP in Java",
    image: reservationImg,
    link: "https://github.com/STrikeNone/CZ2002-Object-Oriented-Design-Programming",
  },
  {
    title: "Login System",
    subtitle: "React.Js, Node.Js, MongoDB",
    image: loginImg,
    link: "https://github.com/STrikeNone/Log-In-System-Fullstack-/tree/main/front",
  },
  {
    title: "Deepfake Detection in DSTA SeeTrue",
    subtitle: "CNN",
    image: deepfakeImg,
    link: "https://github.com/STrikeNone/Data-Science-Projects/tree/main/DeepFake%20Detection",
  },
  {
    title: "Deep Racer AWS",
    subtitle: "Reinforcement Learning",
    image: deepracerImg,
    link: "https://github.com/STrikeNone/Data-Science-Projects/tree/main/Deep%20Racer%20AWSm",
  },
  {
    title:
      "BlockDoor: Blocking Backdoor Based Watermarks in Deep Neural Networks",
    subtitle:
      "Final Year Project adopted to a paper. Accepted as a Work In Progress Paper",
    image: fypImg,
    link: "https://link.springer.com/chapter/10.1007/978-3-031-80408-3_16",
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
