import React from "react";
import "./Footer.css"; // Import your CSS file for styling
import logo from "./Img/logo.png";
import fb from "./Img/footer_fb.png";
import linkedin from "./Img/footer_Linkedin.png";
import mail from "./Img/footer_mail.png";
import insta from "./Img/footer_Insta.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_right">
          <div className="logo_footer">
            <img src={logo} alt="" srcset="" />
          </div>
          <div className="logo_desc">
            <p>Engage customers, convert prospects effortlessly</p>
          </div>
          <div className="footer_media_icons">
            <Link href="">
              <img src={linkedin} alt="" srcset="" />
            </Link>
            <Link href="">
              <img src={fb} alt="" srcset="" />
            </Link>
            <Link href="">
              <img src={insta} alt="" srcset="" />
            </Link>
            <Link href="">
              <img src={mail} alt="" srcset="" />
            </Link>
          </div>
        </div>
        <div className="footer_left">
          <div className="footer_left_first">
            <ul>
              <li style={{ color: "#6F6F6F" }}>AI Tools</li>
              <li>ChatGPT Prompts</li>
              <li>AI Tools Directory</li>
              <li>AI QR Generator</li>
            </ul>
          </div>
          <div className="footer_left_second">
            <ul>
              <li style={{ color: "#6F6F6F" }}>Resources</li>
              <li>Marketplace</li>
              <li>Blogs</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div className="footer_left_third">
            <ul>
              <li style={{ color: "#6F6F6F" }}>Company</li>
              <li>About Us</li>
              <li>Pricing</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_newsletter">
        <div className="footer_newsletter_right">
          <p>NEWSLETTER</p>
          <h1>
            The AI Launch<span style={{ color: "#2196F3" }}>pad</span>
          </h1>
          <p>
            Receive must-read articles and trends on marketing and artificial
            intelligence, from leading publications in your inbox.
          </p>
        </div>
        <div className="footer_newsletter_left">
          <div className="footer_third">
            <input type="text" placeholder="Enter your work email" />
            <button>Join the waitlist</button>
            <p>
              By signing up, you are agreeing to our{" "}
              <span style={{ color: "#4589FF" }}>privacy statement.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="copy_rights">
        <div className="copy_right">
          <p>
            Copyright 2023 Launcheazy AI Private Limited. All rights reserved.
          </p>
        </div>
        <div className="copy_left">
          <p>
            Privacy Policy <span style={{ fontSize: "1.6rem" }}>|</span> Terms
            of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
