/* global document */
import React, { Component } from 'react';
import { I18nextProvider } from 'react-i18next';
import Loader from './Loader';
import AppContext from './AppContext';
import { loginGoogle, currentUser, logout } from '../components/util/Auth';
import Center from '../components/layouts/Center';
import Spinner from '../components/common/Spinner';
import i18next from '../components/common/i18n';

class Root extends Component {
  constructor(props) {
    super(props);

    this.loginGoogle = async () => {
      const user = await loginGoogle();
      this.setState({ user });
    };

    this.logout = async () => {
      await logout();
      this.setState({ user: undefined });
    };

    this.checkUserStatus = async () => {
      this.setState({ loading: true }, async () => {
        const user = await currentUser();
        this.setState({ loading: false, user });
      });
    };

    this.toggleNavMenu = () => {
      let { navMenu } = this.state;
      navMenu = !navMenu;
      if (navMenu) document.body.classList.add('mini-navbar');
      else document.body.classList.remove('mini-navbar');
      this.setState({ navMenu });
    };

    this.state = {
      user: undefined,
      navMenu: false,
      loginGoogle: this.loginGoogle,
      logout: this.logout,
      checkUserStatus: this.checkUserStatus,
      toggleNavMenu: this.toggleNavMenu
    };
  }

  componentDidMount() {
    const { checkUserStatus } = this.state;
    checkUserStatus();
  }

  render() {
    const { loading } = this.state;
    return (
      <I18nextProvider i18n={i18next}>
        <AppContext.Provider value={this.state}>
          {loading ? (
            <Center>
              <Spinner />
            </Center>
          ) : (
            <Loader />
          )}
        </AppContext.Provider>
      </I18nextProvider>
    );
  }
}

export default Root;
