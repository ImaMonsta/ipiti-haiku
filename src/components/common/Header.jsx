import React from 'react';
import AppContext from '../../config/AppContext';

const Header = () => (
  <AppContext.Consumer>
    {({ logout, toggleNavMenu }) => (
      <div className="row border-bottom">
        <nav className="navbar navbar-static-top white-bg" style={{ marginBottom: 0 }}>
          <div className="navbar-header">
            <button type="button" className="navbar-minimalize minimalize-styl-2 btn btn-primary" onClick={toggleNavMenu}>
              <i className="fas fa-bars" />
            </button>
            <form role="search" className="navbar-form-custom" action="search_results.html">
              <div className="form-group">
                <input type="text" placeholder="Search for something..." className="form-control" name="top-search" id="top-search" />
              </div>
            </form>
          </div>
          <ul className="nav navbar-top-links navbar-right">
            <li>
              <span className="m-r-sm text-muted welcome-message">Welcome to IH+</span>
            </li>
            <li>
              <button type="button" onClick={logout} className="btn btn-link">
                <i className="fas fa-sign-out-alt" /> Log out
              </button>
            </li>
            <li>
              <a className="right-sidebar-toggle" href=" ">
                <i className="fa fa-tasks" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    )}
  </AppContext.Consumer>
);

export default Header;
