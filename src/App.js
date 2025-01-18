import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import Blog from "./components/Blog";
import Main from "./components/Main";
import OpenSourcePage from "./components/OpenSourcePage";
import MarkdownPage from "./components/MarkdownPage";
import "./assets/css/main.css";

const App = (props) => {
  const copyrightYear = new Date().getFullYear();
  return (
    <Router basename="/">
      <div className="App">
        <div id="wrapper">
          <header>
            <span className="navBar">
              <Link to="/">Home</Link> | {" "}
              <Link to="/opensource">Open Source</Link> |{" "}
              <Link to="/blog">Writing</Link> |{" "}
              <Link to="/read/steamheat">Example Markdown</Link> |{" "}
              <a href="https://instagram.com/taylorwilsdon">Photography</a>
            </span>
          </header>
          <br />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/opensource" element={<OpenSourcePage />} />
            <Route path="/read/:filename" element={<MarkdownPage />} />
          </Routes>
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
