import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import {NewsArticle} from './components/NewsArticle.js';
import {AboutPage} from './components/AboutPage.js';
import {LandingPage} from './components/LandingPage.js'
import axios from 'axios';
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

    axios
      .get(url)
      .then((response) => {
        let keys = Object.keys(response.data);
        let topics = [];
        keys.forEach((topic) => {
          topics.push(decodeURIComponent(topic))
        })

        this.setState({
          keys:keys,
          topics:topics,
          articles:response.data
        })
      }).catch((err) => {
        console.log(err.message);
        console.log(err.request)
        console.log(err.config)
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
        <nav className="nav d-flex justify-content-between">
          <NavLink  exact to="/" className="p-2 text-muted">Home</NavLink>
          {
            this.props.topics.map((headline) => {
              return(
                <NavLink key={headline} to={"/" + headline} className="p-2 text-muted">{headline}</NavLink>
              )
            })
          } 
          <NavLink to="/about" className="p-2 text-muted">About</NavLink>
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
        {
            this.props.keys.map((headline) => {
              return(
                <Route key={headline} path={"/" + decodeURIComponent(headline)} render={(props) => <NewsArticle {...props} articles={this.props.articles[headline]} headline={headline}/>}/>
              )
            })
        } 
        <Route path="/about" component={AboutPage}/>
      </Switch>
    )
  }
}


export default App;
