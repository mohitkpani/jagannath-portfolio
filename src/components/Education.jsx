
import React from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";

const educationData = [
    {
        degree: "B.Tech in Electrical and Electronics Engineering",
        institution: "Centurion University of Technology and Management",
        year: "2025",
        score: "67.9%",
        type: "Bachelor's Degree"
    },
    {
        degree: "Diploma in Electrical Engineering",
        institution: "KIIT University",
        year: "2025",
        score: "80.3%",
        type: "Diploma"
    }
];

const Education = () => {
    return (
        <section className="education section" id="education">
            <div className="section-container">

                {/* SECTION HEADING */}
                <div className="section-heading">
                    <p>MY ACADEMIC JOURNEY</p>
                    <h2>My <span>Education</span></h2>
                    <div className="heading-line"></div>
                </div>

                {/* EDUCATION CARDS */}
                <div className="education-list">

                    {educationData.map((item, index) => (
                        <div className="education-card" key={index}>

                            <div className="education-icon">
                                <GraduationCap size={28} />
                            </div>

                            <div className="education-details">

                                <span className="education-type">
                                    {item.type}
                                </span>

                                <h3>{item.degree}</h3>

                                <p className="education-institution">
                                    {item.institution}
                                </p>

                                <div className="education-meta">

                                    <span>
                                        <Calendar size={16} />
                                        {item.year}
                                    </span>

                                    <span>
                                        <Award size={16} />
                                        {item.score}
                                    </span>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Education;
