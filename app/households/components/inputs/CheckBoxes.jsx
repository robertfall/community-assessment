import React, { Component, PropTypes } from 'react';
import startCase from 'lodash/startCase';
import chunk from 'lodash/chunk';
import { Field } from 'redux-form';

export default class CheckBoxes extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    name: PropTypes.string,
    label: PropTypes.string,
    includeOther: PropTypes.bool
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


  children() {
    const { options, includeOther } = this.props;
    const optionsWithOther = includeOther
                           ? options.concat('Other')
                           : options;

    return chunk(optionsWithOther, 3).map((row, index) => (
      <div key={index}>
        {
          row.map((opt) => (
            <div key={opt} className="col-sm-4">
              <label className="checkbox-inline control-label">
                <Field
                  component="input"
                  type="checkbox"
                  name={this.props.name}
                />
                {startCase(opt)}
              </label>
            </div>
          ))
        }
      </div>
    ));
  }

  render() {
    return (
      <div>
        <label
          htmlFor={this.realName()}
          className="col-md-4 control-label"
        >
          {this.labelText()}
        </label>
        <div className="col-md-6">
          {this.children()}
        </div>
      </div>
    );
  }
}
