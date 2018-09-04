import React from 'react';
import PropTypes from 'prop-types';

const Center = ({ children }) => <div className="middle-box text-center animated fadeInDown">{children}</div>;

Center.propTypes = {
  children: PropTypes.object.isRequired
};

export default Center;
