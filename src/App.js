import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Header from './components/Header';
import Blog from './components/Blog';
import Icons from './components/Icons';
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
            <Switch>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/">
                <section id="main">
                  <Header />
                  <Icons />
                </section>
              </Route>
            </Switch>
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