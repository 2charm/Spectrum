import React, {Component} from 'react';
import {Link} from "react-router-dom";
import spectrum from "../img/2-squares.png"
import Moment from 'react-moment';

const SESSION_TOKEN = "sessionID";
export class NewsItem extends Component {

    updateCategory() {
      if(sessionStorage.getItem(SESSION_TOKEN) !== null) {
        let url = "https://api.spectrumnews.me/v1/metrics";
        let bearer = sessionStorage.getItem(SESSION_TOKEN);

      fetch(url, { 
          method: "POST", 
          headers: {
            "Content-Type": "text/plain",
            "Authorization":bearer
          },
          body: {
            category:this.props.category,
            source:this.props.source.name
          }
        }
      )
      .then((response) => {
        console.log(response.status)
      })
      .catch((err) => {
        console.log(err.message)
      })
      }
    }

    render() {
      let imgURL = this.props.urlToImage;
      let width = 8;
      let title = this.props.title;
      let source = ""
      if(title.lastIndexOf(" - ") !== -1) {
        title = title.substring(0, title.lastIndexOf(" - "));
      }

      if(this.props.isFull) {
        source = this.props.source.name;
        if(source.lastIndexOf(".") !== -1) {
          source = source.substring(0, source.lastIndexOf("."));
        }
      }
      if(imgURL === "") {
        width = 12;
      }
      return (
          <div className="container">
            <div className="row" id="news-container">
            { imgURL !== "" &&
              <div className="col-lg-4">
                <a href={this.props.url} onClick={() => this.updateCategory()} target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid logo-img" src={imgURL} alt={this.props.source.id}/>
                </a>
              </div>
            }              
              <div className={"col-lg-"+width} id="news-content">
                <a href={this.props.url} onClick={() => this.updateCategory()} target="_blank" rel="noopener noreferrer">
                  <h2 className="news-title"> {title} </h2>
                </a>
                {
                  this.props.isFull &&
                  <h4 className="source-name">{source}</h4>
                }
                <p className="text-left article-desc"> {this.props.description} </p>
                <div className="row">
                  {
                    this.props.category === "headline" &&
                    (
                      <div>
                        <Link to={"/fullspectrum/" + this.props.article_id}>
                          <img className="full-spectrum-icon" src={spectrum} alt="full-spectrum"/>
                        </Link>
                        <Link className="full-spectrum-text" to={"/fullspectrum/" + this.props.article_id}>Full Spectrum</Link>
                      </div>
                    )
                    }
                    <p className="timestamp"><Moment fromNow>{this.props.publishedAt}</Moment></p>
                </div>
              </div>
            </div>
          </div>
      );
    }
}

export default NewsItem;
