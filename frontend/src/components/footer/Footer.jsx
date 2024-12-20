import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            eius maxime recusandae ut delectus ratione ea! Ad iusto laboriosam
            voluptas nostrum neque totam veniam! Dolorum quo accusamus est
            cumque dolores!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><a href="#navbar">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Delivery</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 8606838208</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
       Developed by ARUNLAL TO, Copyright 2025 © ARUNLAL TO - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
