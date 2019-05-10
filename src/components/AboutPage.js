import React, {Component} from 'react';

export class AboutPage extends Component {
    render() {
      return (
        <div className="container">
          <div className="intro-title">
            <h1 className="display-1">
              About us
            </h1>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6 col-lg-3">
              <div className="card">
                <img className="card-img-top" src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/35065614_1450006811772100_6584312300742639616_o.jpg?_nc_cat=109&_nc_ht=scontent-sea1-1.xx&oh=b7904d34b17a1b5b09e66f8a52be5827&oe=5CFD595E" alt="Andrew Hwang"/>
                <div className="card-body">
                  <p className="card-text">Andrew Hwang</p>
                  <p className="card-text">Andrew Yoonjae Hwang is a senior at the University of Washington studying Informatics. He is an aspiring software developer</p>
                </div>
              </div>  
            </div>
            <div className="col-xs-12 col-md-6 col-lg-3">
              <div className="card">
                <img className="card-img-top" src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/37261545_1821386304566254_4010770310751059968_o.jpg?_nc_cat=107&_nc_ht=scontent-sea1-1.xx&oh=6691ab161b7f16a53507d753638e1ea9&oe=5CFDFBFE" alt="Alex Huang"/>
                <div className="card-body">
                  <p className="card-text">Alex Huang</p>
                  <p className="card-text">Alex Huang is a senior at the University of Washington studying Informatics. He is passionate about getting a job.</p>
                </div>
              </div>  
            </div>
            <div className="col-xs-12 col-md-6 col-lg-3">
              <div className="card">
                <img className="card-img-top" src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/15625899_10158009630985010_974186479306896089_o.jpg?_nc_cat=103&_nc_ht=scontent-sea1-1.xx&oh=b1781a3e68b8afdd821e044f716d7c1c&oe=5CF33186" alt="Kevin Huynh"/>
                <div className="card-body">
                  <p className="card-text">Kevin Huynh</p>
                  <p className="card-text">Kevin Huynh is a senior at the University of Washington studying Informatics with a focus in Data Science. After he graduates, he plans to work as a software engineer.</p>
                </div>
              </div>  
            </div>
            <div className="col-xs-12 col-md-6 col-lg-3">
              <div className="card">
                <img className="card-img-top" src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/14902963_10207994135037474_638356186703537087_o.jpg?_nc_cat=110&_nc_ht=scontent-sea1-1.xx&oh=f071c1d7608319994f876eeee97c8ad9&oe=5D006DC0" alt="Hannah Lee"/>
                <div className="card-body">
                  <p className="card-text">Hannah Lee</p>
                  <p className="card-text">Hannah Lee is a senior at the University of Washington studying Informatics. After she graduates, she plans at becoming a product manager at a tech company in Seattle.</p>
                </div>
              </div>  
            </div>
          </div>
  
          <div className="container">
            <p className="about-text">
              If you are a tester or if you would like to help us out on our project!
            </p>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
              </div>
              <div className="form-group">
                <label htmlFor="text-input">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type message here"></textarea>
              </div>
            </form>
          </div>
        </div>
      )
    }
  }

export default AboutPage;
