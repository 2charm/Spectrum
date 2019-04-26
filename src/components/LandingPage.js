import React, {Component} from 'react';
import CenterModeCarousel from './CenterModeCarousel.js'
import NewsItem from './NewsItem.js'
export class LandingPage extends Component {
    render() {
      return (
        <div className="Landing">
          <div className="container">
            <hr className="shortBar"/>
            <div className="intro-title">
              <h3> Gathering media from different </h3>
              <h3> perspectives for you </h3>
            </div>
          </div>
          <div className="container">
            <CenterModeCarousel/>
            <hr className="longBar"/>
          </div>
          <div className="container">
            <NewsItem hasImage={true}/>
            <NewsItem hasImage={true}/>
            <NewsItem hasImage={true}/>

            <NewsItem hasImage={false}/>
            <NewsItem hasImage={false}/>
            <NewsItem hasImage={false}/>
            <NewsItem hasImage={false}/>
            <NewsItem hasImage={false}/>
          </div>
        </div>
      )
    }
  }

  export default LandingPage;
