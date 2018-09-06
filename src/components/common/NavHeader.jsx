import React from 'react';
import AppContext from '../../config/AppContext';

const NavHeader = () => (
  <AppContext.Consumer>
    {({ user: { displayName, photoURL, email }, logout }) => (
      <li className="nav-header">
        <div className="dropdown profile-element">
          <img alt="something" className="rounded-circle" src={photoURL} height="48" width="48" />
          <a data-toggle="dropdown" className="dropdown-toggle" href=" ">
            <span className="block m-t-xs font-bold">{displayName}</span>
            <span className="text-muted text-xs block">
              {email} <b className="caret" />
            </span>
          </a>
          <ul className="dropdown-menu animated fadeInRight m-t-xs">
            <li>
              <a className="dropdown-item" href=" ">
                Profile
              </a>
            </li>
            <li className="dropdown-divider" />
            <li>
              <button type="button" className="dropdown-item" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div className="logo-element">IN+</div>
      </li>
    )}
  </AppContext.Consumer>
);

export default NavHeader;
