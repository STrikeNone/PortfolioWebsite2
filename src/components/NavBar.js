import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
