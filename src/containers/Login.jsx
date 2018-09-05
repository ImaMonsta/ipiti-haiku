import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Center from '../components/layouts/Center';

class Login extends Component {
  render() {
    const { loginGoogle } = this.props;
    return (
      <Center>
        <div className="loginscreen">
          <div>
            <h1 className="logo-name">IH+</h1>
          </div>
          <h3>Welcome to IH+</h3>
          <p>Login in. To see it in action.</p>
          <button type="button" className="btn btn-block btn-social btn-foursquare" onClick={loginGoogle}>
            <span className="fab fa-google" />
            Sign in with Google
          </button>
          <p className="m-t">
            <small>Or try</small>
          </p>
          <form className="m-t">
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Username" required="" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" required="" />
            </div>
            <button type="submit" className="btn btn-primary block full-width m-b">
              Login
            </button>
            <a href=" ">
              <small>Forgot password?</small>
            </a>
            <p className="text-muted text-center">
              <small>Do not have an account?</small>
            </p>
            <a className="btn btn-sm btn-white btn-block" href="register.html">
              Create an account
            </a>
          </form>
          <p className="m-t">
            <small>Ipiti Haiku &copy; 2018</small>
          </p>
        </div>
      </Center>
    );
  }
}

Login.propTypes = {
  loginGoogle: PropTypes.func.isRequired
};

export default Login;
