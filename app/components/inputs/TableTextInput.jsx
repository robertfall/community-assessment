import React, { Component, PropTypes } from 'react';

export default class TableTextInput extends Component {
  static propTypes = {
    bindings: PropTypes.object.isRequired
  };

  realName() {
    const pathParts = this.props.bindings.name.split('.');
    return pathParts[pathParts.length - 1];
  }

  render() {
    const { bindings } = this.props;
    return (
      <input
        type="text"
        className="form-control"
        id={this.realName()}
        name={this.realName()}
        {...bindings}
        {...this.props}
      />
    );
  }
}
