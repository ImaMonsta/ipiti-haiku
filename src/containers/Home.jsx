import React, { Component } from 'react';
import SideMenu from '../components/layouts/SideMenu';
import NavHeader from '../components/common/NavHeader';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

class Home extends Component {
  render() {
    return (
      <div id="wrapper">
        <SideMenu>
          <NavHeader />
          <li className="active">
            <a href="index.html">
              <i className="fa fa-th-large" /> <span className="nav-label">Home</span> <span className="fa arrow" />
            </a>
            <ul className="nav nav-second-level">
              <li>
                <a href="index.html">People</a>
              </li>
            </ul>
          </li>
        </SideMenu>

        <div id="page-wrapper" className="gray-bg">
          <Header />
          <div className="wrapper wrapper-content animated fadeIn" />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
