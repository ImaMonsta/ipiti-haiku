import React, { Component } from 'react';
import { currentUser } from '../components/util/Auth';
import Login from '../views/Login';
import Home from '../views/Home';
import Center from '../components/layouts/Center';
import Spinner from '../components/common/Spinner';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = { user: undefined, loading: true };
  }

  componentWillMount() {
    currentUser().then(user => this.setState({ user, loading: false }));
  }

  render() {
    const { loading, user } = this.state;

    if (loading)
      return (
        <Center>
          <Spinner />
        </Center>
      );

    if (user) return <Home />;

    return <Login />;
  }
}

export default Routes;
