import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import {LoginForm} from './pages/LoginForm.js';
import {SignupForm} from './pages/SignupForm.js';
import {UserPage} from './pages/UserPage.js';
import {FullSpectrumPage} from './pages/FullSpectrumPage.js';
import {MainPage} from './pages/MainPage.js';
import {LandingPage} from './pages/LandingPage.js'
import { css } from '@emotion/core';
import { BeatLoader } from 'react-spinners';
import spectrumhome from './img/spectrum-home.png';
import BackToTop from "react-back-to-top-button";
import './App.css';

const SESSION_TOKEN = "sessionID";

const override_load = css`
  position: fixed; /* or absolute */
  top: 50%;
  left: 50%;
`;

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        keys:[],
        topics:[],
        articles:{},
        isLoaded: false,
        isLoggedIn:false,
        user:null
      }
  }

  componentDidMount() {
    let url = "https://api.spectrumnews.me/v1/news";

    fetch(url, { method: "GET", headers: {
          "Content-Type": "text/plain"}})
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        let keys = Object.keys(data);
        let topics = [];
        keys.forEach((topic) => {
          topics.push(decodeURIComponent(topic))
        })

        this.setState({
          keys:keys,
          topics:topics,
          articles:data,
          isLoaded:true,
        })
        console.log(this.state.articles)
      })
      .catch((err) => {
        console.log(err.message)
      })

    if(sessionStorage.getItem(SESSION_TOKEN) !== null) {
      this.setState({isLoggedIn:true})
    }
  }

  logout() {
    
    fetch('https://api.spectrumnews.me/v1/sessions/mine', {
        method: 'DELETE',
        headers: {
            'Authorization':sessionStorage.getItem(SESSION_TOKEN),
        },
    })
    .then((response) => {
      sessionStorage.removeItem(SESSION_TOKEN);
      this.setState({isLoggedIn:false});
      console.log(response.status);
    })
    .catch((err) => {
      console.log(err.message);
    })
    
  }

  render() {
    if(!this.state.isLoaded) {
      return (
        <div className='sweet-loading'>
        <BeatLoader
          css={override_load}
          sizeUnit={"px"}
          size={20}
          color={'#E08D4F'}
          loading={!this.state.isLoaded}
        />
      </div> 
      );
    }
    return (
      <Router basename={process.env.PUBLIC_URL+'/'}>
        <div className="App">
          <div className="container">
            <NavBar 
              isLoggedIn={this.state.isLoggedIn} 
              logout={() => this.logout()}
              user={this.state.user}
              />
          </div>
          <NavSwitch articles={this.state.articles} 
            topics={this.state.topics} 
            keys={this.state.keys} 
            changeStatus={(isLoggedIn) => this.setState({isLoggedIn})}
            changeUser={(user) => this.setState({user})}
            />
            <BackToTop
              showOnScrollUp
              showAt={100}
              speed={1000}
              easing="easeInOutQuint"
            >
              <span><i className="fas fa-arrow-up"></i></span>
            </BackToTop>
        </div>
      </Router>
    );
  }
}

export class NavBar extends Component {
  render() {
    if(!this.props.isLoggedIn) {
      return (
        <div className="nav-scroller py-1 mb-2">
          <NavLink exact to="/" className="spectrum-home"><img src={spectrumhome} alt="home"/></NavLink>
          <nav className="nav d-flex">
            <NavLink  exact to="/" className="p-2 text-muted">Home</NavLink>
            <NavLink  exact to="/login" className="p-2 text-muted">Login</NavLink>
            <NavLink  exact to="/register" className="p-2 text-muted">Sign Up</NavLink>
            <NavLink to="/about" className="p-2 text-muted">About Us</NavLink>
          </nav>
        </div>
      )
    } else {
      return (
        <div className="nav-scroller py-1 mb-2">
          <NavLink exact to="/" className="spectrum-home"><img src={spectrumhome} alt="home"/></NavLink>
        <nav className="nav d-flex">
          <NavLink  exact to="/" className="p-2 text-muted">Home</NavLink>
          <NavLink  exact to="/user" className="p-2 text-muted">{sessionStorage.getItem('username')}</NavLink>
          <NavLink to="/" onClick={this.props.logout} className="p-2 text-muted">Logout</NavLink>
          <NavLink to="/about" className="p-2 text-muted">About Us</NavLink>
        </nav>
      </div>
      )
    }
  }
}

export class NavSwitch extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={(props) => <MainPage {...props} articles={this.props.articles}/>}/>
        <Route path="/login" render={(props) => <LoginForm {...props} changeStatus={this.props.changeStatus} changeUser={this.props.changeUser}/>}/>
        <Route path="/register" component={SignupForm}/>
        <Route path="/user" component={UserPage}/>
        <Route path="/about" component={LandingPage}/>
        <Route path="/fullspectrum/:category/:id" render={(props) => <FullSpectrumPage {...props} articles={this.props.articles}/>}/>
      </Switch>
    )
  }
}


export default App;
