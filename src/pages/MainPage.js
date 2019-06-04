import React, {Component} from 'react';
import CenterModeCarousel from '../components/CenterModeCarousel.js'
import NewsItem from '../components/NewsItem.js'

export class MainPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        category: "headline",
        show:false,
      };
    }

    render() {
        return (
          <div className="Landing">
            <div className="container">
              <hr className="shortBar"/>
              <div className="intro-title">
                <h3> Gathering media from different </h3>
                <h3> perspectives for you </h3>
              </div>
            </div>
            <div className="container">
              <CenterModeCarousel changeCategory={category => this.setState({category})}/>
              <hr className="longBar"/>
              <h3>See related articles on the category below</h3>
            </div>
            <div className="container">
              {
                this.props.articles[this.state.category].map((article,i) => {
                  return (
                    <NewsItem {...article} key={i} article_id={i} category={this.state.category} isFull={false}/>
                  )
                })
              }
            </div>
          </div>
        )
      
    }
  }

  export default MainPage;
