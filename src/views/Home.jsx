import React, { Component } from 'react';
import { logout } from '../components/util/Auth';

class Home extends Component {
  render() {
    return (
      <div id="wrapper">
        <nav className="navbar-default navbar-static-side">
          <div className="sidebar-collapse">
            <ul className="nav metismenu" id="side-menu">
              <li className="nav-header">
                <div className="dropdown profile-element">
                  <img alt="something" className="rounded-circle" src="img/profile_small.jpg" />
                  <a data-toggle="dropdown" className="dropdown-toggle" href=" ">
                    <span className="block m-t-xs font-bold">David Williams</span>
                    <span className="text-muted text-xs block">
                      Art Director <b className="caret" />
                    </span>
                  </a>
                  <ul className="dropdown-menu animated fadeInRight m-t-xs">
                    <li>
                      <a className="dropdown-item" href="profile.html">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="contacts.html">
                        Contacts
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="mailbox.html">
                        Mailbox
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
              <li className="active">
                <a href="index.html">
                  <i className="fa fa-th-large" /> <span className="nav-label">Dashboards</span> <span className="fa arrow" />
                </a>
                <ul className="nav nav-second-level">
                  <li>
                    <a href="index.html">Dashboard v.1</a>
                  </li>
                  <li>
                    <a href="dashboard_2.html">Dashboard v.2</a>
                  </li>
                  <li>
                    <a href="dashboard_3.html">Dashboard v.3</a>
                  </li>
                  <li>
                    <a href="dashboard_4_1.html">Dashboard v.4</a>
                  </li>
                  <li className="active">
                    <a href="dashboard_5.html">Dashboard v.5</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

        <div id="page-wrapper" className="gray-bg">
          <div className="row border-bottom">
            <nav className="navbar navbar-static-top white-bg" style={{ 'margin-bottom': 0 }}>
              <div className="navbar-header">
                <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " href=" ">
                  <i className="fa fa-bars" />{' '}
                </a>
                <form role="search" className="navbar-form-custom" action="search_results.html">
                  <div className="form-group">
                    <input type="text" placeholder="Search for something..." className="form-control" name="top-search" id="top-search" />
                  </div>
                </form>
              </div>
              <ul className="nav navbar-top-links navbar-right">
                <li>
                  <span className="m-r-sm text-muted welcome-message">Welcome to IH+.</span>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle count-info" data-toggle="dropdown" href=" ">
                    <i className="fa fa-envelope" /> <span className="label label-warning">16</span>
                  </a>
                  <ul className="dropdown-menu dropdown-messages">
                    <li>
                      <div className="dropdown-messages-box">
                        <a className="dropdown-item float-left" href="profile.html">
                          <img alt="something" className="rounded-circle" src="img/a7.jpg" />
                        </a>
                        <div>
                          <small className="float-right">46h ago</small>
                          <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>. <br />
                          <small className="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown-divider" />
                    <li>
                      <div className="dropdown-messages-box">
                        <a className="dropdown-item float-left" href="profile.html">
                          <img alt="something" className="rounded-circle" src="img/a4.jpg" />
                        </a>
                        <div>
                          <small className="float-right text-navy">5h ago</small>
                          <strong>Chris Johnatan Overtunk</strong> started following <strong>Monica Smith</strong>. <br />
                          <small className="text-muted">Yesterday 1:21 pm - 11.06.2014</small>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown-divider" />
                    <li>
                      <div className="dropdown-messages-box">
                        <a className="dropdown-item float-left" href="profile.html">
                          <img alt="something" className="rounded-circle" src="img/profile.jpg" />
                        </a>
                        <div>
                          <small className="float-right">23h ago</small>
                          <strong>Monica Smith</strong> love <strong>Kim Smith</strong>. <br />
                          <small className="text-muted">2 days ago at 2:30 am - 11.06.2014</small>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown-divider" />
                    <li>
                      <div className="text-center link-block">
                        <a href="mailbox.html" className="dropdown-item">
                          <i className="fa fa-envelope" /> <strong>Read All Messages</strong>
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle count-info" data-toggle="dropdown" href=" ">
                    <i className="fa fa-bell" /> <span className="label label-primary">8</span>
                  </a>
                  <ul className="dropdown-menu dropdown-alerts">
                    <li>
                      <a href="mailbox.html" className="dropdown-item">
                        <div>
                          <i className="fa fa-envelope fa-fw" /> You have 16 messages
                          <span className="float-right text-muted small">4 minutes ago</span>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-divider" />
                    <li>
                      <a href="profile.html" className="dropdown-item">
                        <div>
                          <i className="fa fa-twitter fa-fw" /> 3 New Followers
                          <span className="float-right text-muted small">12 minutes ago</span>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-divider" />
                    <li>
                      <a href="grid_options.html" className="dropdown-item">
                        <div>
                          <i className="fa fa-upload fa-fw" /> Server Rebooted
                          <span className="float-right text-muted small">4 minutes ago</span>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-divider" />
                    <li>
                      <div className="text-center link-block">
                        <a href="notifications.html" className="dropdown-item">
                          <strong>See All Alerts</strong>
                          <i className="fa fa-angle-right" />
                        </a>
                      </div>
                    </li>
                  </ul>
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

          <div className="wrapper wrapper-content animated fadeIn" />

          <div className="footer">
            <div className="float-right">
              Location <strong>IH+</strong>.
            </div>
            <div>
              <strong>Copyright</strong> g3rm4n.xyz &copy; 2018
            </div>
          </div>
        </div>
        <div id="right-sidebar">
          <div className="sidebar-container">
            <ul className="nav nav-tabs navs-3">
              <li>
                <a className="nav-link active" data-toggle="tab" href="#tab-1">
                  {' '}
                  Notes{' '}
                </a>
              </li>
              <li>
                <a className="nav-link" data-toggle="tab" href="#tab-2">
                  {' '}
                  Projects{' '}
                </a>
              </li>
              <li>
                <a className="nav-link" data-toggle="tab" href="#tab-3">
                  {' '}
                  <i className="fa fa-gear" />{' '}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
