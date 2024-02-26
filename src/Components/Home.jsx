import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Home.css";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="logo">
        <img
          src="https://launcheazy.com/_next/image?url=%2Flogo%2Flogo.png&w=256&q=75"
          alt=""
          srcSet=""
          width="60%"
        />
      </div>
      <div className={`nav_options ${menuOpen ? "open" : ""}`}>
        <ul className="nav__links">
          <li className="link">
            <Link to="/" smooth={true} onClick={toggleMenu}>
              AI Tools
            </Link>
          </li>
          <li className="link">
            <Link to="Product" smooth={true} onClick={toggleMenu}>
              Product
            </Link>
          </li>
          <li className="link">
            <Link to="resourses" smooth={true} onClick={toggleMenu}>
              Resources
            </Link>
          </li>
          <li className="link">
            <Link to="pricing" smooth={true} onClick={toggleMenu}>
              Pricing
            </Link>
          </li>
          <li className="link">
            <Link to="contact" smooth={true} onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
          <li className="link">
            <button className="btn_nav" type="button">
              Join the waitlist
            </button>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Home;
