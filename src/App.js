import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./assets/css/main.css";

// Lazy load components
const Blog = lazy(() => import("./components/Blog"));
const Main = lazy(() => import("./components/Main"));
const MarkdownPage = lazy(() => import("./components/MarkdownPage"));
const OpenSourcePage = lazy(() => import("./components/OpenSourcePage"));

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ textAlign: 'center', padding: '2em' }}>
    Loading...
  </div>
);

const App = () => {
  const copyrightYear = new Date().getFullYear();
  return (
    <Router basename="/">
      <div className="App">
        <div id="wrapper">
          <header>
            <nav className="navBar">
              <Link to="/">Home</Link>
              <Link to="/opensource">Open Source</Link>
              <Link to="/blog">Writing</Link>
              <a href="https://instagram.com/taylorwilsdon" target="_blank" rel="noopener noreferrer">Photos</a>
            </nav>
          </header>
          <br />
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/opensource" element={<OpenSourcePage />} />
              <Route path="/read/:filename" element={<MarkdownPage />} />
            </Routes>
          </Suspense>
          <footer id="footer">
            <ul className="copyright">
              <li>&copy; {copyrightYear} Taylor Wilsdon</li>
            </ul>
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
