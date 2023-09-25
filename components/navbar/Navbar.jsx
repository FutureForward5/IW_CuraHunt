"use client";

import { logo } from "@/assets";
import Image from "next/image";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-container">
      <header className="header-style">
        <nav className="nav-first">
          <div className="logo-image">
            <Image src={logo} alt="logo" />
          </div>
          <div className="nav-second">
            <div className="login">
              <i className="fas fa-user icon"></i>
              <button className="login-btn">
                <a href="#">Login</a>
              </button>
            </div>
            <div className="mobile-nav-btn" onClick={toggle}>
              <i className="fas fa-bars mobile-icon"></i>
            </div>
          </div>
        </nav>
      </header>

      <nav className="navbar">
        <div className="desktop-navbar">
          <ul>
            <li>
              <a href="#">Doctor</a>
            </li>
            <li>
              <a href="#">Hospital</a>
            </li>
            <li>
              <a href="#">Specialist</a>
            </li>
            <li>
              <a href="#">Lab Test</a>
            </li>
            <li>
              <a href="#">Operation</a>
            </li>
            <li>
              <a href="#">Verified</a>
            </li>
            <li>
              <a href="#">HealthyRemedies</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className={`drop-down-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#">Doctor</a>
          </li>
          <li>
            <a href="#">Hospital</a>
          </li>
          <li>
            <a href="#">Specialist</a>
          </li>
          <li>
            <a href="#">Lab Test</a>
          </li>
          <li>
            <a href="#">Operation</a>
          </li>
          <li>
            <a href="#">Verified</a>
          </li>
          <li>
            <a href="#">HealthyRemedies</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
