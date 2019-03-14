import React, {Component} from 'react';
import { NavBar } from '../App.js';
import NewsItem from './NewsItem';
import {Link, animateScroll as scroll} from "react-scroll";
import background from '../img/mario-calvo-345-unsplash.jpg';
export class NewsArticle extends Component {

    componentDidMount () {

    }

    render() {
        return (
          <div className="Landing">
            <div className="container">
              <NavBar/>
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
            <div>
            <Link 
                to="news-items"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <img id="arrow-down" src="http://www.richardpinkstone.com/wp-content/uploads/2018/08/down-arrow.png" alt="Arrow Down"/>
            </Link>
            <div className="news-items">
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
            </div>
            </div>
          </div>
        )
      }
}

export default NewsArticle;
