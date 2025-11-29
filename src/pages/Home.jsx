// @ts-nocheck
import { useState, useEffect } from "react";
import {
  Play,
  Pause,
  Github,
  Linkedin,
  Youtube,
  Instagram,
  Mail,
  MapPin,
  ArrowDown,
  FileText,
  Download
} from "lucide-react";
import { Link } from "react-router-dom";
import FeaturedProjects from "../components/featuredProducts/FeaturedProjects";
import "./home.css";

import resumePDF from "../assets/AaradhyaResume.pdf";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showLoadingBar, setShowLoadingBar] = useState(true);
  const [showCredit, setShowCredit] = useState(false);
  const [phase, setPhase] = useState("typing"); // typing, moving, complete
  const [animationEnabled, setAnimationEnabled] = useState(true);

  const fullText =
    "Programming can be the bridge between imagination and reality";

  // Resume paths - update these with your actual resume URL
  const RESUME_URL = resumePDF;

  const skipAnimation = () => {
    setTypedText(fullText);
    setShowCredit(true);
    setShowLoadingBar(false);
    setPhase("complete");
    setLoadingProgress(100);
    setAnimationEnabled(false);
  };

  const replayAnimation = () => {
    setTypedText("");
    setShowCredit(false);
    setShowLoadingBar(true);
    setPhase("typing");
    setLoadingProgress(0);
    setAnimationEnabled(true);
  };

  useEffect(() => {
    if (!animationEnabled) return;

    setTypedText("");
    setShowCredit(false);
    setShowLoadingBar(true);
    setPhase("typing");
    setLoadingProgress(0);

    let index = 0;
    const typingTimer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        setLoadingProgress((index / fullText.length) * 100);
        index++;
      } else {
        clearInterval(typingTimer);
        setTimeout(() => {
          setLoadingProgress(100);
          setTimeout(() => {
            setShowLoadingBar(false);
            setShowCredit(true);
            setTimeout(() => {
              setPhase("moving");
              setTimeout(() => setPhase("complete"), 800);
            }, 400);
          }, 200);
        }, 150);
      }
    }, 45);

    return () => clearInterval(typingTimer);
  }, [animationEnabled]);

  const renderQuote = () => {
    const words = typedText.split(" ");
    return words.map((word, i) => {
      const isHighlight = word === "imagination" || word === "reality";
      return (
        <span key={i} className={isHighlight ? "quote-highlight" : ""}>
          {word}{" "}
        </span>
      );
    });
  };

  return (
    <div className="home">
      {/* Skip/Play Button */}
      <button
        onClick={animationEnabled ? skipAnimation : replayAnimation}
        className="home-toggle-btn"
      >
        {animationEnabled ? <Pause size={16} /> : <Play size={16} />}
        <span>{animationEnabled ? "Skip" : "Replay"}</span>
      </button>

      {/* Quote Section */}
      <section className={`quote-section quote-${phase}`}>
        <blockquote className="quote-box">
          <p className="quote-text">
            "{renderQuote()}
            {phase === "typing" && animationEnabled && (
              <span className="quote-cursor">|</span>
            )}
            "
          </p>
          {showCredit && <cite className="quote-credit">— Mr. Lindsay</cite>}
        </blockquote>

        {phase === "typing" && showLoadingBar && animationEnabled && (
          <div className="quote-loading">
            <div
              className="quote-loading-bar"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        )}
      </section>

      {/* Main Content */}
      {phase === "complete" && (
        <div className="home-content">
          {/* Hero Section - Clean & Minimal */}
          <section className="hero">
            <div className="hero-layout">
              {/* Profile Image */}
              <div className="hero-image-wrapper">
                <div className="hero-image">
                  <img
                    src="https://res.cloudinary.com/de3cxnkuw/image/upload/v1764282723/DSCF2725_3_li9qby.jpg"
                    alt="Aaradhya"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="hero-image-fallback">AP</div>
                </div>
              </div>

              {/* Info */}
              <div className="hero-info">
                <div className="hero-name-group">
                  <h1 className="hero-name">Aaradhya</h1>
                  <span className="hero-nepali">आराध्य</span>
                </div>

                <p className="hero-role">Developer & Creator</p>

                <p className="hero-location">
                  <MapPin size={14} />
                  <span>California, USA</span>
                </p>

                <p className="hero-bio">
                  I build things for the web and mobile. Passionate about
                  turning data into applications.
                </p>

                {/* Social Links */}
                <div className="hero-socials">
                  <a
                    href="https://github.com/AaradhyaGitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aaradhya-poudyal-202020/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:poudyalaaradhya@gmail.com"
                    className="social-link"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href="https://www.youtube.com/@Aaradhyapoudyal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Youtube"
                  >
                    <Youtube size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>

                {/* Resume Buttons */}
                <div className="hero-actions">
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <FileText size={16} />
                    <span>View Resume</span>
                  </a>
                  <a
                    href={RESUME_URL}
                    download="Aaradhya_Poudyal_Resume.pdf"
                    className="btn-outline"
                  >
                    <Download size={16} />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="section-divider" />

          {/* Featured Projects */}
          <FeaturedProjects />

          {/* Divider */}
          <div className="section-divider" />

          {/* Currently Working On - Simple */}
          <section className="current-work">
            <h2 className="section-label">Currently</h2>
            <div className="current-item">
              <span className="current-status" />
              <div className="current-info">
                <h3>FlowBook v-3.75 completed</h3>
                <p>
                  Finishing the React Native BJJ tracker—spider graphs, polished
                  dashboard, and getting 75 real users.
                </p>
                <p>
                  <a
                    href="https://res.cloudinary.com/de3cxnkuw/video/upload/v1764224702/FlowBook-v4-demo_xjcbnw.mp4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong> View Demo</strong>
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
