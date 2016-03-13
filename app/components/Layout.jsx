import React, { PropTypes } from 'react';

export default class AppLayout extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    loading: PropTypes.bool,
  };

  render() {
    return (
      <div className="container">
        <NavBarContainer {...this.props} />
        {
          this.props.loading ?
          <h1> Loading...</h1> :
          this.props.children
        }
        <DevTools />
      </div>
    );
  }
}
