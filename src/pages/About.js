import React from "react";
import "../css/about.css";
import profileImg from "../images/about/profile.png";
import emailIcon from "../images/about/email.png";
import notesIcon from "../images/about/notes.png";
import { FaGraduationCap, FaLinkedin, FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className="about-container">
      <aside className="sidebar">
        <img src={profileImg} alt="Profile" className="profile-img" />
        <h2 className="name">Yi Hao</h2>
        <p className="title">MLE</p>
        <hr />
        <div className="contact-info">
          <div className="info-item">
            <img src={emailIcon} alt="Email" />
            <span>yihaololz@gmail.com</span>
          </div>
          <div className="info-item">
            <FaLinkedin className="contact-icon" />
            <a
              href="https://www.linkedin.com/in/yi-hao-puah-7286b11b8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="info-item">
            <FaGithub className="contact-icon" />
            <a
              href="https://github.com/STrikeNone"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <div className="info-item">
            <img src={notesIcon} alt="notes" />
            <a
              href="https://drive.google.com/drive/u/1/folders/1TKm-WrIipy9DSt7olbG_56s4yhQ_bqyU"
              target="_blank"
              rel="noopener noreferrer"
            >
              Uni Notes
            </a>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <section className="about-section">
          <h2>About Me</h2>
          <p>
            Graduated in May 2024 from Nanyang Technological University with a
            Bachelor of Science in Data Science and AI at NTU. I've had prior
            internship experiences at DSO, CSIT and TikTok.
          </p>

          <p>
            I would describe myself as a helpful and sociable person.
            Volunteering is something I find meaning in, and I have helped out
            in the SCSE Club Community Development portfolio as well as NTU WSC
            Friends of Children.
          </p>
        </section>

        <section className="timeline-section">
          <h2 className="timeline-title">
            <FaGraduationCap className="timeline-icon" />
            Education
          </h2>
          <div className="timeline">
            {" "}
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3> Nanyang Technological University</h3>
                <span className="timeline-date">2021 — 2024</span>
                <p>
                  Bachelor of Science: Data Science & Artificial Intelligence
                </p>
                <p>CGPA: 4.91</p>
                <ul className="timeline-points">
                  <li>
                    CSE Club AY20/21 & AY21/22 Community Development - Sub Comm
                    Member
                  </li>
                  <li>WSC RSP FoC AY22/23 & AY23/24 - Member</li>
                  <li>Binjai Hall Orientation FOP AY21/22 - Group Leader</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>St Andrews Junior College</h3>
                <span className="timeline-date">2016 — 2017</span>
                <p>H2: Biology, Chemistry, Math | H1: Econs, General Paper</p>
                <p>Rank Points: 90</p>
                <ul className="timeline-points">
                  <li>CCA: Saints Advocates (Student Leadership)</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>Maris Stella High School</h3>
                <span className="timeline-date">2012 - 2015</span>
                <p>
                  English, Comb (geog/ss), Comb (chem/phy), Pure bio, A-Maths,
                  E-Maths
                </p>
                <p>L1R5 10</p>
              </div>
            </div>
          </div>
        </section>

        <section className="doing-section">
          <h2>Personal development goals</h2>
          <div className="doing-grid">
            <div className="doing-card">
              <h3>Machine Learning</h3>
              <p>
                Training and deploying content and behaviour models to regulate
                content safety
              </p>
            </div>
            <div className="doing-card">
              <h3>Data Science</h3>
              <p>
                Extracting insights from complex datasets using statistical
                analysis, machine learning, and data visualization to drive
                decision-making and business impact.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
