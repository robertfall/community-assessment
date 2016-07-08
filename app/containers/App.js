import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <span className="navbar-brand">
                <Link to="/">
                  Community Assessment
                </Link>
              </span>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="households/new">New Household</Link></li>
              <li><Link to="households">Existing Household</Link></li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}
