import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Community Assessment</a>
            </div>
            <ul className="nav navbar-nav">
              <li><a href="#">Forms</a></li>
              <li><a href="#">Data</a></li>
            </ul>
          </div>
        </nav>
        <div className="container">
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
