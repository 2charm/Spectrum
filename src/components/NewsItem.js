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
            <div className="row" id="news-container">
            { imgURL !== "" &&
              <div className="col-lg-4">
              {/* <div className="logo"> */}
                <a href={this.props.url} target="_blank" >
                  <img className="img-fluid logo-img" src={imgURL} alt={this.props.source.id}/>
                </a>
              {/* </div> */}
              </div>
            }              
              <div className={"col-lg-"+width} id="news-content">
                <a href={this.props.url} target="_blank">
                  <h3 className="text-left news-title"> {title} </h3>
                </a>
                <p className="text-left article-desc"> {this.props.description} </p>
              </div>
            </div>
          </div>
      );
    }
}

export default NewsItem;
