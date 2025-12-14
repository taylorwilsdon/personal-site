import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./assets/css/main.css";
import "./assets/css/modern-layout.css";

const BlogPage = lazy(() => import("./components/BlogPage"));
const ModernMain = lazy(() => import("./components/ModernMain"));
const MarkdownPage = lazy(() => import("./components/MarkdownPage"));
const OpenSourcePage = lazy(() => import("./components/OpenSourcePage"));
const PhotosPage = lazy(() => import("./components/PhotosPage"));

const LoadingFallback = () => (
  <div style={{ textAlign: 'center', padding: '3em', color: '#6f6f6a' }}>
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
              <Link to="/photos">Photos</Link>
            </nav>
          </header>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<ModernMain />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/opensource" element={<OpenSourcePage />} />
              <Route path="/photos" element={<PhotosPage />} />
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
