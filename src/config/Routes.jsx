import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from '../components/util/Auth';
import Main from '../views/Login';
import Home from '../views/Home';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = { user: Auth() };
  }

  render() {
    const { user } = this.state;
    return (
      <Router>
        <div>{user ? <Route path="/" component={Main} /> : <Route path="/" component={Home} />}</div>
      </Router>
    );
  }
}

export default Routes;
