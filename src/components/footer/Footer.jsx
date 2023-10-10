import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <NavLink to={'/'} style={{ color: '#fff', textDecoration: 'none' }}>
                        <li className="menuItem">Terms Of Use</li>
                    </NavLink>
                    <NavLink to={'/'} style={{ color: '#fff', textDecoration: 'none' }}>
                        <li className="menuItem">Privacy-Policy</li>
                    </NavLink>
                    <NavLink to={'/'} style={{ color: '#fff', textDecoration: 'none' }}>
                        <li className="menuItem">About</li>
                    </NavLink>
                    <NavLink to={'/'} style={{ color: '#fff', textDecoration: 'none' }}>
                        <li className="menuItem">Blog</li>
                    </NavLink>
                    <NavLink to={'/'} style={{ color: '#fff', textDecoration: 'none' }}>
                        <li className="menuItem">FAQ</li>
                    </NavLink>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    <NavLink to={'/'} style={{ color: '#fff' }}>
                        <span className="icon">
                            <FaFacebookF />
                        </span>
                    </NavLink>
                    <NavLink to={'/'} style={{ color: '#fff' }}>
                        <span className="icon">
                            <FaInstagram />
                        </span>
                    </NavLink>
                    <NavLink to={'/'} style={{ color: '#fff' }}>
                        <span className="icon">
                            <FaTwitter />
                        </span>
                    </NavLink>
                    <NavLink to={'/'} style={{ color: '#fff' }}>
                        <span className="icon">
                            <FaLinkedin />
                        </span>
                    </NavLink>

                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
