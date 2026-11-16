
import React from "react";
import {
    Code2,
    Users,
    Mail,
    ArrowUpRight,
} from "lucide-react";

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-container">

                {/* LEFT CONTENT */}
                <div className="hero-content">

                    <p className="hero-greeting">
                        <span></span> HELLO, I'M
                    </p>

                    <h1>
                        Jagannath
                        <br />
                        <span>Tripathy.</span>
                    </h1>

                    <h2>Software Developer</h2>

                    <p className="hero-description">
                        A passionate software developer focused on
                        building modern, responsive and user-friendly
                        applications. Always learning and exploring
                        new technologies.
                    </p>

                    {/* BUTTONS */}
                    <div className="hero-buttons">

                        <a href="#projects" className="primary-btn">
                            View Projects
                            <ArrowUpRight size={18} />
                        </a>

                        <a href="#contact" className="secondary-btn">
                            Contact Me
                        </a>

                    </div>

                    {/* SOCIAL LINKS */}
                    <div className="hero-socials">

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <Code2 size={21} />
                        </a>

                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <Users size={21} />
                        </a>

                        <a
                            href="mailto:example@gmail.com"
                            aria-label="Email"
                        >
                            <Mail size={21} />
                        </a>

                    </div>

                </div>

                {/* RIGHT PROFILE IMAGE */}
                <div className="hero-image">

                    <div className="image-glow"></div>

                    <div className="image-wrapper">
                        <img
                            src="/profile.png"
                            alt="Jagannath Tripathy"
                        />
                    </div>

                    {/* FLOATING CARD */}
                    <div className="floating-card">

                        <span>👨‍💻</span>

                        <div>
                            <strong>Software Developer</strong>
                            <p>Always Learning & Building</p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;
