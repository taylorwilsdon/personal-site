import React from 'react';

import avatar from '../images/avatar.png';

import Icons from './Icons';
import ModernGitHub from './ModernGitHub';
import YelpLogo from './YelpLogo';

const ModernMain = () => (
  <div className="modern-animate">
    {/* Hero Section */}
    <section className="modern-section modern-section--hero">
      <div className="modern-container">
        <div className="modern-hero">
          <img
            src={avatar}
            alt="Taylor Wilsdon"
            className="modern-avatar"
          />
          <h1>taylor wilsdon</h1>
          <div className="subtitle">
            corpeng @<strong>yelp</strong> {' '} <YelpLogo />
            <br />
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/blog" className="modern-btn modern-btn--primary">
              writing
            </a>
            <a href="/opensource" className="modern-btn modern-btn--secondary">
              open source
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Two Column Section */}
    <section className="modern-section">
      <div className="modern-container">
        <div className="modern-window">
          <ModernGitHub username="taylorwilsdon" />
        </div>
      </div>
    </section>

    {/* Three Column Cards */}
    <section className="modern-section" style={{ background: 'var(--bg-section)' }}>
      <div className="modern-container">
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>What I work on</h2>
        <div className="modern-cards">
          <div className="modern-card">
            <h3>Developer Tools</h3>
            <p>
              Creating CLI tools, build systems, and automation that streamline
              development workflows and reduce friction.
            </p>
            <a href="/opensource" className="card-link">
              View projects
            </a>
          </div>

          <div className="modern-card">
            <h3>Infrastructure</h3>
            <p>
              Building scalable, reliable systems that power applications
              used by millions of people every day.
            </p>
            <a href="/blog" className="card-link">
              Read about it
            </a>
          </div>

          <div className="modern-card">
            <h3>Open Source</h3>
            <p>
              Contributing to the community with tools, libraries, and
              documentation that help other developers succeed.
            </p>
            <a href="https://github.com/taylorwilsdon" className="card-link">
              GitHub profile
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Social Icons */}
    <section className="modern-section modern-section--compact">
      <div className="modern-container">
        <div style={{ textAlign: 'center' }}>
          <Icons />
        </div>
      </div>
    </section>
  </div>
);

export default ModernMain;
