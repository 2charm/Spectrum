import React, {Component} from 'react';

export class NewsItem extends Component {
    render() {
        let imgUrl = this.props.option.urlToImage;
        console.log(this.props.option)
        console.log(this.props.option.url)
        // <a href={"http://"+this.props.option.url}>
        //    <img className="img-fluid logo-img" src={"logo.clearbit.com/" + url}>
        // </a>
        return (
          <div className="container">
            <div className="row">
              <div className="col-lg-4 logo-side">
                <div className="logo">
                  <a href={this.props.option.url} target="_blank">
                    <img className="img-fluid logo-img" src={imgUrl} alt={this.props.option.source.id}/>
                  </a>
                </div>
              </div>
              <div className="col-lg-8">
                <h3 className="text-left"> {this.props.option.source.name + ' / /'} </h3>
                <h5 className="text-left"> {this.props.option.title} </h5>
                <p className="text-left article-desc"> {this.props.option.description} </p>
              </div> 
            </div>
          </div>
        )
    }
}

export default NewsItem;
