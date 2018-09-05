import React, { Component } from 'react';
import Loader from './Loader';
import { AuthContext, loginGoogle, currentUser, logout } from '../components/util/Auth';
import Center from '../components/layouts/Center';
import Spinner from '../components/common/Spinner';

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

    this.state = {
      user: undefined,
      loginGoogle: this.loginGoogle,
      logout: this.logout
    };
  }

  componentDidMount() {
    this.setState({ loading: true }, async () => {
      const user = await currentUser();
      this.setState({ loading: false, user });
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <AuthContext.Provider value={this.state}>
        {loading ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <Loader />
        )}
      </AuthContext.Provider>
    );
  }
}

export default Root;
