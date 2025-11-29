// @ts-nocheck
import React from "react";
import "./WebCard.css";

import {
  SquareX,
  SquareMinus,
  PanelTop,
  FileSearch,
  ExternalLink,
  Github,
  Play,
  Folder,
  Settings,
  FileText,
  Monitor,
  Globe
} from "lucide-react";

export default function WebCard({
  projectId,
  image,
  title,
  description,
  technologyCategory,
  technologyItems,
  backStory,
  howItWorks,
  keyFeatures,
  viewProjectLink,
  viewGithubLink,
  viewDemoLink,
  activeTab,
  onTabChange
}) {
  const handleTabClick = (tab) => {
    onTabChange(projectId, tab);
  };

  const renderOverviewTab = () => (
    <div className="wc-overview-content">
      <div className="wc-hero-section">
        <div className="wc-hero-image-container">
          {image ? (
            <img className="wc-hero-image" src={image} alt={title} />
          ) : (
            <div className="wc-hero-image-placeholder">
              <Monitor size={48} />
            </div>
          )}
          <div className="wc-hero-overlay">
            <div className="wc-hero-actions">
              {viewProjectLink && (
                <a
                  href={viewProjectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wc-hero-action-btn"
                >
                  <ExternalLink size={14} />
                  <span>Live Site</span>
                </a>
              )}
              {viewGithubLink && (
                <a
                  href={viewGithubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wc-hero-action-btn"
                >
                  <Github size={14} />
                  <span>Source</span>
                </a>
              )}
              {viewDemoLink && (
                <a
                  href={viewDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wc-hero-action-btn"
                >
                  <Play size={14} />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="wc-project-info">
        <div className="wc-info-section">
          <h3 className="wc-info-title">Project Overview</h3>
          <p className="wc-info-description">{description}</p>
        </div>

        {/* Quick Links for mobile - always visible */}
        <div className="wc-mobile-quick-links">
          {viewProjectLink && (
            <a
              href={viewProjectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="wc-mobile-link"
            >
              <ExternalLink size={16} />
              <span>Live</span>
            </a>
          )}
          {viewGithubLink && (
            <a
              href={viewGithubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="wc-mobile-link"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
          {viewDemoLink && (
            <a
              href={viewDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="wc-mobile-link"
            >
              <Play size={16} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  const renderDetailsTab = () => (
    <div className="wc-details-content">
      <div className="wc-windows-desktop">
        <div className="wc-program-window">
          <div className="wc-window-title-bar">
            <div className="wc-window-title">
              <Folder size={16} />
              <span>Project Background</span>
            </div>
            <div className="wc-window-controls">
              <SquareMinus size={12} />
              <PanelTop size={12} />
              <SquareX size={12} />
            </div>
          </div>
          <div className="wc-window-content">
            <p className="wc-window-context-description">{backStory}</p>
          </div>
        </div>

        <div className="wc-program-window">
          <div className="wc-window-title-bar">
            <div className="wc-window-title">
              <Settings size={16} />
              <span>How It Works</span>
            </div>
            <div className="wc-window-controls">
              <SquareMinus size={12} />
              <PanelTop size={12} />
              <SquareX size={12} />
            </div>
          </div>
          <div className="wc-window-content">
            {howItWorks && howItWorks.length > 0 ? (
              howItWorks.map((working, index) => (
                <p key={index} className="wc-window-context-description">
                  • {working}
                </p>
              ))
            ) : (
              <p className="wc-window-context-description">
                Details coming soon...
              </p>
            )}
          </div>
        </div>

        <div className="wc-program-window">
          <div className="wc-window-title-bar">
            <div className="wc-window-title">
              <FileText size={16} />
              <span>Key Features</span>
            </div>
            <div className="wc-window-controls">
              <SquareMinus size={12} />
              <PanelTop size={12} />
              <SquareX size={12} />
            </div>
          </div>
          <div className="wc-window-content">
            {keyFeatures && keyFeatures.length > 0 ? (
              keyFeatures.map((feature, index) => (
                <p key={index} className="wc-window-context-description">
                  • {feature}
                </p>
              ))
            ) : (
              <p className="wc-window-context-description">
                Features coming soon...
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderTechTab = () => (
    <div className="wc-tech-content">
      <div className="wc-tech-stack">
        {technologyCategory && technologyCategory.length > 0 ? (
          technologyCategory.map((techCategory, index) => (
            <div key={index} className="wc-tech-category">
              <h4>{techCategory}</h4>
              <div className="wc-tech-items">
                {technologyItems[index] &&
                  technologyItems[index].map((tech, techIndex) => (
                    <span key={techIndex} className="wc-tech-item">
                      {tech}
                    </span>
                  ))}
              </div>
            </div>
          ))
        ) : (
          <p className="wc-no-tech">Tech stack details coming soon...</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="wc-card-container">
      {/* Title Bar */}
      <div className="wc-title-bar">
        <div className="wc-title-section">
          <Globe size={14} />
          <span className="wc-title">
            {title} - Microsoft Internet Explorer
          </span>
        </div>
        <div className="wc-browser-actions">
          <button className="wc-window-btn" aria-label="Minimize">
            <SquareMinus size={14} />
          </button>
          <button className="wc-window-btn" aria-label="Maximize">
            <PanelTop size={14} />
          </button>
          <button className="wc-window-btn" aria-label="Close">
            <SquareX size={14} />
          </button>
        </div>
      </div>

      {/* Address Bar */}
      <div className="wc-address-bar">
        <div className="wc-address-label">Address</div>
        <div className="wc-address-input">
          <FileSearch className="wc-address-icon" size={14} />
          <span className="wc-address-text">
            https://projects.portfolio.com/
            {title ? title.toLowerCase().replace(/\s+/g, "-") : "project"}
          </span>
        </div>
        <button className="wc-go-button">
          <span>Go</span>
        </button>
      </div>

      {/* Browser Tabs - Made larger for mobile touch */}
      <div className="wc-browser-tabs">
        <button
          className={`wc-tab ${
            activeTab === "overview" ? "wc-active-tab" : ""
          }`}
          onClick={() => handleTabClick("overview")}
          aria-selected={activeTab === "overview"}
        >
          <span>Overview</span>
        </button>
        <button
          className={`wc-tab ${activeTab === "details" ? "wc-active-tab" : ""}`}
          onClick={() => handleTabClick("details")}
          aria-selected={activeTab === "details"}
        >
          <span>Details</span>
        </button>
        <button
          className={`wc-tab ${activeTab === "tech" ? "wc-active-tab" : ""}`}
          onClick={() => handleTabClick("tech")}
          aria-selected={activeTab === "tech"}
        >
          <span>Tech Stack</span>
        </button>
      </div>

      {/* Browser Content */}
      <div className="wc-browser-content">
        <div className="wc-tab-content">
          {activeTab === "overview" && renderOverviewTab()}
          {activeTab === "details" && renderDetailsTab()}
          {activeTab === "tech" && renderTechTab()}
        </div>
      </div>

      {/* Status Bar */}
      <div className="wc-status-bar">
        <div className="wc-status-left">
          <span className="wc-status-text">Done</span>
        </div>
        <div className="wc-status-right">
          <span className="wc-status-text">Internet Zone</span>
        </div>
      </div>
    </div>
  );
}
