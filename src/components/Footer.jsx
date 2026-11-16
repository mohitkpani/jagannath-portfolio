
import React from "react";
import { Code2, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-top">

                    <div className="footer-brand">
                        <a href="#home" className="footer-logo">
                            J<span>.</span>
                        </a>

                        <h3>Jagannath Tripathy</h3>

                        <p>
                            Aspiring Software Developer passionate about
                            learning, building and creating useful applications.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>

                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="footer-social">
                        <h4>Connect With Me</h4>

                        <a
                            href="https://github.com/jagannathtripathy40-spec"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Code2 size={19} />
                            GitHub
                        </a>

                        <a href="mailto:jagannathtripathy40@gmail.com">
                            <Mail size={19} />
                            Email
                        </a>
                    </div>

                </div>

                <div className="footer-bottom">

                    <p>
                        © {currentYear} Jagannath Tripathy.
                        All rights reserved.
                    </p>

                    <p className="footer-made">
                        Built with <Code2 size={15} /> using React
                    </p>

                    <a href="#home" className="back-to-top" aria-label="Back to top">
                        <ArrowUp size={20} />
                    </a>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
