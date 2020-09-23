import React, {Component} from 'react';
import './App.css';
import Courses from './Courses';
import About from './About';
import Contact from './Contact';
import Intro from './Intro';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Intro />
          <div className="App">
            <ul className="App-header">
              <li>
                <NavLink to="/" activeClassName="active" exact={true}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/courses" activeClassName="active" exact={true}>
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active" exact={true}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <Switch>
              <Route exact path="/" component={About}></Route>
              <Route exact path="/courses" component={Courses}></Route>
              <Route exact path="/contact" component={Contact}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
