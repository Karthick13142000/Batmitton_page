import { useState } from "react";
import { NavLink } from "react-router-dom";
import ScrollToTop from "../../Scroll_Arrow/ScrollToTop";
import "../Contact Us/Contact.css";
import phone from "../../assets/call.svg";
import mobile from "../../assets/mobile.svg";
import Address from "../../assets/location_on.svg";
import Email from "../../assets/mail.svg";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function Contact() {
    const [activeLocation, setActiveLocation] = useState("loc2");
const location = useLocation();
const formRef = useRef(null);
const mapRef = useRef(null);


    const locations = {
        // loc1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7048914845386!2d55.364645374840194!3d25.280510928322173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c5c80ae33bf%3A0x9d8c2b8a8fd30a8!2sAmity%20School%20Dubai!5e0!3m2!1sen!2sin!4v1769878833095!5m2!1sen!2sin",
        loc2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14427.421341725352!2d55.4300556952889!3d25.309064040413826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5edbeb14fb59%3A0x1297d0079a09c4ba!2sIndustrial%20Area%2013%20-%20Sharjah!5e0!3m2!1sen!2sin!4v1769878889896!5m2!1sen!2sin"
    };
useEffect(() => {
  if (!location.state?.scrollTo) return;

  setTimeout(() => {
    if (location.state.scrollTo === "form" && formRef.current) {
      formRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (location.state.scrollTo === "map" && mapRef.current) {
      mapRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 100);
}, [location]);

    return (
        <div>
            <ScrollToTop />
            <section className="hero-section1">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1 style={{ fontSize: '70px', color: '#F57921', fontFamily: 'charm' }}>Contact  US</h1>
                    <NavLink
                        to="/"
                        style={({ isActive }) => ({
                            fontFamily: 'Charm',
                            color: isActive ? '#fff' : '#9E9E9E',
                        })}
                    >
                        Home /
                    </NavLink>

                    <NavLink
                        to="/contact"
                        style={({ isActive }) => ({
                            fontFamily: 'Charm',
                            color: isActive ? '#fff' : '#9E9E9E',
                        })}
                    >
                        Contact Us
                    </NavLink>

                </div>
            </section>
            {/* sec2 */}
            <div className="corkcontact"></div>
            <section>
                <div className="container-fluid contactcontainer" >
                    <div>
                        <h1 style={{ fontSize: '36px', fontWeight: '700', color: '#F57921' }}>Let’s Talk Badminton, <br></br>Growth & Goals</h1>
                        <p style={{ fontSize: '20px', fontWeight: '300', color: '#F57921' }}>Our team is always here to support your journey—whether you're booking a<br></br> session, exploring our programs, or simply curious.</p>
                    </div>
                </div>
            </section>
            {/* sec3 */}
            <section className="contact-section">
                <div className="container">
                    <div className="row align-items-start">

                        {/* LEFT */}
                        <div className="col-lg-6 contact-left" >

                            <div className="contact-item">
                                <div className="icon-box">
                                    <img src={phone} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', }}>
                                    <h1 style={{ color: '#333333', fontSize: '16px' }}>Telephone</h1>
                                    <p>055 491 069</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon-box">
                                    <img src={mobile} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', }}>
                                    <h1 style={{ color: '#333333', fontSize: '16px' }}>Mobile</h1>
                                    <p>+971 54 449 1069</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon-box">
                                    <img src={Address} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', }}>
                                    <h1 style={{ color: '#333333', fontSize: '16px' }}>Address</h1>
                                    <ul>
                                        <li>Industrial Area 13, Sharjah</li>
                                        <li>School Zone - Al Qusais - Dubai</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon-box">
                                    <img src={Email} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', }}>
                                    <h1 style={{ color: '#333333', fontSize: '16px' }}>Email</h1>
                                    <p>featherssportsuae@gmail.com</p>
                                </div>
                            </div>

                        </div>

                        {/* RIGHT */}
                        <div className="col-lg-6 contact-right">
                            <div className="contact-form-box" ref={formRef}>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label style={{ fontSize: '16px', color: '#4A4A4A', fontWeight: '500' }}>Name</label>
                                        <input placeholder="Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <label style={{ fontSize: '16px', color: '#4A4A4A', fontWeight: '500' }}>Email</label>

                                        <input placeholder="Email" />
                                    </div>
                                </div>

                                <div>
                                    <label style={{ fontSize: '16px', color: '#4A4A4A', fontWeight: '500' }}>Phone Number</label>
                                    <input placeholder="Phone Number" />
                                </div>
                                <div>
                                    <label style={{ fontSize: '16px', color: '#4A4A4A', fontWeight: '500' }}>Message</label>
                                    <textarea rows="4" placeholder="Message"></textarea>
                                </div>

                                <button className="submit-btn">Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* sec4 */}
            <section>
                <div
                    className="container-fluid"
                    style={{ marginTop: "100px", padding: "0 50px" }}
                     ref={mapRef}
                >
                    {/* Location Tabs */}
                    <div style={{ marginBottom: "12px" }}>
                        {/* <button
                            onClick={() => setActiveLocation("loc1")}
                            style={{
                                padding: "6px 14px",
                                marginRight: "8px",
                                borderRadius: "6px",
                                border: "none",
                                cursor: "pointer",
                                backgroundColor:
                                    activeLocation === "loc1" ? "#F57921" : "#eee",
                                color: activeLocation === "loc1" ? "#fff" : "#000",
                            }}
                        >
                            Location 1
                        </button> */}

                        <button
                            onClick={() => setActiveLocation("loc2")}
                            style={{
                                padding: "6px 14px",
                                borderRadius: "6px",
                                border: "none",
                                cursor: "pointer",
                                backgroundColor:
                                    activeLocation === "loc2" ? "#F57921" : "#eee",
                                color: activeLocation === "loc2" ? "#fff" : "#000",
                            }}
                        >
                            Location 2
                        </button>
                    </div>

                    {/* Map */}
                    <div
                        style={{
                            border: "1px solid ##666666",
                            borderRadius: "10px",
                            overflow: "hidden",
                        }}
                    >
                        <iframe
                            key={activeLocation}
                            src={locations[activeLocation]}
                            width="100%"
                            height="605"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                        />

                    </div>
                </div>
            </section>
            {/*footer */}
            <Footer />
        </div>
    )
}