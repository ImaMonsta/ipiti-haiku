import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Center from '../components/layouts/Center';

export class Login extends Component {
  render() {
    const { loginGoogle, t, i18n } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <Center>
        <div className="loginscreen">
          {/* This is just for demo purposes */}
          <button type="button" onClick={() => changeLanguage('en')}>
            Enghlish
          </button>
          <button type="button" onClick={() => changeLanguage('es')}>
            Español
          </button>

          <div>
            <h1 className="logo-name">IH+</h1>
          </div>
          <h3>{t('login.welcome')}</h3>
          <p>{t('login.message')}</p>
          <button type="button" className="btn btn-block btn-social btn-foursquare" onClick={loginGoogle}>
            <span className="fab fa-google" />
            {t('login.googleSignin')}
          </button>
          <p className="m-t">
            <small>{t('login.orTry')}</small>
          </p>
          <form className="m-t">
            <div className="form-group">
              <input type="email" className="form-control" placeholder={t('username')} required="" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder={t('password')} required="" />
            </div>
            <button type="submit" className="btn btn-primary block full-width m-b">
              {t('login.sigin')}
            </button>
            <a href=" ">
              <small>{t('login.forgotPassword')}</small>
            </a>
            <p className="text-muted text-center">
              <small>{t('login.notHaveAccount')}</small>
            </p>
            <a className="btn btn-sm btn-white btn-block" href="register.html">
              {t('login.createAccount')}
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

Login.defaultProps = {
  t: () => {}
};

Login.propTypes = {
  loginGoogle: PropTypes.func.isRequired,
  t: PropTypes.func
};

export default translate()(Login);
