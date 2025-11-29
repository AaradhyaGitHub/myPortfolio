// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Projects.css";
import { Smartphone, Monitor } from "lucide-react";
import WebCard from "../components/projects/WebCard";
import MobileProjectCard from "../components/projects/MobileProjectCard";
import { getWebProjects, getMobileProjects } from "../data/projectsData";

export default function Projects() {
  const location = useLocation();
  const mobileRef = useRef(null);
  const webRef = useRef(null);

  // Get projects from data
  const webProjects = getWebProjects();
  const mobileProjects = getMobileProjects();

  // Loading animation state for web projects
  const [loadingStates, setLoadingStates] = useState([]);
  const [webCardTabs, setWebCardTabs] = useState({});

  // Check if we need to scroll to a specific project
  useEffect(() => {
    if (location.hash) {
      const projectId = location.hash.replace("#", "");
      const element = document.getElementById(projectId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    }
  }, [location]);

  // Initialize loading states for web projects
  useEffect(() => {
    // Detect if mobile - shorter loading times
    const isMobile = window.innerWidth < 768;
    const baseDuration = isMobile ? 800 : 1500;

    setLoadingStates(
      webProjects.map((_, index) => ({
        isLoading: true,
        duration: baseDuration + index * (isMobile ? 300 : 500)
      }))
    );
  }, [webProjects.length]);

  // Handle video end (loading complete)
  const handleVideoEnd = (index) => {
    setLoadingStates((prev) =>
      prev.map((state, i) =>
        i === index ? { ...state, isLoading: false } : state
      )
    );
  };

  // Handle tab changes for WebCards
  const handleWebCardTabChange = (projectId, tab) => {
    setWebCardTabs((prev) => ({
      ...prev,
      [projectId]: tab
    }));
  };

  // Get active tab for a WebCard
  const getActiveTab = (projectId) => {
    return webCardTabs[projectId] || "overview";
  };

  // Loading animation component
  const LoadingVideo = ({ index, onVideoEnd, isMobile }) => {
    const baseDurations = isMobile
      ? [800, 1000, 1200, 1400]
      : [1500, 1800, 2100, 2400];

    const duration = baseDurations[Math.min(index, baseDurations.length - 1)];

    useEffect(() => {
      const timer = setTimeout(() => {
        onVideoEnd(index);
      }, duration);

      return () => clearTimeout(timer);
    }, [index, duration, onVideoEnd]);

    return (
      <div className="projects-loading-container">
        <video
          className="projects-loading-video"
          autoPlay
          muted
          playsInline
          loop
        >
          <source
            src="https://res.cloudinary.com/de3cxnkuw/video/upload/f_auto,q_auto:good,w_400/v1752387050/windowsXp_oftq2n.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="projects-loading-text">
          Loading Project {index + 1}...
        </div>
        <div className="projects-loading-bar">
          <div
            className="projects-loading-progress"
            style={{ animationDuration: `${duration}ms` }}
          />
        </div>
      </div>
    );
  };

  // Check if mobile for loading duration
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobileView(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="projects-page">
      {/* Page Header */}
      <header className="projects-page-header">
        <h1 className="projects-page-title">Projects</h1>
        <p className="projects-page-subtitle">
          A collection of things I've built — from mobile apps to web
          experiments.
        </p>
      </header>

      {/* Mobile Apps Section */}
      <section className="projects-section" ref={mobileRef}>
        <div className="projects-section-header">
          <div className="projects-section-icon">
            <Smartphone size={24} />
          </div>
          <div>
            <h2 className="projects-section-title">Mobile Apps</h2>
            <p className="projects-section-subtitle">
              Native experiences built with React Native
            </p>
          </div>
        </div>

        <div className="projects-mobile-grid">
          {mobileProjects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="projects-mobile-card-wrapper"
            >
              <MobileProjectCard
                id={project.id}
                title={project.title}
                tagline={project.tagline}
                description={project.description}
                technologies={project.technologies}
                projectDetails={project.projectDetails}
                links={project.links}
                image={project.image}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="projects-section-divider">
        <span className="projects-divider-line"></span>
        <span className="projects-divider-dot"></span>
        <span className="projects-divider-line"></span>
      </div>

      {/* Web Projects Section */}
      <section className="projects-section" ref={webRef}>
        <div className="projects-section-header">
          <div className="projects-section-icon">
            <Monitor size={24} />
          </div>
          <div>
            <h2 className="projects-section-title">Web Projects</h2>
            <p className="projects-section-subtitle">
              Full-stack applications and interactive experiences
            </p>
          </div>
        </div>

        <div className="projects-web-grid">
          {webProjects.map((project, index) => {
            const shouldShowLoading = loadingStates[index]?.isLoading;
            const projectId = project.id || `web-project-${index}`;

            if (shouldShowLoading) {
              return (
                <div
                  key={`loading-${index}`}
                  className="projects-web-card-wrapper"
                >
                  <LoadingVideo
                    index={index}
                    onVideoEnd={handleVideoEnd}
                    isMobile={isMobileView}
                  />
                </div>
              );
            }

            // Extract tech data
            const projectTechnologiesArray = Object.entries(
              project.technologies || {}
            );
            const technologyCategory = projectTechnologiesArray.map(
              (tech) => tech[0]
            );
            const technologyItems = projectTechnologiesArray.map((tech) =>
              Array.isArray(tech[1]) ? tech[1] : [tech[1]]
            );

            return (
              <div
                key={projectId}
                id={projectId}
                className="projects-web-card-wrapper"
              >
                <WebCard
                  projectId={projectId}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  technologyCategory={technologyCategory}
                  technologyItems={technologyItems}
                  backStory={project.projectDetails?.backstory}
                  howItWorks={project.projectDetails?.howItWorks || []}
                  keyFeatures={project.projectDetails?.keyFeatures || []}
                  viewProjectLink={project.links?.live}
                  viewGithubLink={project.links?.github}
                  viewDemoLink={project.links?.demo}
                  activeTab={getActiveTab(projectId)}
                  onTabChange={handleWebCardTabChange}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer spacing */}
      <div className="projects-footer-spacer"></div>
    </div>
  );
}
