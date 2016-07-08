import React, { Component, PropTypes } from 'react';
import startCase from 'lodash/startCase';
import { Field } from 'redux-form';

export default class BooleanCheckbox extends Component {
  static propTypes = {
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

    const pathParts = this.props.name.split('.');
    return pathParts[pathParts.length - 1];
  }


  render() {
    return (
      <div>
        <label htmlFor="gender" className="col-md-4 control-label">{this.labelText()}</label>
        <div className="col-md-6">
          <label className="col-md-4">
            <div className="checkbox">
              <Field
                component="input"
                type="checkbox"
                name={this.realName()}
              />
            </div>
          </label>
        </div>
      </div>
    );
  }
}
