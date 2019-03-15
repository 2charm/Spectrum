import React, {Component} from 'react';

export class NewsItem extends Component {
    render() {
        // <a href={"http://"+this.props.option.url}>
        //    <img className="img-fluid logo-img" src="">
        // </a>
        // <h3 className="text-left"> {this.props.option.source.name + ' / /'} </h3>
        // <p className="text-left article-desc"> {this.props.option.description} </p> 
        return (
          <div className="container">
            <div className="row">
              <div className="col-lg-4 logo-side">
                <div className="logo">
                  <img className="img-fluid logo-img" src="https://icon-locator.herokuapp.com/icon?url=https://www.aftenposten.no&size=70..120..200" alt={this.props.sourceName}/>
                </div>
              </div>
              <div className="col-lg-8">
                <h3 className="text-left">NPR / /</h3>
                <p className="text-left article-desc">The booze bust in Rotterdam comes on the eve of Kim Jong Un's meeting with President Trump in Vietnam and is a breach of U.N. sanctions banning the export of luxury goods to the communist country.</p>
              </div> 
            </div>
          </div>
        )
    }
}

export default NewsItem;
