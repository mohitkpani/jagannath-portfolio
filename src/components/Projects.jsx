
import React from "react";
import { Code2, ArrowUpRight } from "lucide-react";

const Projects = () => {
    return (
        <section className="projects section" id="projects">
            <div className="section-container">

                {/* SECTION HEADING */}
                <div className="section-heading">
                    <p>MY WORK</p>
                    <h2>My <span>Projects</span></h2>
                    <div className="heading-line"></div>
                </div>

                {/* PROJECT CONTENT */}
                <div className="projects-content">

                    <div className="projects-icon">
                        <Code2 size={45} />
                    </div>

                    <h3>Building Something Amazing!</h3>

                    <p>
                        I'm currently learning and improving my software
                        development skills. New projects and creative
                        ideas are on their way.
                    </p>

                    <a
                        href="https://github.com/jagannathtripathy40-spec"
                        target="_blank"
                        rel="noreferrer"
                        className="github-btn"
                    >
                        <Code2 size={20} />
                        Explore My GitHub
                        <ArrowUpRight size={18} />
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Projects;
