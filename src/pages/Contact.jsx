import { useState } from "react";
import { Send, Mail, MapPin, Github, Linkedin } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState(""); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // CHANGE: Replace with your actual form submission logic
    // Options: FormSpree, Netlify Forms, your own backend, etc.
    try {
      // Example: Using FormSpree (uncomment and add your FormSpree endpoint)
      // const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData)
      // });
      // if (!response.ok) throw new Error("Failed to send");

      // Simulated delay for demo
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <div className="contact">
      <div className="contact-container">
        {/* CHANGE: Update heading */}
        <section className="contact-header">
          <h1>Get in touch</h1>
          <p>Have a question or want to work together? Send me a message.</p>
        </section>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              "Sending..."
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>

          {/* Status Messages */}
          {status === "success" && (
            <div className="status-message success">
              Message sent successfully!
            </div>
          )}
          {status === "error" && (
            <div className="status-message error">
              Failed to send. Please try again.
            </div>
          )}
        </form>

        {/* CHANGE: Update contact info and social links */}
        <div className="contact-info">
          <div className="info-item">
            <Mail size={16} />
            <a href="mailto:poudyalaaradhya@gmail.com">poudyalaaradhya@gmail.com</a>
          </div>
          <div className="info-item">
            <MapPin size={16} />
            <span>California, USA</span>
          </div>
        </div>

        <div className="contact-socials">
          <a
            href="https://github.com/AaradhyaGitHub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/aaradhya-poudyal-202020/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}