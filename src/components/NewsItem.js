import React, {Component} from 'react';
import headlines from '../img/Headlines.jpg'

export class NewsItem extends Component {
    render() {
        let content = null;
        // let imgUrl = this.props.option.urlToImage;
        if (this.props.hasImage) {
          content = (
            <div className="container">
              <div className="row">
                <div className="col-lg-4 logo-side">
                  <div className="logo">
                    {/* <a href={this.props.option.url} target="_blank">
                      <img className="img-fluid logo-img" src={imgUrl} alt={this.props.option.source.id}/>
                    </a> */}
                    <a href="" target="_blank">
                      <img className="img-fluid logo-img" src={headlines}/>
                    </a>
                  </div>
                </div>
                <div className="col-lg-8" id="news-content">
                  {/* <h3 className="text-left"> {this.props.option.source.name + ' / /'} </h3>
                  <h5 className="text-left"> {this.props.option.title} </h5>
                  <p className="text-left article-desc"> {this.props.option.description} </p> */}
                  <h2>TITLE</h2>
                  <p>DESCRIPTION</p>
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
                  {/* <h3 className="text-left"> {this.props.option.source.name + ' / /'} </h3>
                  <h5 className="text-left"> {this.props.option.title} </h5>
                  <p className="text-left article-desc"> {this.props.option.description} </p> */}
                  <div id="no-picture">
                    <h2>TITLE</h2>
                    <p>DESCRIPTION</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      return content;
    }
}

export default NewsItem;
