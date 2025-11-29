// @ts-nocheck
import React, { useState } from "react";
import "./MobileProjectCard.css";
import {
  Github,
  ExternalLink,
  Play,
  ArrowLeft,
  Wifi,
  Battery,
  Signal,
  Code,
  Zap,
  BookOpen,
  ChevronRight,
  Sparkles
} from "lucide-react";

export default function MobileProjectCard({
  id,
  title,
  tagline,
  description,
  technologies,
  projectDetails,
  links,
  image
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Extract tech items for display
  const getTechItems = () => {
    if (!technologies) return [];
    const techs = [];
    const priority = [
      "framework",
      "frontend",
      "backend",
      "stateManagement",
      "ai",
      "apis",
      "navigation",
      "crossPlatform"
    ];
    for (const key of priority) {
      if (technologies[key]) {
        techs.push(...technologies[key]);
      }
    }
    return techs.slice(0, 8);
  };

  // Get how it works items
  const getHowItWorks = () => {
    if (!projectDetails?.howItWorks) return [];
    return projectDetails.howItWorks.slice(0, 4);
  };

  // Get key features
  const getKeyFeatures = () => {
    if (!projectDetails?.keyFeatures) return [];
    return projectDetails.keyFeatures.slice(0, 6);
  };

  // Render About Tab
  const renderAboutTab = () => (
    <div className="mpc-tab-content">
      <div className="mpc-app-header">
        {image ? (
          <img src={image} alt={title} className="mpc-app-icon" />
        ) : (
          <div className="mpc-app-icon-placeholder">
            <Sparkles size={24} />
          </div>
        )}
        <div className="mpc-app-header-info">
          <h2 className="mpc-app-title">{title}</h2>
          <p className="mpc-app-tagline">{tagline}</p>
        </div>
      </div>

      <div className="mpc-section">
        <h3 className="mpc-section-title">About</h3>
        <p className="mpc-section-text">
          {projectDetails?.backstory || description}
        </p>
      </div>

      <div className="mpc-section">
        <h3 className="mpc-section-title">Quick Links</h3>
        <div className="mpc-quick-links">
          {links?.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mpc-quick-link"
            >
              <Github size={18} />
              <span>Source Code</span>
              <ChevronRight size={16} className="mpc-chevron" />
            </a>
          )}
          {links?.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="mpc-quick-link"
            >
              <ExternalLink size={18} />
              <span>Live App</span>
              <ChevronRight size={16} className="mpc-chevron" />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  // Render Tech Tab
  const renderTechTab = () => (
    <div className="mpc-tab-content">
      <div className="mpc-section">
        <h3 className="mpc-section-title">Tech Stack</h3>
        <div className="mpc-tech-grid">
          {getTechItems().map((tech, index) => (
            <span key={index} className="mpc-tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mpc-section">
        <h3 className="mpc-section-title">How It Works</h3>
        <div className="mpc-how-it-works-list">
          {getHowItWorks().map((item, index) => (
            <div key={index} className="mpc-how-it-works-item">
              <span className="mpc-step-number">{index + 1}</span>
              <p className="mpc-step-text">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Render Features Tab
  const renderFeaturesTab = () => (
    <div className="mpc-tab-content">
      <div className="mpc-section">
        <h3 className="mpc-section-title">Key Features</h3>
        <div className="mpc-features-list">
          {getKeyFeatures().map((feature, index) => (
            <div key={index} className="mpc-feature-item">
              <div className="mpc-feature-bullet">
                <Zap size={12} />
              </div>
              <p className="mpc-feature-text">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {projectDetails?.whyItsDifferent && (
        <div className="mpc-section">
          <h3 className="mpc-section-title">What Makes It Different</h3>
          <div className="mpc-different-list">
            {projectDetails.whyItsDifferent.slice(0, 3).map((item, index) => (
              <p key={index} className="mpc-different-item">
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="mpc-card-wrapper">
      <div className={`mpc-phone-container ${isFlipped ? "mpc-flipped" : ""}`}>
        {/* ============ FRONT OF PHONE ============ */}
        <div className="mpc-phone-face">
          <div className="mpc-phone-frame">
            {/* Dynamic Island */}
            <div className="mpc-dynamic-island"></div>

            {/* Status Bar */}
            <div className="mpc-status-bar">
              <span className="mpc-time">9:41</span>
              <div className="mpc-status-icons">
                <Signal size={14} />
                <Wifi size={14} />
                <Battery size={14} />
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="mpc-tab-nav">
              <button
                className={`mpc-tab-btn ${
                  activeTab === "about" ? "mpc-active-tab" : ""
                }`}
                onClick={() => setActiveTab("about")}
              >
                <BookOpen size={16} />
                <span>About</span>
              </button>
              <button
                className={`mpc-tab-btn ${
                  activeTab === "tech" ? "mpc-active-tab" : ""
                }`}
                onClick={() => setActiveTab("tech")}
              >
                <Code size={16} />
                <span>Tech</span>
              </button>
              <button
                className={`mpc-tab-btn ${
                  activeTab === "features" ? "mpc-active-tab" : ""
                }`}
                onClick={() => setActiveTab("features")}
              >
                <Zap size={16} />
                <span>Features</span>
              </button>
            </div>

            {/* Content Area */}
            <div className="mpc-content-area">
              {activeTab === "about" && renderAboutTab()}
              {activeTab === "tech" && renderTechTab()}
              {activeTab === "features" && renderFeaturesTab()}
            </div>

            {/* Watch Demo Button */}
            <div className="mpc-demo-button-container">
              <button className="mpc-demo-button" onClick={handleFlip}>
                <Play size={18} />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Home Indicator */}
            <div className="mpc-home-indicator"></div>
          </div>
        </div>

        {/* ============ BACK OF PHONE (Demo Video) ============ */}
        <div className="mpc-phone-face mpc-phone-back">
          <div className="mpc-phone-frame">
            {/* Dynamic Island */}
            <div className="mpc-dynamic-island"></div>

            {/* Status Bar */}
            <div className="mpc-status-bar">
              <span className="mpc-time">9:41</span>
              <div className="mpc-status-icons">
                <Signal size={14} />
                <Wifi size={14} />
                <Battery size={14} />
              </div>
            </div>

            {/* Back Header */}
            <div className="mpc-back-header">
              <button className="mpc-back-button" onClick={handleFlip}>
                <ArrowLeft size={20} />
                <span>Back</span>
              </button>
              <h3 className="mpc-back-title">Demo</h3>
              <div className="mpc-back-spacer"></div>
            </div>

            {/* Video Container */}
            <div className="mpc-video-container">
              <div className="mpc-video-wrapper">
                {links?.demo ? (
                  <iframe
                    className="mpc-video-iframe"
                    src={links.demo.replace(
                      "youtube.com/watch?v=",
                      "youtube.com/embed/"
                    )}
                    title={`${title} Demo`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="mpc-no-video">
                    <Play size={48} />
                    <p>Demo coming soon</p>
                  </div>
                )}
              </div>
            </div>

            {/* Video Info */}
            <div className="mpc-video-info">
              <h4 className="mpc-video-title">{title} Demo</h4>
              <p className="mpc-video-subtitle">See the app in action</p>
            </div>

            {/* Home Indicator */}
            <div className="mpc-home-indicator"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
