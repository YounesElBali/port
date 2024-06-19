import  { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navmenu.css";
import {  HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import AuthorizeView from '../Authentication/AuthorizeView';


function NavMenu() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink  to="/" className="nav-logo">
                        <span>Moskee Arrahman</span>
                    </NavLink>

                    <ul className={collapsed ? "nav-menu" : "nav-menu active"}>
                        <li className="nav-item">
                            <NavLink
                                
                                to="/donatie"
                                activeClassName="active"
                                className="nav-links"
                                onClick={toggleNavbar}
                            >
                                Steun ons
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                
                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={toggleNavbar}
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                
                                to="/student"
                                activeClassName="active"
                                className="nav-links"
                                onClick={toggleNavbar}
                            >
                                leerlingen
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                
                                to="/meerLeren"
                                activeClassName="active"
                                className="nav-links"
                                onClick={toggleNavbar}
                            >
                                Bekeerlingen
                            </NavLink>
                        </li>
                            <AuthorizeView>                   
                            <li className="nav-item">
                                <NavLink
                                    
                                    to="/logout"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={toggleNavbar}
                                >
                                    Log out
                                </NavLink>
                            </li>
                        </AuthorizeView>
                    </ul>
                    <div className="nav-icon" onClick={toggleNavbar}>
                        {collapsed ? (
                            <span className="icon">
                                <HamburgetMenuOpen />
                            </span>
                        ) : (
                            <span className="icon">
                                <HamburgetMenuClose />
                            </span>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavMenu;
