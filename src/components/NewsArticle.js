import React, {Component} from 'react';
import NewsItem from './NewsItem';
import {Link, animateScroll as scroll} from "react-scroll";
export class NewsArticle extends Component {
    constructor(props) {    
        super(props);

        let len  = this.props.articles.length;
        let headliner = this.props.articles[0];
        let options = this.props.articles.slice(1,len)

        this.state = {
            headliner:headliner,
            options:options
        }

    }
    
    render() {
        scroll.scrollToTop();
        return (
          <div className="news-article">
            <div className="container">
              <div className="intro-title">
                <h1 className="display-1 headliner"> 
                    {this.state.headliner.title}
                </h1>
              </div>
            </div>
            <div className="landing-box">
                <img id="landing-page-img" src={this.state.headliner.urlToImage} className="img-fluid" alt={this.state.headliner.title}/>
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
                    this.state.options.map((option, i) => {
                        return (
                            <NewsItem key={i} option={option}/>
                        )
                    })
                }
            </div>
            </div>
          </div>
        )
      }
}

export default NewsArticle;
