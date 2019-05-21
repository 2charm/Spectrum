import React, {Component} from 'react';
import CenterModeCarousel from './CenterModeCarousel.js'
import NewsItem from './NewsItem.js'
export class LandingPage extends Component {
    constructor(props) {
      console.log(props.articles);
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
            </div>
            <div className="container">
              {
                this.props.articles[this.state.category].map((article,i) => {
                  return (
                    <NewsItem {...article} key={i}/>
                  )
                })
              }
            </div>
          </div>
        )
      
    }
  }

  export default LandingPage;
