import React, {Component} from 'react';

export class NewsItem extends Component {
    render() {
      let imgURL = this.props.urlToImage;
      let width = 8;
      let title = this.props.title;
      title = title.substring(0, title.lastIndexOf(" - "));

      if(imgURL === "") {
        width = 12;
      }
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
              <div className={"col-lg-"+width} id="news-content">
                <a href={this.props.url}>
                  <h3 className="text-left"> {title} </h3>
                </a>
                <p className="text-left article-desc"> {this.props.description} </p>
                <hr id="news-content-bar"/>
              </div>
              
            </div>
          </div>
      );
    }
}

export default NewsItem;
