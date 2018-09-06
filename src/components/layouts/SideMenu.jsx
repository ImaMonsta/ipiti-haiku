import React from 'react';
import PropTypes from 'prop-types';

const SideMenu = ({ children }) => (
  <nav className="navbar-default navbar-static-side">
    <div className="sidebar-collapse">
      <ul className="nav metismenu" id="side-menu">
        {children}
      </ul>
    </div>
  </nav>
);

SideMenu.propTypes = {
  children: PropTypes.array.isRequired
};

export default SideMenu;
