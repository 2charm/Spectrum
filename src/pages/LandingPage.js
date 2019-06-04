import React, {Component} from 'react';
import sources from '../img/VarietyOfSources.png';
import analytics from '../img/Analytics.png';
import categories from '../img/Categories.png';

export class LandingPage extends Component {

    render() {
        return (
          <div className="Landing">
            <div className="container" id="landing-background">
              <h2 className="landing-title" id="intro">Widen your perspective.</h2>
              <h2 className="landing-title" id="intro">Challenge your views.</h2>
            </div>
            <div className="container" id="gray-container">
              <h2 className="landing-title">Meet Spectrum</h2>
              <div className="description-row">
                <p className="description-body">Spectrum is a melting pot of different sources and types of </p>
                <p className="description-body">news, all on one website. We challenge individuals to read </p>
                <p className="description-body">from multiple sources and categories and encourage users to </p>
                <p className="description-body">reflect on their personal reading habits. Our vision is to create </p>
                <p className="description-body">a place where people can continuously develop a well-rounded </p>
                <p className="description-body">understanding of current events in the world we live in.</p>
              </div>
            </div>
            <div className="container" id="white-container">
              <h2 className="landing-title">What makes us different</h2>
              <div className="row">
                <div className="col-sm">
                  <div className="row image-row">
                    <img className="profile-img" src={sources} alt="sources"/>
                  </div>
                  <div className="row">
                    <h3 className="profile-name">Variety of Sources</h3>
                  </div>
                  <div className="row center-text">
                    <p>Read from over 100 different sources and digest different perspectives.</p>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="row image-row">
                    <img className="profile-img" src={analytics} alt="analytics"/>
                  </div>
                  <div className="row">
                    <h3 className="profile-name">Analytics</h3>
                  </div>
                  <div className="row center-text">
                    <p>Create an account and discover a personalized dashboard visualizing your reading habits.</p>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="row image-row">
                    <img className="profile-img" src={categories} alt="categories"/>
                  </div>
                  <div className="row">
                    <h3 className="profile-name">Categories</h3>
                  </div>
                  <div className="row center-text">
                    <p>Widen your variety of news intake and draw from a range of categories.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container" id="gray-container">
              <h2 className="landing-title">Meet the team!</h2>
              <div className="row">
                <div className="col-sm-3">
                  <div className="row image-row">
                    <a href="https://www.linkedin.com/in/alex-v-huang/">
                    <img 
                    className="profile-img" 
                    src="https://media.licdn.com/dms/image/C5603AQFTtWNiumya4w/profile-displayphoto-shrink_800_800/0?e=1565222400&v=beta&t=BpkeZ_TZMPIL1q-i4wRRxTBn6CUHQBVvZK5WksEhs1Q"
                    alt="Alex Huang"
                    />
                    </a>
                  </div>
                  <div className="row">
                    <h3 className="profile-name">Alex Huang</h3>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="row image-row">
                    <a href="https://www.linkedin.com/in/kevinhuynh23/">
                    <img 
                    className="profile-img" 
                    src="https://media.licdn.com/dms/image/C5603AQGYQFYuvDYMOQ/profile-displayphoto-shrink_200_200/0?e=1565222400&v=beta&t=ohpRostlb-mY8yJq7Ikatr-uwM6XUzGwq0Jz8gqV1Og"
                    alt="Kevin Huynh"
                    />
                    </a>
                  </div>
                  <div className="row">
                    <h3 
                    className="profile-name">Kevin Huynh</h3>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="row image-row">
                    <a href="https://www.linkedin.com/in/andrewhwang10/">
                    <img 
                    className="profile-img" 
                    src="https://media.licdn.com/dms/image/C4D03AQF8imtbNQRwpQ/profile-displayphoto-shrink_800_800/0?e=1565222400&v=beta&t=AYDFKkgVGjhewgmyXa7Kbi6xSIACasvBL7skS8WWYWQ"
                    alt="Andrew Hwang"
                    />
                    </a>
                  </div>
                  <div className="row">
                    <h3 className="profile-name">Andrew Hwang</h3>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="row image-row">
                    <a href="https://www.linkedin.com/in/hannah-lee-a63375133/">
                    <img 
                    className="profile-img" 
                    src="https://media.licdn.com/dms/image/C5603AQHQ5Gly19vWww/profile-displayphoto-shrink_800_800/0?e=1565222400&v=beta&t=oKy9fHCIFOAn0TVJbxhb28A8If132qS2yC5rgF39Kx4"
                    alt="Hannah Lee"
                    />
                    </a>
                  </div>
                  <div className="row">
                    <h3 className="profile-name">Hannah Lee</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      
    }
  }

  export default LandingPage;
