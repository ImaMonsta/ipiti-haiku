import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { currentUser } from '../components/util/Auth';
import Login from '../views/Login';
import Home from '../views/Home';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = { user: undefined };
  }

  componentWillMount() {
    currentUser().then(user => this.setState({ user }));
  }

  render() {
    const { user } = this.state;
    const home = user ? Home : Login;
    return (
      <Router>
        <div>
          <Route path="/" component={home} />
        </div>
      </Router>
    );
  }
}

export default Routes;
