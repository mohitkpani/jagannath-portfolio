
import React, { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Education", href: "#education" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="navbar">
            <div className="nav-container">

                {/* LOGO */}
                <a href="#home" className="nav-logo">
                    J<span>.</span>
                </a>

                {/* NAVIGATION LINKS */}
                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* RESUME BUTTON */}
                <a
                    href="/resume.pdf"
                    className="resume-btn"
                    download
                >
                    Resume <Download size={16} />
                </a>

                {/* MOBILE MENU */}
                <button
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

            </div>
        </nav>
    );
};

export default Navbar;
