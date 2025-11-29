import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about">
      <div className="about-container">
        {/* Hero - preserved exactly */}
        <section className="about-hero">
          <h1>
            Software Developer &
            <br />
            <span className="highlight">Photographer</span>
          </h1>
          <p>Full Stack + Cross Platform App Dev</p>
          <p>
            <em>[ MongoDB, Express, React, Node ]</em>
          </p>
        </section>

        {/* Education */}
        <section className="about-section">
          <h2>Education</h2>
          <div className="education-list">
            <div className="education-item">
              <span className="education-degree">BS in Computer Science</span>
              <span className="education-school">UC Davis</span>
              <span className="education-detail">
                Minor in Technology Management
              </span>
            </div>
            <div className="education-item">
              <span className="education-degree">AA in Mathematics</span>
              <span className="education-school">Berkeley City College</span>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="about-section">
          <h2>Experience</h2>
          <div className="story-text">
            <p>
              About three years of cumulative experience in local government IT,
              starting as a high schooler at the <em>City of El Cerrito</em> and
              continuing through community college. Later, a five-month
              internship at the <em>City of West Sacramento</em>. Most of my
              work has been in day-to-day IT operations—managing users in Active
              Directory, remote management, deployments, and on-site support.
            </p>
          </div>

          <div className="experience-highlights">
            <div className="highlight-card">
              <span className="highlight-label">West Sacramento</span>
              <ul>
                <li>
                  Built a React.js form to automate new hire data collection
                </li>
                <li>
                  Supported a $3M tech upgrade—configured 52 MDCs, deployed
                  software via PDQ, enabled BitLocker
                </li>
                <li>
                  Led transition of 150 users from on-prem to cloud-based
                  BeyondTrust
                </li>
              </ul>
            </div>
            <div className="highlight-card">
              <span className="highlight-label">El Cerrito</span>
              <ul>
                <li>
                  Led $50k tech upgrade—desktops to laptops, phone system to
                  RingCentral
                </li>
                <li>
                  Used FTK Imager to securely image compromised systems for
                  forensics
                </li>
                <li>
                  Collaborated with cybersecurity experts during an active
                  cyberattack
                </li>
              </ul>
            </div>
          </div>

          <div className="departments">
            <span className="departments-label">
              Departments I've supported:
            </span>
            <ul className="departments-list">
              <li>El Cerrito Police</li>
              <li>El Cerrito Fire</li>
              <li>West Sacramento Police</li>
              <li>West Sacramento Fire</li>
              <li>Bryte Bend Water Treatment Plant</li>
              <li>Community Development (El Cerrito & West Sac)</li>
            </ul>
          </div>
        </section>

        {/* Self-Taught */}
        <section className="about-section">
          <h2>Self-Taught</h2>
          <p className="section-intro">
            Most of what I know came from late nights with Udemy courses and
            textbooks. I'm impatient and curious—so I just learn it myself.
          </p>
          <div className="skills-grid">
            <div className="skill-item">
              <span className="skill-name">React</span>
              <span className="skill-detail">
                Components, hooks, Redux, Next.js, auth, testing
              </span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Node + Express</span>
              <span className="skill-detail">
                REST APIs, GraphQL, MongoDB, SQL
              </span>
            </div>
            <div className="skill-item">
              <span className="skill-name">DSA in C/C++</span>
              <span className="skill-detail">
                Arrays, trees, graphs, sorting, dynamic programming
              </span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Bash</span>
              <span className="skill-detail">
                Scripting, automation, system administration
              </span>
            </div>
          </div>
        </section>

        {/* Right Now */}
        <section className="about-section">
          <h2>Right Now</h2>
          <div className="now-grid">
            <div className="now-item">
              <span className="now-label">Building</span>
              <p>
                A{" "}
                <a
                  href="https://placeholder-demo-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Native fitness app
                </a>{" "}
                for tracking grappling sports data.
              </p>
            </div>
            <div className="now-item">
              <span className="now-label">Studying</span>
              <p>
                DSA, programming language theory, and working through{" "}
                <a
                  href="https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SICP
                </a>
                .
              </p>
            </div>
            <div className="now-item">
              <span className="now-label">Focus</span>
              <p>Finishing strong at UC Davis—1.3 years left.</p>
            </div>
          </div>
        </section>

        {/* Outside the Editor */}
        <section className="about-section">
          <h2>Outside the Editor</h2>
          <div className="outside-list">
            <div className="outside-item">
              <span className="outside-icon">●</span>
              <div className="outside-content">
                <span className="outside-title">Brazilian Jiu-Jitsu</span>
                <span className="outside-detail">
                  4 years in, blue belt on the horizon
                </span>
              </div>
            </div>

            <div className="outside-item">
              <span className="outside-icon">●</span>
              <div className="outside-content">
                <span className="outside-title">
                  <Link to="/photography/aerial">Aerial Photography</Link>
                </span>
                <span className="outside-detail">
                  Drones, cinematography, and creative tech
                </span>
              </div>
            </div>

            <div className="outside-item">
              <span className="outside-icon">●</span>
              <div className="outside-content">
                <span className="outside-title">Running</span>
                <span className="outside-detail">
                  2 half marathons and counting
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
