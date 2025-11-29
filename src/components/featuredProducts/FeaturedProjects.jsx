// @ts-nocheck
import { useState } from "react";
import {
  Github,
  ExternalLink,
  Smartphone,
  Monitor,
  ArrowRight,
  ArrowLeft,
  Play,
  RotateCcw,
  Wrench,
  Zap,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import { getHighlightedProjects } from "../../data/projectsData";
import "./FeaturedProjects.css";

export default function FeaturedProjects() {
  const featured = getHighlightedProjects();

  // Track flip state for each card independently
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (projectId) => {
    setFlippedCards((prev) => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  // Get 4-5 key techs from the technologies object
  const getKeyTechs = (technologies) => {
    const techs = [];
    const priority = [
      "framework",
      "frontend",
      "backend",
      "stateManagement",
      "integration",
      "algorithms",
      "apis",
      'ai',
      "crossPlatform",
      "algorithms"
    ];

    for (const key of priority) {
      if (technologies[key]) {
        techs.push(...technologies[key]);
        if (techs.length >= 5) break;
      }
    }
    return techs.slice(0, 5);
  };

  // Get first 3 key features
  const getKeyFeatures = (projectDetails) => {
    if (!projectDetails?.keyFeatures) return [];
    return projectDetails.keyFeatures.slice(0, 4);
  };

  return (
    <section className="featured-projects">
      <div className="featured-header">
        <h2 className="section-label">Featured Work</h2>
        <Link to="/projects" className="view-all-link">
          View All
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="featured-grid">
        {featured.map((project) => {
          const isFlipped = flippedCards[project.id] || false;

          return (
            <article key={project.id} className="featured-card-wrapper">
              <div
                className={`featured-card-inner ${isFlipped ? "flipped" : ""}`}
              >
                {/* ============ FRONT OF CARD ============ */}
                <div className="card-face card-front">
                  {/* Image Section */}
                  <div className="card-image-section">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="card-image"
                      />
                    ) : (
                      <div className="card-image-placeholder">
                        {project.projectType === "mobile" ? (
                          <Smartphone size={32} />
                        ) : (
                          <Monitor size={32} />
                        )}
                      </div>
                    )}
                    {/* Type Badge on image */}
                    <div className="card-type-badge">
                      {project.projectType === "mobile" ? (
                        <Smartphone size={12} />
                      ) : (
                        <Monitor size={12} />
                      )}
                      <span>{project.projectType}</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="card-content">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-tagline">{project.tagline}</p>

                    {/* Tech Tags */}
                    <div className="card-techs">
                      {getKeyTechs(project.technologies).map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="card-actions">
                      <div className="card-links">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-link"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <Github size={16} />
                            <span>Code</span>
                          </a>
                        )}
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-link"
                            aria-label={`Watch ${project.title} demo`}
                          >
                            <Play size={16} />
                            <span>Demo</span>
                          </a>
                        )}
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-link"
                            aria-label={`View ${project.title} live`}
                          >
                            <ExternalLink size={16} />
                            <span>Live</span>
                          </a>
                        )}
                      </div>

                      <button
                        className="card-flip-btn"
                        onClick={() => toggleFlip(project.id)}
                        aria-label="View more details"
                      >
                        <span>Details</span>
                        <RotateCcw size={12} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* ============ BACK OF CARD ============ */}
                <div className="card-face card-back">
                  {/* Back Header */}
                  <div className="card-back-header">
                    <button
                      className="card-back-btn"
                      onClick={() => toggleFlip(project.id)}
                      aria-label="Go back"
                    >
                      <ArrowLeft size={16} />
                      <span>Back</span>
                    </button>
                    <h3 className="card-back-title">{project.title}</h3>
                  </div>

                  {/* Back Content */}
                  <div className="card-back-content">
                    {/* Backstory */}
                    <div className="card-back-section">
                      <p className="card-backstory">
                        {project.projectDetails?.backstory}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="card-back-section">
                      <div className="section-header">
                        <Wrench size={14} />
                        <h4>Tech Stack</h4>
                      </div>
                      <div className="card-techs card-techs-back">
                        {getKeyTechs(project.technologies).map((tech, i) => (
                          <span key={i} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="card-back-section">
                      <div className="section-header">
                        <Star size={14} />
                        <h4>Highlights</h4>
                      </div>
                      <ul className="card-features">
                        {getKeyFeatures(project.projectDetails).map(
                          (feature, i) => (
                            <li key={i}>{feature}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
