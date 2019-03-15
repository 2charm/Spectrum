import React, {Component} from 'react';
import NewsItem from './NewsItem';
import {Link, animateScroll as scroll} from "react-scroll";
import background from '../img/mario-calvo-345-unsplash.jpg';
export class NewsArticle extends Component {
    constructor(props) {    
        super(props);
        this.state = {
            headliner:{},
            options:[],
        }
    }

    componentDidMount() {
        //let len  = this.props.articles.length;
        //let main = this.props.articles[0];
        //let ops = this.props.articles.slice(1,len + 1)
        //this.setState({
        //    headliner:main,
        //    options:ops,
        //})
    }

    render() {
        scroll.scrollToTop();
        // <h1 className="display-1"> {this.props.headliner.title} </h1>
        // <img id="landing-page-img" src={this.state.headliner.urlToImage} className="img-fluid" alt={this.state.headliner.title}/>
        return (
          <div className="news-article">
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
                {
                    //this.state.options.map((option) => {
                    //    return (
                    //        <NewsItem option={option}/>
                    //    )
                    // d})
                }
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
