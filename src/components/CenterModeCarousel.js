import React, { Component } from "react";
import Slider from "react-slick";

import health from '../img/health.jpg'
import business from '../img/business.jpg'
import entertainment from '../img/entertainment.jpg'
import headlines from '../img/Headlines.jpg'
import science from '../img/science.jpg'
import seattle from '../img/Seattle.jpg'
import sports from '../img/sports.jpg'
import tech from '../img/tech.jpg'
import usa from '../img/USA.jpg'
import world from '../img/world.jpg'

const CATEGORIES = ["sports", "health", "business", "entertainment", "science", "technology"]

class CenterModeCarousel extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activeSlide: 0
      }
    }

    render() {
        const settings = {
            className: "center",
            dots: true,
            centerMode: true,
            autoplay: true,
            infinite: true,
            centerPadding: "0",
            slidesToShow:5,
            speed: 500,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                  }
                }
              ],
            afterChange: current => this.props.changeCategory(CATEGORIES[current])
        };

        return (
            <div className="slider">
                <Slider {...settings}>
                <div className="carousel-item">
                  <img src={sports} className="d-block w-75" alt="..."/>
                  <div className="slide__caption">Sports</div>
                </div>
                <div className="carousel-item">
                  <img src={health} className="d-block w-75" alt="..."/>
                  <div className="slide__caption">Health</div>
                </div>
                <div className="carousel-item">
                  <img src={business} className="d-block w-75" alt="..."/>
                  <div className="slide__caption">Business</div>
                </div>
                <div className="carousel-item">
                  <img src={entertainment} className="d-block w-75" alt="..."/>
                  <div className="slide__caption">Entertainment</div>
                </div>
                {/* <div className="carousel-item">
                  <img src={headlines} className="d-block w-75" alt="..."/>
                  <div className="slide__caption">Headlines</div>
                </div> */}
                <div className="carousel-item">
                  <img src={science} className="d-block w-75" alt="..."/>
                  <div className="slide__caption">Science</div>
                </div>
                {/* <div className="carousel-item">
                  <img src={seattle} className="d-block w-75" alt="..."/>
                  <div className="slide__caption">Seattle</div>
                </div> */}
                <div className="carousel-item">
                  <img src={tech} className="d-block w-75" alt="..."/>
                  <div className="slide__caption">Technology</div>
                </div>
                {/* <div className="carousel-item">
                  <img src={usa} className="d-block w-75" alt="..."/>
                  <div className="slide__caption">USA</div>
                </div>
                <div className="carousel-item">
                  <img src={world} className="d-block w-75" alt="..."/>
                  <div className="slide__caption">World</div>
                </div> */}
                </Slider>
            </div>
        )
    }
}

export default CenterModeCarousel;
