import React, {Component} from 'react';
import background from '../img/mario-calvo-345-unsplash.jpg';

export class LandingPage extends Component {
    render() {
      return (
        <div className="Landing">
          <div className="container">
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
      )
    }
  }

  export default LandingPage;
