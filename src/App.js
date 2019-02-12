import React, { Component } from 'react';
import Header from './components/Header';
import Icons from './components/Icons';
import './assets/css/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="wrapper">
          <section id="main">
            <Header />
            <Icons />
          </section>
          <footer id="footer">
            <ul className="copyright">
              <li>&copy; Taylor Barrett-Wilsdon</li>
            </ul>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
