import React, { Component } from 'react';
import Loadable from 'react-loadable';
import AuthContext from './AppContext';
import Login from '../containers/Login';
import Spinner from '../components/common/Spinner';
import Center from '../components/layouts/Center';

const Home = Loadable({
  loader: () => import('../containers/Home'),
  loading: () => (
    <Center>
      <Spinner />
    </Center>
  )
});
class Loader extends Component {
  render() {
    return <AuthContext.Consumer>{({ user, loginGoogle }) => (user ? <Home /> : <Login loginGoogle={loginGoogle} />)}</AuthContext.Consumer>;
  }
}

export default Loader;
