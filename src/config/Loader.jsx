import React, { Component } from 'react';
import { AuthContext } from '../components/util/Auth';
import Login from '../containers/Login';
import Home from '../containers/Home';

class Loader extends Component {
  render() {
    return (
      <AuthContext.Consumer>{({ user, loginGoogle, logout }) => (user ? <Home logout={logout} /> : <Login loginGoogle={loginGoogle} />)}</AuthContext.Consumer>
    );
  }
}

export default Loader;
