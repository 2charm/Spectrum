import React, {Component} from 'react';
import headlines from '../img/Headlines.jpg'

export class NewsItem extends Component {
    render() {
        let content = null;
        let imgUrl = this.props.urlToImage;
        if (imgUrl !== "") {
          content = (
            <div className="container">
              <div className="row">
                <div className="col-lg-4 logo-side">
                  <div className="logo">
                    <a href={this.props.url} target="_blank">
                      <img className="img-fluid logo-img" src={imgUrl} alt={this.props.source.id}/>
                    </a>
                  </div>
                </div>
                <div className="col-lg-8" id="news-content">
                  <h3 className="text-left"> {this.props.source.name + ' / /'} </h3>
                  <h5 className="text-left"> {this.props.title} </h5>
                  <p className="text-left article-desc"> {this.props.description} </p>
                  <hr id="news-content-bar"/>
                </div>
                
              </div>
            </div>
          )
        } else {
          content = (
            <div className="container">
              <div className="row" >
                <div className="col-lg-12" id="news-content">
                  <h3 className="text-left"> {this.props.source.name + ' / /'} </h3>
                  <h5 className="text-left"> {this.props.title} </h5>
                  <p className="text-left article-desc"> {this.props.description} </p>
                </div>
              </div>
            </div>
          )
        }
      return content;
    }
}

export default NewsItem;
