import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import background from './img/mario-calvo-345-unsplash.jpg';
import {Button, Collapse} from 'react-bootstrap'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL+'/'}>
        <div className="App">
          <NavSwitch articles={this.props.articles}/>
        </div>
      </Router>
    );
  }
}

class LandingPage extends Component {
  render() {
    return (
      <div className="Landing">
        <div className="container">
          <NavBar/>
          <div className="intro-title">
            <h1 className="display-1">
              <Link to="/">Spectrum</Link>
            </h1>
            <h3>
              Gathering media from different perspectives for you
            </h3>
          </div>
        </div>
        <div className="landing-box">
          <img id="landing-page-img" src={background} className="img-fluid" alt="subway-background"/>
        </div>
      </div>
    )
  }
}

class NewsPage extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      open:false,
    }
  }
  render() {
    const { open } = this.state
    return (
      <div className="Landing">
        <div className="container">
          <NavBar/>
          <div className="intro-title">
            <h1 className="display-1">
              <Link to="/">Spectrum</Link>
            </h1>
            <h3>
              Gathering media from different perspectives for you
            </h3>
          </div>
        </div>
        <div className="landing-box">
          <img id="landing-page-img" src={background} className="img-fluid" alt="subway-background"/>
        </div>
        <div>
          <Button className="reveal-articles" onClick={() => this.setState({open: !open})} aria-controls="collapse-articles" aria-expanded={open}> Click </Button>
          <Collapse in={this.state.open}>
            <div>
              <NewsItem/>
              <NewsItem/>
              <NewsItem/>
              <NewsItem/>
            </div>
          </Collapse>
        </div>
      </div>
    )
  }
}

class NewsItem extends Component {
  render() {
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

class AboutPage extends Component {
  render() {
    return (
      <div className="container">
        <NavBar/>
        <div classNmae="intro-title">
          <h1 className="display-1">
            <Link to="/about">About us</Link>
          </h1>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-3">
            <div class="card">
              <img class="card-img-top" src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/35065614_1450006811772100_6584312300742639616_o.jpg?_nc_cat=109&_nc_ht=scontent-sea1-1.xx&oh=b7904d34b17a1b5b09e66f8a52be5827&oe=5CFD595E" alt="Andrew Hwang"/>
              <div class="card-body">
                <p class="card-text">Andrew Hwang</p>
                <p class="card-text">Andrew Yoonjae Hwang is a senior at the University of Washington studying Informatics. He is an aspiring software developer</p>
              </div>
            </div>  
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <div class="card">
              <img class="card-img-top" src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/37261545_1821386304566254_4010770310751059968_o.jpg?_nc_cat=107&_nc_ht=scontent-sea1-1.xx&oh=6691ab161b7f16a53507d753638e1ea9&oe=5CFDFBFE" alt="Alex Huang"/>
              <div class="card-body">
                <p class="card-text">Alex Huang</p>
                <p class="card-text">Alex Huang is a senior at the University of Washington studying Informatics. He is passionate about getting a job.</p>
              </div>
            </div>  
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <div class="card">
              <img class="card-img-top" src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/15625899_10158009630985010_974186479306896089_o.jpg?_nc_cat=103&_nc_ht=scontent-sea1-1.xx&oh=b1781a3e68b8afdd821e044f716d7c1c&oe=5CF33186" alt="Kevin Huynh"/>
              <div class="card-body">
                <p class="card-text">Kevin Huynh</p>
                <p class="card-text">Kevin Huynh is a senior at the University of Washington studying Informatics with a focus in Data Science. After he graduates, he plans to work as a software engineer.</p>
              </div>
            </div>  
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <div class="card">
              <img class="card-img-top" src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/14902963_10207994135037474_638356186703537087_o.jpg?_nc_cat=110&_nc_ht=scontent-sea1-1.xx&oh=f071c1d7608319994f876eeee97c8ad9&oe=5D006DC0" alt="Hannah Lee"/>
              <div class="card-body">
                <p class="card-text">Hannah Lee</p>
                <p class="card-text">Hannah Lee is a senior at the University of Washington studying Informatics. After she graduates, she plans at becoming a product manager at a tech company in Seattle.</p>
              </div>
            </div>  
          </div>
        </div>

        <div className="container">
          <p className="about-text">
            If you are a tester or if you would like to help us out on our project!
          </p>
          <form>
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="form-group">
              <label for="text-input">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type message here"></textarea>
            </div>
          </form>
        </div>
      </div>
    )
  }
}


class NavBar extends Component {
  render() {
    return (
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          <NavLink  exact to="/" className="p-2 text-muted">Facebook vs. Apple</NavLink>
          <NavLink to="/" className="p-2 text-muted">Facebook vs. Apple</NavLink>
          <NavLink to="/" className="p-2 text-muted">Facebook vs. Apple</NavLink>
          <NavLink to="/" className="p-2 text-muted">Facebook vs. Apple</NavLink>
          <NavLink to="/about" className="p-2 text-muted">About</NavLink>
        </nav>
      </div>
    )
  }
}

class NavSwitch extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={NewsPage}/>
        <Route path="/about" component={AboutPage}/>
      </Switch>
    )
  }
}


export default App;
