import React from 'react';

import avatar from '../images/avatar.png';

import GitHubActivityLog from './Github';
import Icons from './Icons';
import { MainContainer, MainSection } from './Layout';
import YelpLogo from './YelpLogo';

const Main = () => (
  <MainContainer>
    <MainSection id="main">
      <header className="hero">
        <img src={avatar} alt="Taylor Wilsdon" className="hero-avatar" />
        <h1>Taylor Wilsdon</h1>
        <p className="hero-subtitle">
          Building exceptional software at <strong>Yelp</strong> <YelpLogo />
          <br />
          Crafting developer tools and experiences that matter
        </p>
        <nav className="hero-cta">
          <a href="/blog" className="btn-primary">Writing →</a>
          <a href="/opensource" className="btn-ghost">Open Source</a>
        </nav>
      </header>

      <section className="activity">
        <GitHubActivityLog username="taylorwilsdon" />
      </section>

      <section className="cards">
        <a href="/opensource" className="card">
          <h3>Developer Tools</h3>
          <p>CLI tools, automation, and systems that streamline workflows.</p>
          <span className="link-accent">View projects →</span>
        </a>
        <a href="/blog" className="card">
          <h3>Technical Writing</h3>
          <p>Articles on infrastructure, tooling, and engineering practices.</p>
          <span className="link-accent">Read articles →</span>
        </a>
        <a href="https://github.com/taylorwilsdon" className="card" target="_blank" rel="noopener noreferrer">
          <h3>Open Source</h3>
          <p>Contributing to tools and libraries that help developers.</p>
          <span className="link-accent">GitHub →</span>
        </a>
      </section>

      <Icons />
    </MainSection>
  </MainContainer>
);

export default Main;
