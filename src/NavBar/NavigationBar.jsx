import React, { useState } from "react";
import { Link } from "react-router-dom"; // <- Import Link
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.svg";
import '../NavBar/Navbar.css'
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
const location = useLocation();

useEffect(() => {
  setMenuOpen(false);
}, [location]);
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-transparent" style={{ paddingTop: '32px' }}>
                <div className="container position-relative" style={{ height: '64px' }}>
                    {/* Logo */}
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img src={logo} alt="Feathers Logo" height="32" className="me-2" />
                    </Link>

                    {/* Hamburger button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Links */}
                    <div className={`navbar-collapse top-drawer ${menuOpen ? "open" : ""}`}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" onClick={() => setMenuOpen(false)}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" onClick={() => setMenuOpen(false)}>
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/warriors" onClick={() => setMenuOpen(false)}>
                                    Warriors
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact" onClick={() => setMenuOpen(false)}>
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>


                    {/* Book Now button */}
                    <div className="position-absolute end-0 top-0 mt-2 me-3 d-none d-lg-block">
                        <button style={{ width: '154px', height: '44px', borderRadius: '8px', backgroundColor: '#F57921', color: '#fff', border: 'none' }}>Book Now</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}
