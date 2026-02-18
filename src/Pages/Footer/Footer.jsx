import React from "react";
import { Link, useNavigate } from "react-router-dom";   // 👈 Import Link
import "../Footer/Footer.css";
import logo from "../../assets/logo1.svg";
import instagram from "../../assets/Instagram.svg";
import whatsapp from "../../assets/Whatsapp.svg";

const Footer = () => {
  const navigate = useNavigate();
  const handleBookNow = (e) => {
    e.preventDefault();
    navigate("/contact", { state: { scrollTo: "map" } });
  };
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-col">
          <img src={logo} alt="Feathers Sports" className="footer-logo" />
          <p>
            <span style={{ color: '#F57921', fontWeight: '800' }}>
              Feathers Sports
            </span>{" "}
            Forging disciplined, high-performance
            <br />
            badminton athletes in Dubai.
          </p>

          <div className="social-icons">
            <a href="https://www.instagram.com/featherssports_llc/" target="_blank"> <img src={instagram} alt="Instagram" /></a>
            <a href="https://wa.me/971521140123"
              target="_blank"
              rel="noopener noreferrer"> <img src={whatsapp} alt="WhatsApp" /></a> 
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="footer-col">
          <h4>Quick Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/warriors">Warriors</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Reach Us */}
        <div className="footer-col">
          <h4>Reach Us</h4>
          <ul>
            <li onClick={handleBookNow}>Location</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
