import React, { useState } from "react";
import { Link } from "react-router-dom"; // <- Import Link
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.svg";
import '../NavBar/Navbar.css'
import { NavLink } from "react-router-dom";


export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-transparent" style={{paddingTop:'32px'}}>
                <div className="container position-relative" style={{height:'64px'}}>
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
                    <div
                        className={`collapse navbar-collapse justify-content-center ${menuOpen ? "show" : ""
                            }`}
                    >
                        <ul className="navbar-nav text-center">
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        "nav-link px-3 " + (isActive ? "active-link" : "text-white")
                                    }
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        "nav-link px-3 " + (isActive ? "active-link" : "text-white")
                                    }
                                    to="/about"
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        "nav-link px-3 " + (isActive ? "active-link" : "text-white")
                                    }
                                    to="/warriors"
                                >
                                    Warriors
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        "nav-link px-3 " + (isActive ? "active-link" : "text-white")
                                    }
                                    to="/contact"
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>

                    </div>

                    {/* Book Now button */}
                    <div className="position-absolute end-0 top-0 mt-2 me-3 d-none d-lg-block">
                        <button  style={{width:'154px',height:'44px',borderRadius:'8px',backgroundColor:'#F57921',color:'#fff',border:'none'}}>Book Now</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}
