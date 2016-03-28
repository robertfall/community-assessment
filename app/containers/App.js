import React, { Component, PropTypes } from 'react';

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
              <span className="navbar-brand">Community Assessment</span>
            </div>
            <ul className="nav navbar-nav">
              <li><a href="#">Forms</a></li>
              <li><a href="#">Data</a></li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid">
          {this.props.children}
          {
            (() => {
              if (process.env.NODE_ENV !== 'production') {
                const DevTools = require('./DevTools');
                return <DevTools />;
              }
            })()
          }
        </div>
      </div>
    );
  }
}
