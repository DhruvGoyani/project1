import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div className="main-header">
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                        <i className="bi bi-phone" /> +91 9988776655
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                    </div>
                </div>
            </div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <div className="logo">
                        <a href="index.html">
                            <h1 className="logo me-auto">City</h1><br />
                            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                        </a>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li>
                                <NavLink to={"/"} className="nav-link scrollto active">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/department"} className="nav-link scrollto">Department</NavLink>
                                </li>
                                <li>
                                <NavLink to={"/medicines"} className="nav-link scrollto">Medicines</NavLink>
                                </li> 
                            <li>
                                <NavLink to={"/doctors"} className="nav-link scrollto" >Doctors</NavLink>
                                </li>
                            <li>
                                <NavLink to={"/about"} className="nav-link scrollto">About</NavLink>
                                </li>
                            <li>
                                <NavLink to={"/contact"} className="nav-link scrollto" >Contact</NavLink>
                                </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    <NavLink href="./pages/appointment.html" to={"/appointment"} className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
                        Appointment</NavLink>
                    <NavLink to={"/auth1"} href="#" className="appointment-btn scrollto">
                        <span className="d-none d-md-inline">Login/ Signup</span>
                    </NavLink>
                </div>
            </header>
        </div>

    );
}

export default Header;