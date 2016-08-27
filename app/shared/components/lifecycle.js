import React, { Component } from 'react';

export default function lifeCycle(WrappedComponent) {
  return class Lifecycle extends Component {
    componentWillMount() {
      this.props.componentWillMount();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
