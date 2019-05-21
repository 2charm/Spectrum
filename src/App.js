import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import {AboutPage} from './components/AboutPage.js';
import {LandingPage} from './components/LandingPage.js';
import {LoginForm} from './components/LoginForm.js';
import {SignupForm} from './components/SignupForm.js';
import {UserPage} from './components/UserPage.js'
import './App.css';

const SESSION_TOKEN = "sessionID";
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
      })
      .catch((err) => {
        console.log(err.message)
      })

    if(sessionStorage.getItem(SESSION_TOKEN) !== null) {
      this.setState({isLoggedIn:true})
    }
  }

  logout() {
    sessionStorage.removeItem(SESSION_TOKEN);
    this.setState({isLoggedIn:false})
  }

  showModal() {
    this.setState({show:true});
  }

  hideModal() {
    this.setState({show:false});
  }

  render() {
    if(!this.state.isLoaded) {
      return null;
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
        <Route exact path="/" render={() => <LandingPage articles={this.props.articles}/>}/>
        <Route path="/login" render={() => <LoginForm changeStatus={this.props.changeStatus} changeUser={this.props.changeUser}/>}/>
        <Route path="/register" component={SignupForm}/>
        <Route path="/user" component={UserPage}/>
        <Route path="/about" component={AboutPage}/>
      </Switch>
    )
  }
}


export default App;
