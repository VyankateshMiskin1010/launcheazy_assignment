import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Home.css";
import menuIcon from "./Img/Hammerburger_Icon.png";
import logo from "./Img/Nav_Logo.png";
import Btn from "./Button";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navvv">
      <nav className={` container navbar ${menuOpen ? "open" : ""}`}>
        <div className="logo">
          <img src={logo} alt="" srcSet="" width="152px" />
        </div>
        <div className={`nav_options ${menuOpen ? "open" : ""}`}>
          <ul className="nav__links">
            <li className="link">
              <Link to="aiTools" smooth={true} onClick={toggleMenu}>
                AI Tools
              </Link>
            </li>
            <li className="link">
              <Link to="product" smooth={true} onClick={toggleMenu}>
                Product
              </Link>
            </li>
            <li className="link">
              <Link to="resources" smooth={true} onClick={toggleMenu}>
                Resources
              </Link>
            </li>
            <li className="link">
              <Link to="pricing" smooth={true} onClick={toggleMenu}>
                Pricing
              </Link>
            </li>
            <li className="link">
              <Link to="footer" smooth={true} onClick={toggleMenu}>
                Contact Us
              </Link>
            </li>
            <li className="link">
              <Btn />
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <img src={menuIcon} alt="" srcSet="" height="100%" />
        </div>
      </nav>
    </div>
  );
}

export default Home;
