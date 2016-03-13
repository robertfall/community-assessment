import React, { Component, PropTypes } from 'react';
import startCase from 'lodash/startCase';

export default class TextField extends Component {
  static propTypes = {
    bindings: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    name: PropTypes.string,
    label: PropTypes.string,
  };

  labelText() {
    return this.props.label
         ? this.props.label
         : startCase(this.realName());
  }

  realName() {
    if (this.props.name) return this.props.name;

    const pathParts = this.props.bindings.name.split('.');
    return pathParts[pathParts.length - 1];
  }

  children() {
    const { options, bindings } = this.props;
    return options.map((opt) => {
      return (
        <label className="radio-inline control-label">
          <input type="radio" name={this.realName()} value={opt} {...bindings}/> {startCase(opt)}
        </label>
      );
    });
  }

  render() {
    return (
      <div>
        <label htmlFor={this.realName()} className="col-md-2 col-md-offset-2 control-label">{this.labelText()}</label>
        <div className="col-md-6">
          { this.children() }
        </div>
      </div>
    );
  }
}
