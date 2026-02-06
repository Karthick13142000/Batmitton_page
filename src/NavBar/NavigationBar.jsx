import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.svg";
import "../NavBar/Navbar.css";

export default function NavigationBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    return (
        <nav
            className="navbar navbar-expand-lg fixed-top navbar-transparent"
            style={{ paddingTop: "32px" }}
        >
            <div className="container position-relative" style={{ height: "64px" }}>

                {/* Logo */}
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src={logo} alt="Feathers Logo" height="32" />
                </Link>

                {/* Hamburger */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav Links */}
                <div className={`navbar-collapse top-drawer ${menuOpen ? "open" : ""}`}>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active-link" : ""}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active-link" : ""}`
                                }
                            >
                                About Us
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/warriors"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active-link" : ""}`
                                }
                            >
                                Warriors
                            </NavLink>

                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active-link" : ""}`
                                }
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Book Now */}
                <div className="position-absolute end-0 top-0 mt-2 me-3 d-none d-lg-block">
                    <button className="book-btn">Book Now</button>
                </div>
            </div>
        </nav>
    );
}
