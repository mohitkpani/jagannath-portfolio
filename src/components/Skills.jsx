
import React from "react";
import {
    Code2,
    Globe,
    Database,
    Server,
    Braces
} from "lucide-react";

const skillGroups = [
    {
        title: "Programming Languages",
        icon: Code2,
        skills: ["Java", "JavaScript"]
    },
    {
        title: "Frontend Development",
        icon: Globe,
        skills: ["HTML", "CSS", "React"]
    },
    {
        title: "Backend Development",
        icon: Server,
        skills: ["Spring Boot"]
    },
    {
        title: "Databases",
        icon: Database,
        skills: ["MySQL", "MongoDB"]
    }
];

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <div className="section-container">

                <div className="section-heading">
                    <p>WHAT I WORK WITH</p>
                    <h2>Technical <span>Skills</span></h2>
                    <div className="heading-line"></div>
                </div>

                <div className="skills-grid">

                    {skillGroups.map((group, index) => {
                        const Icon = group.icon;

                        return (
                            <div className="skill-card" key={index}>

                                <div className="skill-card-header">
                                    <div className="skill-icon">
                                        <Icon size={25} />
                                    </div>

                                    <h3>{group.title}</h3>
                                </div>

                                <div className="skill-tags">
                                    {group.skills.map((skill) => (
                                        <span key={skill} className="skill-tag">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default Skills;
