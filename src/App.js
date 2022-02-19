import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Blog from './components/Blog';
import Main from './components/Main';
import './assets/css/main.css';


class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div className="App">
          <div id="wrapper">
            <header>
              <span className="navBar"><Link to="/">Home</Link> | <Link to="/blog">Blog</Link></span>
            </header>
            <Routes>
              <Route path="/" element={< Main />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
            <footer id="footer">
              <ul className="copyright">
                <li>&copy; Taylor Wilsdon</li>
              </ul>
            </footer>
          </div>
        </div>
      </Router>

    );
  }
}

export default App;