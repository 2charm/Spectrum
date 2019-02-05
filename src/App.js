import React, { Component } from 'react';
import background from './img/mario-calvo-345-unsplash.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">

          <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">
              <a className="p-2 text-muted" href="#">Facebook vs. Apple</a>
              <a className="p-2 text-muted" href="#">Facebook vs. Apple</a>
              <a className="p-2 text-muted" href="#">Facebook vs. Apple</a>
              <a className="p-2 text-muted" href="#">Facebook vs. Apple</a>
            </nav>
          </div>

          <div className="intro-title">
            <h1 className="display-1">
              Spectrum
            </h1>
            <h3>
              Gathering media from different perspectives for you
            </h3>
          </div>
        </div>
        <div className="landing-box">
          <img id="landing-page-img" src={background} className="img-fluid" alt="subway-background"/>
        </div>
      </div>
    );
  }
}

export default App;
