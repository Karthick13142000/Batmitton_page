import React from "react";
import "../Footer/Footer.css";
import logo from "../../assets/logo1.svg";
import instagram from "../../assets/Instagram.svg";
import whatsapp from "../../assets/Whatsapp.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-col">
          <img src={logo} alt="Feathers Sports" className="footer-logo" />
          <p>
          <span style={{color:'#F57921',fontWeight:'800'}}> Feathers Sports</span> Forging disciplined, high-performance<br></br> badminton athletes in Dubai.
          </p>

          <div className="social-icons">
            <img src={instagram} alt="Instagram" />
            <img src={whatsapp} alt="WhatsApp" />
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="footer-col">
          <h4>Quick Navigation</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Warriors</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Reach Us */}
        <div className="footer-col">
          <h4>Reach Us</h4>
          <ul>
            <li>Location</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
