import React, {Component} from 'react';
import {BrowserRouter as Link} from "react-router-dom";
import NavBar from '../App';
import background from './img/mario-calvo-345-unsplash.jpg';

export class LandingPage extends Component {
    render() {
      return (
        <div className="Landing">
          <div className="container">
            <NavBar/>
            <div className="intro-title">
              <h1 className="display-1">
                <Link to="/">Spectrum</Link>
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
      )
    }
  }
