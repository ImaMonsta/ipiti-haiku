import React from 'react';

const AppContext = React.createContext({
  user: undefined,
  checkCurrentUser: () => {},
  loginGoogle: () => {},
  logout: () => {},
  toggleNavMenu: () => {}
});

export default AppContext;
