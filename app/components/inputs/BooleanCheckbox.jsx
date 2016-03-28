import React, { Component, PropTypes } from 'react';
import startCase from 'lodash/startCase';

export default class BooleanCheckbox extends Component {
  static propTypes = {
    bindings: PropTypes.object.isRequired,
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


  render() {
    const { bindings } = this.props;
    return (
      <div>
        <label htmlFor="gender" className="col-md-4 control-label">{this.labelText()}</label>
        <div className="col-md-6">
          <label className="col-md-4">
            <div className="checkbox">
              <input type="checkbox" name={this.realName()} {...bindings} />
            </div>
          </label>
        </div>
      </div>
    );
  }
}
