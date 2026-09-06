import React, { useState } from "react";
import "./styles/navbar.css";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const { pathname } = useLocation()

    return (
        <nav className="navbar">
            <header className="navbar-logo">
                Sachin Bhadoriya
            </header>

            <ul
                className={`navbar-links ${menuOpen ? "active" : ""
                    }`}
            >
                <li>
                    <Link onClick={() => setMenuOpen(false)} to="#home" className={pathname === "#home" ? "active-link" : ""}>Home</Link>
                </li>

                <li>
                    <Link onClick={() => setMenuOpen(false)} to="#about" className={pathname === "#about" ? "active-link" : ""}>About</Link>
                </li>

                <li>
                    <Link onClick={() => setMenuOpen(false)} to="#skills" className={pathname === "#skills" ? "active-link" : ""}>Skills</Link>
                </li>

                <li>
                    <Link onClick={() => setMenuOpen(false)} to="#experience" className={pathname === "#experience" ? "active-link" : ""}>Experience</Link>
                </li>

                <li>
                    <Link onClick={() => setMenuOpen(false)} to="#projects" className={pathname === "#projects" ? "active-link" : ""}>Projects</Link>
                </li>

                <li>
                    <Link onClick={() => setMenuOpen(false)} to="#blogs" className={pathname === "#blogs" ? "active-link" : ""}>Blogs</Link>
                </li>

                <li>
                    <Link onClick={() => setMenuOpen(false)} to="#contact" className={pathname === "#contact" ? "active-link" : ""}>Contact</Link>
                </li>
            </ul>

            <div
                className={`navbar-menu ${menuOpen ? "active" : ""
                    }`}
                onClick={() =>
                    setMenuOpen(!menuOpen)
                }
            >
                {menuOpen ? <RxCross1 /> : <CiMenuFries />}
            </div>
        </nav>
    );
};

export default Navbar;