import React, {Component} from 'react';

export class NewsItem extends Component {
    render() {
      let imgURL = this.props.urlToImage;
      return (
          <div className="container">
            <div className="row">
            { imgURL !== "" &&
              <div className="col-lg-4 logo-side">
              <div className="logo">
                <a href={this.props.url} >
                  <img className="img-fluid logo-img" src={imgURL} alt={this.props.source.id}/>
                </a>
              </div>
              </div>
            }              
              <div className="col-lg-8" id="news-content">
                <h3 className="text-left"> {this.props.title} </h3>
                <p className="text-left article-desc"> {this.props.description} </p>
                <hr id="news-content-bar"/>
              </div>
              
            </div>
          </div>
      );
    }
}

export default NewsItem;
