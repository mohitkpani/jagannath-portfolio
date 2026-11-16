
import React from "react";
import {
    Code2,
    Lightbulb,
    Rocket,
    GraduationCap
} from "lucide-react";

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="section-container">

                <div className="section-heading">
                    <p>GET TO KNOW ME</p>
                    <h2>About <span>Me</span></h2>
                    <div className="heading-line"></div>
                </div>

                <div className="about-container">

                    <div className="about-content">

                        <h3>
                            Passionate Developer,
                            <span> Lifelong Learner.</span>
                        </h3>

                        <p>
                            Hello! I'm Jagannath Tripathy, an aspiring
                            Software Developer with a background in
                            Electrical and Electronics Engineering.
                        </p>

                        <p>
                            I have developed an interest in software
                            development and have been learning technologies
                            including Java, Spring Boot, MySQL, MongoDB,
                            HTML, CSS, JavaScript and React.
                        </p>

                        <p>
                            I enjoy exploring new technologies, improving
                            my programming skills and learning how to
                            build useful software applications.
                        </p>

                        <p>
                            I am currently looking forward to starting
                            my professional journey in the software
                            development industry.
                        </p>

                    </div>

                    <div className="about-cards">

                        <div className="about-card">
                            <div className="about-icon">
                                <Code2 size={25} />
                            </div>
                            <h4>Development</h4>
                            <p>Learning modern frontend and backend technologies.</p>
                        </div>

                        <div className="about-card">
                            <div className="about-icon">
                                <Lightbulb size={25} />
                            </div>
                            <h4>Problem Solving</h4>
                            <p>Building logical thinking and coding skills.</p>
                        </div>

                        <div className="about-card">
                            <div className="about-icon">
                                <Rocket size={25} />
                            </div>
                            <h4>Innovation</h4>
                            <p>Exploring ideas and learning new technologies.</p>
                        </div>

                        <div className="about-card">
                            <div className="about-icon">
                                <GraduationCap size={25} />
                            </div>
                            <h4>Education</h4>
                            <p>Electrical and Electronics Engineering graduate.</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
