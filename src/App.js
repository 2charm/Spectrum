import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import {AboutPage} from './components/AboutPage.js';
import {LandingPage} from './components/LandingPage.js'
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        keys:[],
        topics:[],
        articles:{},
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
          articles:data
        })
        console.log(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
    }

  render() {

    return (
      <Router basename={process.env.PUBLIC_URL+'/'}>
        <div className="App">
          <div className="container">
            <NavBar topics={this.state.topics}/>
          </div>
            <NavSwitch articles={this.state.articles} topics={this.state.topics} keys={this.state.keys}/>
          </div>
      </Router>
    );
  }
}

export class NavBar extends Component {
  render() {
    return (
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex">
          <NavLink  exact to="/" className="p-2 text-muted">Home</NavLink>
          <NavLink  exact to="/" className="p-2 text-muted">Login</NavLink>
          <NavLink to="/about" className="p-2 text-muted">About Us</NavLink>
        </nav>
      </div>
    )
  }
}

export class NavSwitch extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/about" component={AboutPage}/>
      </Switch>
    )
  }
}


export default App;
