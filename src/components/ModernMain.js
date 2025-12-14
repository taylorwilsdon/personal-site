import React from "react";
import { Link } from "react-router-dom";

import avatar from "../images/avatar.png";

import Icons from "./Icons";
import ModernGitHub from "./ModernGitHub";
import YelpLogo from "./YelpLogo";

const ModernMain = () => {
  const [isGitHubExpanded, setIsGitHubExpanded] = React.useState(false);

  return (
  <div className="modern-animate">
    {/* Hero Section */}
    <section className="modern-section modern-section--hero">
      <div className="modern-container">
        <div className="modern-hero">
          <img src={avatar} alt="Taylor Wilsdon" className="modern-avatar" />
          <h1>taylor wilsdon</h1>
          <div className="subtitle">
            corpeng @<strong>yelp</strong> <YelpLogo />
            <br />
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link to="/blog" className="modern-btn modern-btn--primary">
              writing
            </Link>
            <Link to="/opensource" className="modern-btn modern-btn--secondary">
              open source
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Two Column Section */}
    <section
      className={`modern-section github-section ${isGitHubExpanded ? 'github-expanded' : ''}`}
      style={{
        paddingTop: isGitHubExpanded ? '1rem' : '3rem',
        transition: 'padding 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      <div className="modern-container">
        <div className="modern-window">
          <ModernGitHub
            username="taylorwilsdon"
            onExpansionChange={setIsGitHubExpanded}
          />
        </div>
      </div>
    </section>

    {/* Three Column Cards */}
    <section
      className="modern-section"
      style={{ background: "var(--bg-section)" }}
    >
      <div className="modern-container">
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>my work</h2>
        <div className="modern-cards">
          <div className="modern-card" style={{ display: "flex", flexDirection: "column" }}>
            <h3>Infrastructure</h3>
            <p style={{ flexGrow: 1 }}>
              It's what I do for a living - <br /> Corporate Engineering teams
              are responsible for Yelp's internal systems & network engineering,
              SRE, client platform & internal software development.
            </p>
            <a
              href="https://www.linkedin.com/in/taylorbarrettwilsdon"
              className="card-link"
              style={{ marginTop: "auto" }}
            >
              How I spend my day
            </a>
          </div>

          <div className="modern-card" style={{ display: "flex", flexDirection: "column" }}>
            <h3>Tooling</h3>
            <p style={{ flexGrow: 1 }}>
              I work primarily out of the terminal and I'm a sucker for a good
              CLI tool. I try to contribute back wherever I can.
            </p>
            <Link
              to="/opensource"
              className="card-link"
              style={{ marginTop: "auto" }}
            >
              How I spend my nights
            </Link>
          </div>

          <div className="modern-card" style={{ display: "flex", flexDirection: "column" }}>
            <h3>Open Source</h3>
            <p style={{ flexGrow: 1 }}>
              Mostly infrastructure tooling, security / privacy & llm‑platform
              stuff with lots of mcp & ai tool servers mixed in • Everything MIT
              licensed
            </p>
            <a
              href="https://github.com/taylorwilsdon"
              className="card-link"
              style={{ marginTop: "auto" }}
            >
              GitHub profile
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Social Icons */}
    <section className="modern-section modern-section--compact">
      <div className="modern-container">
        <div style={{ textAlign: "center" }}>
          <Icons />
        </div>
      </div>
    </section>
  </div>
  );
};

export default ModernMain;
