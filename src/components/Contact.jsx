
import React, { useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Code2,
    Send
} from "lucide-react";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState("");
    const [statusType, setStatusType] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setStatus("");
        setStatusType("");

        try {
            const response = await fetch(
                "https://formspree.io/f/mvkaklvd",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify(form)
                }
            );

            if (response.ok) {
                setStatus(
                    "Message sent successfully! I'll get back to you soon."
                );
                setStatusType("success");

                setForm({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
            } else {
                setStatus(
                    "Unable to send your message. Please try again."
                );
                setStatusType("error");
            }

        } catch (error) {
            setStatus(
                "Something went wrong. Please check your connection and try again."
            );
            setStatusType("error");

        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact section" id="contact">

            <div className="section-container">

                {/* SECTION HEADING */}
                <div className="section-heading">
                    <p>GET IN TOUCH</p>
                    <h2>
                        Contact <span>Me</span>
                    </h2>
                    <div className="heading-line"></div>
                </div>

                <div className="contact-container">

                    {/* CONTACT INFORMATION */}
                    <div className="contact-info">

                        <h3>Let's work together</h3>

                        <p className="contact-description">
                            Have an opportunity or want to connect?
                            Feel free to reach out. I'd love to hear from you!
                        </p>

                        {/* EMAIL */}
                        <div className="contact-item">
                            <div className="contact-icon">
                                <Mail size={22} />
                            </div>

                            <div>
                                <h4>Email</h4>
                                <a href="mailto:jagannathtripathy40@gmail.com">
                                    jagannathtripathy40@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* PHONE */}
                        <div className="contact-item">
                            <div className="contact-icon">
                                <Phone size={22} />
                            </div>

                            <div>
                                <h4>Phone</h4>
                                <a href="tel:7008068662">
                                    +91 7008068662
                                </a>
                            </div>
                        </div>

                        {/* LOCATION */}
                        <div className="contact-item">
                            <div className="contact-icon">
                                <MapPin size={22} />
                            </div>

                            <div>
                                <h4>Location</h4>
                                <p>Rourkela, Odisha, India</p>
                            </div>
                        </div>

                        {/* GITHUB */}
                        <div className="contact-item">
                            <div className="contact-icon">
                                <Code2 size={22} />
                            </div>

                            <div>
                                <h4>GitHub</h4>
                                <a
                                    href="https://github.com/jagannathtripathy40-spec"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View GitHub Profile
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* CONTACT FORM */}
                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <h3>Send Me a Message</h3>

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={form.subject}
                            onChange={handleChange}
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            value={form.message}
                            onChange={handleChange}
                            required
                        />

                        {/* SUBMIT BUTTON */}
                        <button
                            type="submit"
                            className="send-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting
                                ? "Sending..."
                                : "Send Message"
                            }

                            <Send size={18} />
                        </button>

                        {/* SUCCESS / ERROR MESSAGE */}
                        {status && (
                            <p
                                className={`form-status ${statusType}`}
                                role="status"
                                aria-live="polite"
                            >
                                {status}
                            </p>
                        )}

                    </form>

                </div>

            </div>

        </section>
    );
};

export default Contact;
